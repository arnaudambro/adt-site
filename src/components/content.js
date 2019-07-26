import React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"
import { displayFlex, gatsbyImage } from '../styles/mixins';
import { getImagePropsForGatsby, getImageSrcFromImages } from '../helpers/selectors';

const ContentStyled = styled.div`
  max-width: ${({ theme }) => theme.width.max.content}px;
  min-width: ${({ theme }) => theme.width.min.app - 2 * theme.margin.X.min.app}px;
  ${displayFlex({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  })}
  p {
    margin-bottom: 20px;
    font-weight: 300;
    b {
      font-weight: 500;
    }
  }
  section {
    margin-top: 20px;
    width: 100%;
    outline: none;
    * {
      outline: none;
    }
  }
  summary {
    text-transform: uppercase;
    margin-bottom: 30px;
    width: 100%;
    &::after {
      content: "";
      border-bottom: 1px solid black;
      width: 100%;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
  ${gatsbyImage({
    width: '100%',
    height: '100%',
  })}
`

const Content = ({ images, nodes, debug = false }) => {
  const formattedNodes = nodes.map(({ node }) => node).reduce((newNodes, nodeContent, ind) => {
    if (!nodeContent.section) {
      return [...newNodes, nodeContent]
    }
    const newNodesCopy = [...newNodes]
    const lastNode = newNodesCopy.pop();
    if (!lastNode || lastNode.type !== 'section' || lastNode.section !== nodeContent.section) {
      const newSection = {
        type: 'section',
        section: nodeContent.section,
        id: nodeContent.id,
        content: [
          nodeContent
        ]
      };
      if (!lastNode) return [newSection]
      return [
        ...newNodesCopy,
        lastNode,
        newSection
      ]
    }
    lastNode.content.push(nodeContent)
    return [
      ...newNodesCopy,
      lastNode
    ]
  }, [])

  const renderNode = node => {
    if (debug) return <pre key={node.id}>{JSON.stringify(node, null, 2)}</pre>
    switch (node.type) {
      case 'section': {
        return renderSection(node)
      }
      case 'image':
        return renderImage(node);
      default:
        return renderElement(node)
    }
  }

  const renderSection = section => (
    <section key={section.id}>
      <details>
        {section.content.map(node => renderNode(node))}
      </details>
    </section>
  )

  const renderElement = node => <node.type key={node.id} dangerouslySetInnerHTML={{ __html: node.content }} />

  const renderImage = image => (
    <Img
      fluid={getImagePropsForGatsby(images.find(img => getImageSrcFromImages(img).includes(image.src)))}
      alt={image.alt || image.src}
      title={image.alt || image.src}
    />
  )

  return(
    <ContentStyled>
      {formattedNodes.map(node => renderNode(node))}
    </ContentStyled>
  )
}



export default Content

import React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"
import { displayFlex, gatsbyImage } from '../styles/mixins';
import { getImageFromSrc } from '../helpers/selectors';
import { useWindowSize } from '../helpers/hooks';

const ContentStyled = styled.div`
  margin-right: ${({ theme }) => theme.margin.X.min.app}px;
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
    &:last-of-type {
      margin-bottom: 60px;

    }
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
    margin-bottom: 60px;
    cursor: pointer;
    .gatsby-image-wrapper {
      margin-Top: 40px;
    }
  }
  summary #title {
    text-transform: uppercase;
    width: 100%;
    &::after {
      content: "";
      border-bottom: 1px solid black;
      width: ${({ contentWidth }) => contentWidth}px;
      position: absolute;
      bottom: -10px;
      left: -20px;
    }
  }
  ${gatsbyImage({
    width: '100%',
    height: '100%',
  })}
  details > .gatsby-image-wrapper {
    margin-bottom: 60px;
  }
`

const Content = ({ images, nodes, debug = false }) => {
  const contentRef = React.createRef(null);
  const { width: windowWidth } = useWindowSize()
  const formattedNodes = nodes.reduce((newNodes, nodeContent, ind) => {
    if (!nodeContent.section) {
      return [...newNodes, nodeContent]
    }
    const newNodesCopy = [...newNodes]
    const lastNode = newNodesCopy.pop();
    if (!lastNode || lastNode.type !== 'section' || lastNode.section !== nodeContent.section) {
      const newSection = {
        type: 'section',
        section: nodeContent.section,
        id: ind,
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

  const [contentWidth, setContentWidth] = React.useState(0);
  React.useLayoutEffect(() => {
    const width = contentRef.current ? contentRef.current.getBoundingClientRect().width : 0
    if (width !== contentWidth) {
      setContentWidth(width)
    }
  }, [windowWidth])

  const renderNode = node => {
    if (debug) return <pre key={node.id}>{JSON.stringify(node, null, 2)}</pre>
    switch (node.type) {
      case 'section': {
        return renderSection(node)
      }
      case 'summary': {
        return(
          <Summary
            key={node.content}
            summary={node}
            images={images}
            scrollTo={(scrollHeight) => {
              contentRef.current.parentNode.scrollTo({
                top: contentRef.current.parentNode.scrollTop + scrollHeight,
                behavior: 'smooth'
              })
            }}
          />
        )
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

  const renderElement = node => <node.type key={node.content} dangerouslySetInnerHTML={{ __html: node.content }} />

  const renderImage = image => (
    <Img
      fluid={getImageFromSrc(images, image.src)}
      alt={image.alt || image.src}
      title={image.alt || image.src}
      key={image.src}
    />
  )

  return(
    <ContentStyled
      ref={contentRef}
      contentWidth={contentWidth}
    >
      {formattedNodes.map(node => renderNode(node))}
    </ContentStyled>
  )
}

const Summary = ({ summary, images, scrollTo }) => {
  const contentRef = React.createRef(null);
  return(
    <summary
      ref={contentRef}
      onClick={() => {
        const detailsWillOpen = !contentRef.current.parentNode.open;
        if (detailsWillOpen) scrollTo(contentRef.current.lastChild.getBoundingClientRect().height)
      }}
    >
      <span id="title" dangerouslySetInnerHTML={{ __html: summary.content }} />
      {summary.image && (
        <Img
          fluid={getImageFromSrc(images, summary.image)}
          alt={summary.content}
          title={summary.content}
        />
      )}
    </summary>
  )
}


export default Content

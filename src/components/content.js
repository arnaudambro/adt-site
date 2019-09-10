import React from 'react'
import styled, { css } from 'styled-components';
import Img from "gatsby-image/withIEPolyfill"
import { displayFlex, gatsbyImage } from '../styles/mixins';
import { getImageFromSrc } from '../helpers/selectors';
import useWindowSize from '../helpers/hooks/useWindowSize';
import windowExists from '../helpers/windowExists';
import windowPathNameIncludes from '../helpers/windowPathNameIncludes';

const ImgStyled = styled(Img)`
  ${props => props.customStyle && `${props.customStyle}`}
`

const triangleSize = 18;
const triangleCss = image => css`
  list-style-image: none;
  &::marker {
    display: none;
  }
  &::-webkit-details-marker {
      display: none
  }
  &:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    background-image: url(${image});
    background-size: contain;
    height: ${triangleSize}px;
    width: ${triangleSize}px;
    background-repeat: no-repeat;
    color: transparent;
  }
`

const ContentStyled = styled.div`
  font-size: 14px;
  margin-right: ${({ theme }) => theme.margin.X.min.app}px;
  max-width: ${({ theme }) => theme.width.max.content}px;
  min-width: ${({ theme }) => theme.width.min.app - 2 * theme.margin.X.min.app}px;
  font-weight: 300;
  ${displayFlex({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  })}
  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.defaultColor};
    font-size: 0.9em;
    &:last-of-type {
      margin-bottom: ${({ theme }) => theme.margin.bottom.contentSummary}px;
    }
    b {
      font-weight: 500;
      color: hsla(0,0%,0%,0.8);
    }
    ${props => props.customStyle && `${props.customStyle}`}
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
    ${props => props.forceOpen && `pointer-events: none;`}
    margin-bottom: ${({ theme }) => theme.margin.bottom.contentSummary}px;
    cursor: pointer;
    font-weight: 400;
    transition: opacity 200ms ease-in-out;
    &:hover {
      opacity: 0.5;
    }
    /* list-style-image: url(${({ triangle }) => triangle}); */

    ${({ triangle }) => triangleCss(triangle.close)}

    .gatsby-image-wrapper {
      margin-top: 40px;
    }
  }
  details[open] summary {
    ${({ triangle }) => triangleCss(triangle.open)}
  }
  summary #title {
    text-transform: uppercase;
    width: 100%;
    font-size: 0.9em;
    padding-left: ${triangleSize + triangleSize / 6}px;
    &::after {
      content: "";
      border-bottom: 1px solid black;
      width: ${({ contentWidth }) => contentWidth}px;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
  ${gatsbyImage({
    width: '100%',
    height: '100%',
  })}
  details > .gatsby-image-wrapper {
    margin-bottom: ${({ theme }) => theme.margin.bottom.contentItem}px;
  }
  details > * {
    ${() => windowExists() && windowPathNameIncludes('debug') && `
      border: 1px solid #000;
    `}
  }
`

const Content = ({ images, nodes, debug = false, open = false, forceOpen = false }) => {
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
  // eslint-disable-next-line
  React.useLayoutEffect(() => {
    const width = contentRef.current ? contentRef.current.getBoundingClientRect().width : 0
    if (width !== contentWidth) {
      setContentWidth(width)
    }
  // eslint-disable-next-line
  }, [windowWidth])

  const renderNode = (node, ind) => {
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
        return renderElement(node, ind)
    }
  }

  const renderSection = section => (
    <section key={section.id}>
      <details open={open}>
        {section.content.map((node, ind) => renderNode(node, ind))}
      </details>
    </section>
  )

  const renderElement = (node, ind) => (
    <node.type
      key={ind}
      dangerouslySetInnerHTML={{ __html: node.content }}
      style={node.style ? JSON.parse(node.style) : {}}
    />
  )

  const renderImage = image => (
    <ImgStyled
      fluid={getImageFromSrc(images, image.src)}
      alt={image.alt || image.src}
      title={image.alt || image.src}
      key={image.src}
      customStyle={image.style}
    />
  )

  return(
    <ContentStyled
      ref={contentRef}
      contentWidth={contentWidth}
      triangle={{
        close: getImageFromSrc(images, 'Triangle-droite.png').src,
        open: getImageFromSrc(images, 'Triangle-bas.png').src,
      }}
      forceOpen={forceOpen}
    >
      {formattedNodes.map((node, ind) => renderNode(node, ind))}
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

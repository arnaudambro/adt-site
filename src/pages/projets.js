import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from 'styled-components'
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { displayFlex, gatsbyImage } from "../styles/mixins";
import { media } from "../styles/mediaQueries";
import {
  getTitle,
  getDescription,
  getMaterial,
  getMaterialHeight,
  getWinDate,
  getDeliveryDisplayed,
  getImagePropsForGatsby,
  getImageSrcFromImages,
  getMaterialImageSrc,
  getLocation,
  getSurface,
} from '../helpers/selectors'

const ProjetWrapper = styled(Link)`
  height: ${({ height }) => height}px;
  margin-bottom: 5px;
  display: flex;
  ${({ theme }) => gatsbyImage({
    width: theme.width.material + 'px !important',
    height: '100% !important',
    desktop: {
      width: theme.width.desktop.material + 'px !important'
    }
  })}
`

const ImgStyled = styled(Img)`
  opacity: ${props => props.visible ? 0.5 : 1};
  transition: opacity 200ms ease-in-out;
`

const DescriptionContainer = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.width.indicator + theme.margin.right.indicator + theme.margin.left.indicator}px;
  ${media.desktop`
    margin-left: ${({ theme }) => theme.width.desktop.indicator + theme.margin.right.desktop.indicator + theme.margin.left.desktop.indicator}px;
  `}
  ${displayFlex({ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' })}
  margin-right: ${({ theme }) => theme.width.hideScrollbar - theme.width.scrollBar}px;
  opacity: ${({ visible }) => visible ? 1 : 0};
  transform: ${({ visible }) => visible ? 'translateX(0)' : 'translateX(50px)'};
  transition: all 200ms ease-in-out;
  &::before {
    content: "";
    border-top: 1px solid ${({ theme }) => theme.color.darkGrey};
    width: ${({ theme }) => theme.width.indicator}px;
    position: absolute;
    top: 1px;
    left: ${({ theme }) => -theme.width.indicator - theme.margin.right.indicator}px;
    ${media.desktop`
      left: ${({ theme }) => -theme.width.desktop.indicator - theme.margin.right.desktop.indicator}px;
      width: ${({ theme }) => theme.width.desktop.indicator}px;
    `}
  }
`
const Title = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: .75rem;
  line-height: 1em;
  margin-bottom: 18px;
`

const cssContent = css`
  font-weight: 300;
  font-size: .7rem;
`
const Description = styled.span`
  text-transform: uppercase;
  ${cssContent}
`
const Location = styled.span`
  text-transform: capitalize;
  ${cssContent}
`
const Surface = styled.span`
  ${cssContent}
`
const Delivery = styled.span`
text-transform: capitalize;
  ${cssContent}
`
const Material = styled.span`
text-transform: capitalize;
  ${cssContent}
`

const Projets = () => {
    const [visibleProjet, setVisibleProjet] = React.useState(null)

    const {
      allProjetsJson:{edges: projets },
      allImageSharp:{edges: images },
    } = useStaticQuery(graphql`
    query ProjetsQuery {
      allProjetsJson {
        edges {
          projet: node {
            id
            properties {
              size
              material
              dates {
                win
                delivery
              }
              description
              madeBy
              madeFor
              city
              departmentName
              departmentNumber
              country
              function
              phasesWorked
              status
            }
            presentation {
              image
              height
            }
            title
          }
        }
      }
      allImageSharp {
        edges {
          ...AllImages
        }
      }
    }
  `)

  return <Layout >
    <SEO title="Projets" />
    {projets
    .sort(
      (a, b) =>
        getWinDate(a.projet) > getWinDate(b.projet) ? -1 : 1
    )
    .map(({ projet }) => (
      <Projet
        key={projet.id}
        img={getImagePropsForGatsby(images.find(img => getImageSrcFromImages(img).includes(getMaterialImageSrc(projet))))}
        setVisibleProjet={setVisibleProjet}
        visible={visibleProjet === projet.id}
        {...projet}
        />
    ))}
  </Layout>
}

const Projet = ({ setVisibleProjet, visible, ...projet }) =>
  <ProjetWrapper
    height={getMaterialHeight(projet)}
    onClick={(e) => {
      if (!visible) {
        e.preventDefault();
        setVisibleProjet(projet.id)
      }
    }}
    onMouseEnter={() => {
      if (window.isTouchDevice) return;
      setVisibleProjet(projet.id)
    }}
    onMouseOver={() => {
      if (window.isTouchDevice) return;
      !visible && setVisibleProjet(projet.id)
    }}
    onMouseLeave={() => {
      if (window.isTouchDevice) return;
      setVisibleProjet(null)
    }}
    to={`/projet/${getTitle(projet)}`}
  >
    <ImgStyled
      fluid={projet.img}
      alt={`${getTitle(projet)} - ${getMaterial(projet)}`}
      title={`${getTitle(projet)} - ${getMaterial(projet)}`}
      visible={visible}
    />
    <DescriptionContainer
      visible={visible}
    >
      <Title>{getTitle(projet)} - {getWinDate(projet).getFullYear()}</Title>
      <Description>{getDescription(projet)}</Description>
      <Location>{getLocation(projet)}</Location>
      <Surface>{getSurface(projet)} m<sup>2</sup></Surface>
      <Delivery>{getDeliveryDisplayed(projet)}</Delivery>
      <Material>Matière: {getMaterial(projet)}</Material>
    </DescriptionContainer>
    {/* <pre>{JSON.stringify(projet, null, 2)}</pre> */}
  </ProjetWrapper>



export default Projets


import React from "react"
import styled, { css } from 'styled-components';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";
import {
  getTitle,
  getDescription,
  getLocation,
  getSurface,
  getEtat,
  getMaterial,
  getCollab,
  getPrix,
  getMission} from "../helpers/selectors";
import Arrows from "../components/arrows";
import useProjetsDataAndImages from "../helpers/hooks/useProjetsDataAndImages";

const Title = styled.h2`
  text-transform: uppercase;
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.black};
  -webkit-text-fill-color: transparent;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
  max-width: calc(100% - ${({ theme }) => theme.width.arrows}px - 10px);
`

const cssContent = css`
  display: block;
  font-weight: 300;
  font-size: 0.8rem;
`
const Collab = styled.span`
  text-transform: uppercase;
  ${cssContent}
  font-weight: 400;
  margin-bottom: 10px;
`
const Description = styled.span`
  text-transform: uppercase;
  ${cssContent}
  font-weight: 400;
  margin-top: 25px;
`
const Location = styled.span`
  text-transform: capitalize;
  ${cssContent}
`
const Surface = styled.span`
  margin-top: 10px;
  ${cssContent}
`
const Etat = styled.span`
  text-transform: capitalize;
  ${cssContent}
`
const Material = styled.span`
text-transform: capitalize;
  ${cssContent}
`
const Mission = styled.span`
  ${cssContent}
margin-bottom: 30px;
`

const Cout = styled.span`
text-transform: capitalize;
  ${cssContent}
`

const Projet = (props) => {
  const { projets, images } = useProjetsDataAndImages()
  const { projet } = props.pageContext;
  const details = projets.find(({ code_projet }) => code_projet === projet.code_projet)
  return(
    <Layout noMaxWidth>
      <SEO title={getTitle(details)} />
      <Title>{getTitle(details)}.</Title>
      <Description>{getDescription(details)}</Description>
      {getCollab(details) && <Collab>Réalisé en collaboration avec {getCollab(details)}</Collab>}
      <Location>{getLocation(details)}</Location>
      <Surface>Surface: {getSurface(details)} m<sup>2</sup></Surface>
      <Material>Matière: {getMaterial(details)}</Material>
      <Cout>Coût: {getPrix(details)}</Cout>
      <Etat>{getEtat(details)}</Etat>
      <Mission>{getMission(details)}</Mission>
      <Content
        nodes={projet.content}
        images={images}
        />
      <Arrows projets={projets.map(({ code_projet }) => code_projet)} projet={projet.code_projet} />
    </Layout>
  )
}


export default Projet
import React from "react"
import styled, { css } from "styled-components"

import {
  getCode,
  getTitle,
  getCollab,
  getDescription,
  getMaterial,
  getMaterialHeightPageProjets,
  getYear,
  getEtat,
  getLocation,
  getSurface,
  getMission,
  getEmpty,
} from "../helpers/selectors"
import { addSuffix } from "../helpers/projetUrl"
import Item from "./item"
import { Link } from "gatsby"
import { media } from "../styles/mediaQueries"

const Title = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1em;
  margin-bottom: ${({ theme }) => theme.margin.bottom.projetName}px;
`

const TitleMobile = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1em;
  margin-bottom: 10px;
  margin-top: 1px;
  display: block;
  ${media.desktop`display: none;`}
`

const cssContent = css`
  font-weight: 300;
  font-size: 0.7rem;
`
const Collab = styled.span`
  font-style: italic;
  font-weight: 400;
  font-style: italic;
  font-size: 0.7rem;
  margin-bottom: ${({ theme }) => theme.margin.bottom.projetName}px;
  margin-top: -${({ theme }) => theme.margin.bottom.projetName}px;
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
const Mission = styled.span`
  ${cssContent}
`

const Etat = styled.span`
  ${cssContent}
`
const Material = styled.span`
  /* text-transform: capitalize; */
  ${cssContent}
  font-weight: 500;
`

const ProjetMaterialIcon = ({ setVisible, visible, ...projet }) => (
  <>
    <Item
      height={getMaterialHeightPageProjets(projet)}
      to={`/projet/${addSuffix(getCode(projet))}`}
      as={!getEmpty(projet) ? Link : "div"}
      setVisible={setVisible}
      visible={visible}
      alt={`${getTitle(projet)} - ${getMaterial(projet)}`}
      id={projet.id}
      images={projet.images}
      isEmpty={getEmpty(projet)}
    >
      <Title>
        {getTitle(projet)}{" "}
        {/* Number.isNaN(getYear(projet)) ? "" : getYear(projet) */}
      </Title>
      {Boolean(getCollab(projet)) && (
        <Collab>Cotraitance avec {getCollab(projet)}</Collab>
      )}
      {getDescription(projet) && (
        <Description>{getDescription(projet)}</Description>
      )}
      {getLocation(projet) && <Location>{getLocation(projet)}</Location>}
      {getSurface(projet) && (
        <Surface>
          Surface: {getSurface(projet)} m<sup>2</sup>
        </Surface>
      )}
      {getEtat(projet) && <Etat>{getEtat(projet)}</Etat>}
      {getMaterial(projet) && (
        <Material>Matière: {getMaterial(projet)}</Material>
      )}
      {getMission(projet) && <Mission>{getMission(projet)}</Mission>}
    </Item>
    <TitleMobile>
      {getTitle(projet)}{" "}
      {/* Number.isNaN(getYear(projet)) ? "" : getYear(projet) */}
    </TitleMobile>
  </>
)

export default ProjetMaterialIcon

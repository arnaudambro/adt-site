import React from "react"
import styled, { css } from "styled-components"

import {
  getCode,
  getTitle,
  getCollabBdd,
  getDescriptionBdd,
  getEtat,
  getLocation,
  getSurface,
  getMissionLong,
  getEmpty,
  getMaterialLong,
  getMaterial,
  getPrix,
  getClient,
} from "../helpers/selectors"
import { addSuffix } from "../helpers/projetUrl"
import Item from "./item"
import { Link } from "gatsby"
import { media } from "../styles/mediaQueries"

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
  font-weight: 400;
  font-size: 0.65rem;
  line-height: 1em;
`
const Collab = styled.span`
  ${cssContent}
`
const Description = styled.span`
  max-width: 20vw;

  ${cssContent}
`
const Client = styled.span`
  ${cssContent}
`

const Location = styled.span`
  text-transform: capitalize;
  ${cssContent}
`
const MOE = styled.span`
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

const Cout = styled.span`
  ${cssContent}
`

const Material = styled.span`
  /* text-transform: capitalize; */
  ${cssContent}
  font-weight: 600;
`

const NewDatabaseItem = ({
  setVisible,
  visible,
  forNewBdd,
  getHeight,
  ...projet
}) => (
  <>
    <Item
      height={getHeight(projet)}
      to={`/projet/${addSuffix(getCode(projet))}`}
      as={!getEmpty(projet) ? Link : "div"}
      setVisible={setVisible}
      visible={visible}
      alt={`${getTitle(projet)} - ${getMaterial(projet)}`}
      id={projet.id}
      images={projet.images}
      isEmpty={getEmpty(projet)}
      noScreening
      forNewBdd={forNewBdd}
    >
      {getDescriptionBdd(projet) && (
        <Description>
          {getTitle(projet)} - {getDescriptionBdd(projet)}
        </Description>
      )}
      {getClient(projet) && <Client>{getClient(projet)}</Client>}
      {getLocation(projet) && <Location>{getLocation(projet)}</Location>}
      {getMissionLong(projet) && <Mission>{getMissionLong(projet)}</Mission>}
      {getCollabBdd(projet) && <Collab>{getCollabBdd(projet)}</Collab>}
      {getMaterialLong(projet) && (
        <Material>{getMaterialLong(projet)}</Material>
      )}
      {getSurface(projet) && <Surface>{getSurface(projet)} m2</Surface>}
      {getPrix(projet) && <Cout>{getPrix(projet)}</Cout>}
      {getEtat(projet) && <Etat>{getEtat(projet)}</Etat>}
    </Item>
    <TitleMobile>
      {getTitle(projet)}{" "}
      {/* Number.isNaN(getYear(projet)) ? "" : getYear(projet) */}
    </TitleMobile>
  </>
)

export default NewDatabaseItem

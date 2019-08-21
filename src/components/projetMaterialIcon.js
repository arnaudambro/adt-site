import React from "react"
import styled, { css } from 'styled-components'

import {
  getCode,
  getTitle,
  getCollab,
  getDescription,
  getMaterial,
  getMaterialHeightPageProjets,
  getYear,
  getDeliveryDisplayed,
  getLocation,
  getSurface,
} from '../helpers/selectors'
import Item from "./item";
import { Link } from "gatsby";

const Title = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: .75rem;
  line-height: 1em;
  margin-bottom: ${({ theme }) => theme.margin.bottom.projetName}px;
`

const cssContent = css`
  font-weight: 300;
  font-size: .7rem;
`
const Collab = styled.span`
  font-style: italic;
  font-weight: 400;
  font-style: italic;
  font-size: .7rem;
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
const Delivery = styled.span`
text-transform: capitalize;
  ${cssContent}
`
const Material = styled.span`
text-transform: capitalize;
  ${cssContent}
`

const ProjetMaterialIcon = ({ setVisible, visible, ...projet }) =>
  <Item
    height={getMaterialHeightPageProjets(projet)}
    to={`/projet/${getCode(projet)}`}
    as={Link}
    setVisible={setVisible}
    visible={visible}
    alt={`${getTitle(projet)} - ${getMaterial(projet)}`}
    id={projet.id}
    images={projet.images}
  >
    <Title>{getTitle(projet)} {getYear(projet)}</Title>
    {getCollab(projet) && <Collab>Cotraitance avec {getCollab(projet)}</Collab>}
    <Description>{getDescription(projet)}</Description>
    <Location>{getLocation(projet)}</Location>
    <Surface>{getSurface(projet)} m<sup>2</sup></Surface>
    <Delivery>{getDeliveryDisplayed(projet)}</Delivery>
    <Material>Matière: {getMaterial(projet)}</Material>
  </Item>




export default ProjetMaterialIcon


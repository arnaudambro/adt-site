import React from 'react';
import material from './vb11_material.jpg';

import VB11 from './VB11';

const vb11 = {
  vb11: {
    name: 'vb11',
    delivery: new Date(2019, 8, 1),
    winDate: new Date(2018, 7, 1),
    surface: 100,
    materialPicHeight: 14,
    cost: 'NC',
    img: material,
    component(language, name, index: 0) {
      return <VB11 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'extension and rehabilitation of a private house'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '49',
      country: 'france',
      function: 'private house',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: {
        __html: 'sanded concrete'
      }
    },
    fr: {
      title: {
        __html: "extension et réhabilitation d'une résidence privée"
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '49',
      country: 'france',
      function: 'maison privée',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: {
        __html: 'Béton sablé'
      }
    }
  }
};

export default vb11;

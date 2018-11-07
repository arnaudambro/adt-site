import React from 'react';
import material from './am03_material.jpg';

import AM03 from './AM03';

const am03 = {
  am03: {
    name: 'am03',
    delivery: new Date(2018, 10, 1),
    winDate: new Date(2018, 6, 1),
    surface: 90,
    materialPicHeight: 12,
    cost: 'NC',
    img: material,
    component(language, name, index: 0) {
      return <AM03 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'rehabilitation of an appartment'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'levallois-perret',
      departmentName: 'hauts-de-seine',
      departmentNumber: '92',
      country: 'france',
      function: 'appartment',
      phasesWorked: 'EXE',
      status: 'delivered',
      material: {
        __html: 'stained concrete'
      }
    },
    fr: {
      title: {
        __html: "réhabilitation d'un appartement"
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'levallois-perret',
      departmentName: 'hauts-de-seine',
      departmentNumber: '92',
      country: 'france',
      function: 'appartement',
      phasesWorked: 'EXE',
      status: 'livré',
      material: {
        __html: 'Béton teinté'
      }
    }
  }
};

export default am03;

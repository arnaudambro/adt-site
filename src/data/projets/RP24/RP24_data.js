import React from 'react';
import material from './rp24_material.jpg';

import RP24 from './RP24';

const rp24 = {
  rp24: {
    name: 'rp24',
    delivery: new Date(2018, 11, 1),
    winDate: new Date(2018, 5, 27),
    surface: 150,
    materialPicHeight: 19,
    cost: 'NC',
    img: material,
    component(language, name, index: 0) {
      return <RP24 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'rehabilitation of a restaurant'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'paris',
      departmentName: 'île-de-france',
      departmentNumber: '75',
      country: 'france',
      function: 'restaurant',
      phasesWorked: 'DET',
      status: 'DET',
      material: {
        __html: 'Glass tile'
      }
    },
    fr: {
      title: {
        __html: "réhabilitation d'un restaurant"
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'paris',
      departmentName: 'île-de-france',
      departmentNumber: '75',
      country: 'france',
      function: 'restaurant',
      phasesWorked: 'DET',
      status: 'DET',
      material: {
        __html: 'Carreau de verre'
      }
    }
  }
};

export default rp24;

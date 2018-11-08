import React from 'react';
import material from './vd232_material.jpg';

import VD232 from './VD232';

const vd232 = {
  vd232: {
    name: 'vd232',
    delivery: new Date(2020, 0, 1),
    winDate: new Date(2018, 9, 1),
    surface: 200,
    materialPicHeight: 27,
    cost: 'NC',
    img: material,
    component(language, name, index: 0) {
      return <VD232 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'extension and rehabilitation of a private house'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'saint-denis-en-val',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'private house',
      phasesWorked: 'APD',
      status: 'APD',
      material: {
        __html: 'sanded concrete'
      }
    },
    fr: {
      title: {
        __html: "extension et réhabilitation d'une maison privée"
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'saint-denis-en-val',
      cityDatabase: 'saint-denis<br/>-en-val',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'maison privée',
      phasesWorked: 'APD',
      status: 'APD',
      material: {
        __html: 'Béton sablé'
      },
      materialDatabase: {
        __html: 'Béton<br/>sablé'
      }
    }
  }
};

export default vd232;

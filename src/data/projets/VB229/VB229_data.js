import React from 'react';
import vb229_material from './vb229_material.jpg';

import VB229 from './VB229';

const vb229 = {
  vb229: {
    name: 'vb229',
    delivery: null,
    winDate: new Date(2016, 11, 1),
    surface: 110,
    materialPicHeight: 9,
    cost: 'NC',
    img: vb229_material,
    component(language, name, index: 0) {
      return <VB229 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'extension and rehabilitation of granges'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'sologne',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'private house',
      phasesWorked: 'APD',
      status: 'PC',
      material: {
        __html: 'brick'
      }
    },
    fr: {
      title: {
        __html: 'extension et rehabilitation de granges'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'sologne',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'maison privée',
      phasesWorked: 'APD',
      status: 'PC',
      material: {
        __html: 'Brique artisanale'
      }
    }
  }
};

export default vb229;

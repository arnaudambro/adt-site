import React from 'react';
import vh16_material from './vh16_material.jpg';

import VH16 from './VH16';

const vh16 = {
  vh16: {
    name: 'vh16',
    delivery: new Date(2018, 4, 1),
    winDate: new Date(2016, 4, 1),
    surface: 320,
    materialPicHeight: 10,
    cost: 'NC',
    img: vh16_material,
    component(language, name, index: 0) {
      return <VH16 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'building of private house'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'private house',
      phasesWorked: 'DET',
      status: 'EXE',
      material: {
        __html: 'balayed<br />enduit'
      }
    },
    fr: {
      title: {
        __html: 'construction d’une maison privée'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'maison privée',
      phasesWorked: 'DET',
      status: 'EXE',
      material: {
        __html: 'enduit<br />balayé'
      }
    }
  }
};

export default vh16;

import React from 'react';
import hd11_material from './hd11_material.jpg';

import HD11 from './HD11';

const hd11 = {
  hd11: {
    name: 'hd11',
    delivery: new Date(2019, 9, 1),
    winDate: new Date(2017, 9, 1),
    surface: 1020,
    materialPicHeight: 33,
    cost: 'NC',
    img: hd11_material,
    component(language, name, index: 0) {
      return <HD11 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'rehabilitation of a 4*&nbsphotel'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'sadim<br /> company'
      },
      city: 'locmariaquer',
      departmentName: 'morbihan',
      departmentNumber: '56',
      country: 'france',
      function: 'hotel',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: {
        __html: 'Granite'
      }
    },
    fr: {
      title: {
        __html: `réhabilitation et extension d’un hôtel&nbsp;4*`
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'société<br />sadim'
      },
      city: 'locmariaquer',
      departmentName: 'morbihan',
      departmentNumber: '56',
      country: 'france',
      function: 'hôtel',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: {
        __html: 'Granit'
      }
    }
  }
};

export default hd11;

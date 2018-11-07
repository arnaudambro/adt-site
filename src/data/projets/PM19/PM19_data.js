import React from 'react';
import pm19_material from './pm19_material.jpg';

import PM19 from './PM19';

const pm19 = {
  pm19: {
    name: 'pm19',
    delivery: new Date(2018, 6, 1),
    winDate: new Date(2017, 8, 1),
    surface: 170,
    materialPicHeight: 7,
    cost: 'NC',
    img: pm19_material,
    component(language, name, index: 0) {
      return <PM19 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'conception of a pool and a pool house'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'brézé',
      departmentName: 'maine-et-loire',
      departmentNumber: '49',
      country: 'france',
      function: 'piscine & pool house',
      phasesWorked: 'PRO',
      status: 'delivered',
      material: {
        __html: 'tufeau'
      }
    },
    fr: {
      title: {
        __html: 'conception d’une piscine et d’un pool-house'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'brézé',
      departmentName: 'maine-et-loire',
      departmentNumber: '49',
      country: 'france',
      function: 'piscine & pool house',
      phasesWorked: 'PRO',
      status: 'livré',
      material: {
        __html: 'Tuffeau'
      }
    }
  }
};

export default pm19;

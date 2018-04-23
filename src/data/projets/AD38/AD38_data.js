import React from 'react';
import ad38_material from './ad38_material.jpg';

import AD38 from './AD38';

const ad38 = {
  ad38: {
    name: 'ad38',
    delivery: new Date(2016, 11, 1),
    winDate: new Date(2016, 1, 1),
    surface: 110,
    materialPicHeight: 21,
    cost: 'NC',
    img: ad38_material,
    component(language, name, index: 0) {
      return <AD38 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'réhabilitation d’un appartement'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'private<br />client'
      },
      city: 'meudon',
      departmentName: 'hauts-de-france',
      departmentNumber: '92',
      country: 'france',
      function: 'appartment',
      phasesWorked: 'pro',
      status: 'delivered',
      material: {
        __html: 'stone'
      }
    },
    fr: {
      title: {
        __html: 'réhabilitation d’un appartement'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'client<br />privé'
      },
      city: 'meudon',
      departmentName: 'hauts-de-france',
      departmentNumber: '92',
      country: 'france',
      function: 'appartement',
      phasesWorked: 'pro',
      status: 'livré',
      material: {
        __html: 'Pierre'
      }
    }
  }
};

export default ad38;

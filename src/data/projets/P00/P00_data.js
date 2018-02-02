import React from 'react';
import p00_material from './p00_material.jpg';

import P00 from './P00';


const p00 = {
  P00: {
    name: '00',
    delivery: null,
    winDate: new Date(2014, 4, 1),
    surface: 10000,
    materialPicHeight: 14,
    img: p00_material,
    component(language, name, index: 0) {return <P00 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'creation of a tide and horizon sanctuary'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'diploma',
      },
      city: 'pleubian',
      departmentName: 'côtes d\'armor',
      departmentNumber: '22',
      country: 'france',
      function: 'cultural',
      phasesWorked: '-',
      status: null,
      material: {
        __html: 'gross concrete'
      },
    },
    fr: {
      title: {
        __html: 'création d\'un sanctuaire des marées et de l\'horizon'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'diplôme',
      },
      city: 'pleubian',
      departmentName: 'côtes d\'armor',
      departmentNumber: '22',
      country: 'france',
      function: 'culturel',
      phasesWorked: '-',
      status: null,
      material: {
        __html: 'béton<br />brut',
      }
    }
  }
}

export default p00;

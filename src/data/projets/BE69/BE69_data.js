import React from 'react';
import be69_material from './be69_material.png';

import BE69 from './BE69';

const be69 = {
  be69: {
    name: 'be69',
    delivery: new Date(2018, 11, 1),
    winDate: new Date(2018, 3, 27),
    surface: 650,
    materialPicHeight: 25,
    cost: 'NC',
    img: be69_material,
    component(language, name, index: 0) {
      return <BE69 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'rehabilitation of an office building'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'EOLIS'
      },
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'office building',
      phasesWorked: 'EXE',
      status: 'EXE',
      material: {
        __html: 'black wood'
      }
    },
    fr: {
      title: {
        __html: "réhabilitation d'un<br />immeuble de bureaux"
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'EOLIS'
      },
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'bureaux',
      phasesWorked: 'EXE',
      status: 'EXE',
      material: {
        __html: 'bois noir'
      }
    }
  }
};

export default be69;

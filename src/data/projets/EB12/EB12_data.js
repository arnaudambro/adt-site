import React from 'react';
import eb12_material from './eb12_material.jpg';

import EB12 from './EB12';

const eb12 = {
  eb12: {
    name: 'eb12',
    delivery: new Date(2018, 12, 1),
    winDate: new Date(2017, 6, 1),
    surface: 720,
    materialPicHeight: 29,
    cost: 'NC',
    img: eb12_material,
    component(language, name, index: 0) {
      return <EB12 language={language} name={name} key={index} />;
    },
    en: {
      title: {
        __html: 'extension et réhabilitation du siège de l’entreprise barillet'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'barillet<br />company'
      },
      city: 'chateauneuf-sur-loire',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'head office',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: {
        __html: 'accoya'
      }
    },
    fr: {
      title: {
        __html: 'extension et réhabilitation du siège de l’entreprise barillet'
      },
      madeBy: 'ADT',
      madeFor: {
        __html: 'entreprise barillet'
      },
      city: 'chateauneuf-sur-loire',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'siège social',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: {
        __html: 'Accoya'
      }
    }
  }
};

export default eb12;

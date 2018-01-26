import React from 'react';
import ad38_material from '../img/materials/ad38_material.jpg';
import eb12_material from '../img/materials/eb12_material.jpg';
import hd11_material from '../img/materials/hd11_material.jpg';
import pm19_material from '../img/materials/pm19_material.jpg';
import vb229_material from '../img/materials/vb229_material.jpg';
import vh16_material from '../img/materials/vh16_material.jpg';
import p00_material from '../img/materials/p00_material.jpg';

import AD38 from '../data/projets/AD38/AD38';
import EB12 from '../data/projets/EB12/EB12';
import HD11 from '../data/projets/HD11/HD11';
import PM19 from '../data/projets/PM19/PM19';
import VB229 from '../data/projets/VB229/VB229';
import VH16 from '../data/projets/VH16/VH16';
import P00 from '../data/projets/P00/P00';



const data_projets = {
  ad38: {
    name: 'ad38',
    delivery: new Date(2016, 11, 1),
    winDate: new Date(2016, 1, 1),
    surface: '110',
    materialPicHeight: 26,
    img: ad38_material,
    component(language, name, index: 0) {return <AD38 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'réhabilitation d’un appartement'
      },
      madeBy: 'ADT',
      madeFor: 'private client',
      city: 'meudon',
      departmentName: 'hauts-de-france',
      departmentNumber: '92',
      country: 'france',
      function: 'appartment',
      phasesWorked: 'pro',
      status: 'delivered',
      material: 'stone'
    },
    fr: {
      title: {
        __html: 'réhabilitation d’un appartement'
      },
      madeBy: 'ADT',
      madeFor: 'client privé',
      city: 'meudon',
      departmentName: 'hauts-de-france',
      departmentNumber: '92',
      country: 'france',
      function: 'appartement',
      phasesWorked: 'pro',
      status: 'livré',
      material: 'pierre'
    }
  },
  eb12: {
    name: 'eb12',
    delivery: new Date(2018, 12, 1),
    winDate: new Date(2017, 12, 1),
    surface: 720,
    materialPicHeight: 22,
    img: eb12_material,
    component(language, name, index: 0) {return <EB12 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'extension et réhabilitation du siège de l’entreprise barillet'
      },
      madeBy: 'ADT',
      madeFor: 'barillet company',
      city: 'chateauneuf-sur-loire',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'head office',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: 'accoya'
    },
    fr: {
      title: {
        __html: 'extension et réhabilitation du siège de l’entreprise barillet'
      },
      madeBy: 'ADT',
      madeFor: 'entreprise barillet',
      city: 'chateauneuf-sur-loire',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'siège social',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: 'accoya'
    }
  },
  hd11: {
    name: 'hd11',
    delivery: new Date(2019, 9, 1),
    winDate: new Date(2017, 9, 1),
    surface: 1020,
    materialPicHeight: 33,
    img: hd11_material,
    component(language, name, index: 0) {return <HD11 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'rehabilitation of a 4*&nbsphotel'
      },
      madeBy: 'ADT',
      madeFor: 'sadim company',
      city: 'locmariaquer',
      departmentName: 'morbihan',
      departmentNumber: '56',
      country: 'france',
      function: 'hotel',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: 'granite'
    },
    fr: {
      title: {
        __html: `réhabilitation et extension d’un hôtel&nbsp;4*`
      },
      madeBy: 'ADT',
      madeFor: 'société sadim',
      city: 'locmariaquer',
      departmentName: 'morbihan',
      departmentNumber: '56',
      country: 'france',
      function: 'hôtel',
      phasesWorked: 'PRO',
      status: 'PRO',
      material: 'granit'
    }
  },
  pm19: {
    name: 'pm19',
    delivery: new Date(2018, 6, 1),
    winDate: new Date(2017, 5, 1),
    surface: 170,
    materialPicHeight: 7,
    img: pm19_material,
    component(language, name, index: 0) {return <PM19 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'conception of a pool and a pool house'
      },
      madeBy: 'ADT',
      madeFor: 'private client',
      city: 'brézé',
      departmentName: 'maine-et-loire',
      departmentNumber: '49',
      country: 'france',
      function: 'piscine & pool house',
      phasesWorked: 'PRO',
      status: 'EXE',
      material: 'tufeau'
    },
    fr: {
      title: {
        __html: 'conception d’une piscine et d’une pool-house'
      },
      madeBy: 'ADT',
      madeFor: 'client privé',
      city: 'brézé',
      departmentName: 'maine-et-loire',
      departmentNumber: '49',
      country: 'france',
      function: 'piscine & pool house',
      phasesWorked: 'PRO',
      status: 'EXE',
      material: 'tufeau'
    }
  },
  vb229: {
    name: 'vb229',
    delivery: new Date(2019, 7, 1),
    winDate: new Date(2016, 11, 1),
    surface: 110,
    materialPicHeight: 9,
    img: vb229_material,
    component(language, name, index: 0) { return <VB229 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'extension et rehabilitation de grange'
      },
      madeBy: 'ADT',
      madeFor: 'private client',
      city: 'sologne',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'private house',
      phasesWorked: 'APD',
      status: 'PC',
      material: 'brick'
    },
    fr: {
      title: {
        __html: 'extension et rehabilitation de grange'
      },
      madeBy: 'ADT',
      madeFor: 'client privé',
      city: 'sologne',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'maison privée',
      phasesWorked: 'APD',
      status: 'PC',
      material: 'brique artisanale'
    }
  },
  vh16: {
    name: 'vh16',
    delivery: new Date(2018, 4, 1),
    winDate: new Date(2016, 4, 1),
    surface: 320,
    materialPicHeight: 10,
    img: vh16_material,
    component(language, name, index: 0) {return <VH16 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'building of private house'
      },
      madeBy: 'ADT',
      madeFor: 'private client',
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'private house',
      phasesWorked: 'DET',
      status: 'EXE',
      material: 'balayed enduit'
    },
    fr: {
      title: {
        __html: 'construction d’une maison privée'
      },
      madeBy: 'ADT',
      madeFor: 'client privé',
      city: 'orléans',
      departmentName: 'loiret',
      departmentNumber: '45',
      country: 'france',
      function: 'maison privée',
      phasesWorked: 'DET',
      status: 'EXE',
      material: 'enduit balayé'
    }
  },
  P00: {
    name: '00',
    delivery: null,
    winDate: new Date(2014, 4, 1),
    surface: 10000,
    materialPicHeight: 8,
    img: p00_material,
    component(language, name, index: 0) {return <P00 language={language} name={name} key={index}/> },
    en: {
      title: {
        __html: 'creation of a tide and horizon sanctuary'
      },
      madeBy: 'ADT',
      madeFor: 'diploma',
      city: 'pleubian',
      departmentName: 'côtes d\'armor',
      departmentNumber: '22',
      country: 'france',
      function: 'cultural',
      phasesWorked: '-',
      status: null,
      material: 'gross concrete'
    },
    fr: {
      title: {
        __html: 'création d\'un sanctuaire des marées et de l\'horizon'
      },
      madeBy: 'ADT',
      madeFor: 'diplôme',
      city: 'pleubian',
      departmentName: 'côtes d\'armor',
      departmentNumber: '22',
      country: 'france',
      function: 'culturel',
      phasesWorked: '-',
      status: null,
      material: 'béton brut'
    }
  },
}

export default data_projets;

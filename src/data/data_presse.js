import React from 'react';
import Presse20160401 from './presse/20160401/Presse20160401';
import Presse20160301 from './presse/20160301/Presse20160301';



const data_presse = {
  news20160301: {
    component(language, index) { return <Presse20160301 language={language} key={index}/> },
    date: 20160301
  },
  news20160401: {
    component(language, index) { return <Presse20160401 language={language} key={index}/> },
    date: 20160401
  },
}

export default data_presse;

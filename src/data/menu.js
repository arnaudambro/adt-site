import Projets from '../components/Projets';
import Database from '../components/Database';
import News from '../components/News';
import Agence from '../components/Agence';
import Presse from '../components/Presse';

const menu = {
  projets: {
    en: 'projects',
    fr: 'projets',
    active: false,
    component: Projets
  },
  ts_projets: {
    en: 'databse',
    fr: 'base de données',
    active: false,
    component: Database
  },
  news: {
    en: 'news',
    fr: 'news',
    active: false,
    component: News
  },
  agence: {
    en: 'agency',
    fr: 'agence',
    active: false,
    component: Agence
  },
  presse: {
    en: 'press',
    fr: 'presse',
    active: false,
    component: Presse
  }
}


export default menu;

import React from 'react';
import News20180112 from './news/20180112/News20180112';
import News20180115 from './news/20180115/News20180115';
import News20180105 from './news/20180105/News20180105';
import News20180101 from './news/20180101/News20180101';
import News20171224 from './news/20171224/News20171224';
import News20171218 from './news/20171218/News20171218';


const data_news = {
  news20171218: {
    component(language, index) { return <News20171218 language={language} key={index}/> },
    date: 20171218
  },
  news20180112: {
    component(language, index) { return <News20180112 language={language} key={index}/> },
    date: 20180112
  },
  news20180115: {
    component(language, index) { return <News20180115 language={language} key={index}/> },
    date: 20180115
  },
  news20180105: {
    component(language, index) { return <News20180105 language={language} key={index}/> },
    date: 20180105
  },
  news20180101: {
    component(language, index) { return <News20180101 language={language} key={index}/> },
    date: 20180101
  },
  news20171224: {
    component(language, index) { return <News20171224 language={language} key={index}/> },
    date: 20171224
  },
}

export default data_news;

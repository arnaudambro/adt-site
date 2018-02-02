import React from 'react';
import News20180112 from './news/20180112/News20180112';
import News20180115 from './news/20180115/News20180115';
import News20180105 from './news/20180105/News20180105';
import News20180101 from './news/20180101/News20180101';
import News20171224 from './news/20171224/News20171224';
import News20171218 from './news/20171218/News20171218';
import News20180102 from './news/20180102/News20180102';
import News20171101 from './news/20171101/News20171101';
import News20170827 from './news/20170827/News20170827';
import News20170715 from './news/20170715/News20170715';
import News20170413 from './news/20170413/News20170413';
import News20170410 from './news/20170410/News20170410';
import News20170126 from './news/20170126/News20170126';
import News20170111 from './news/20170111/News20170111';
import News20161215 from './news/20161215/News20161215';
import News20161214 from './news/20161214/News20161214';
import News20160517 from './news/20160517/News20160517';
import News20160111 from './news/20160111/News20160111';
import News20160106 from './news/20160106/News20160106';
import News20150909 from './news/20150909/News20150909';
import News20150415 from './news/20150415/News20150415';


const data_news = {
  news20150415: {
    component(language, index) { return <News20150415 language={language} key={index}/> },
    date: 20150415
  },
  news20150909: {
    component(language, index) { return <News20150909 language={language} key={index}/> },
    date: 20150909
  },
  news20160106: {
    component(language, index) { return <News20160106 language={language} key={index}/> },
    date: 20160106
  },
  news20160111: {
    component(language, index) { return <News20160111 language={language} key={index}/> },
    date: 20160111
  },
  news20160517: {
    component(language, index) { return <News20160517 language={language} key={index}/> },
    date: 20160517
  },
  news20161214: {
    component(language, index) { return <News20161214 language={language} key={index}/> },
    date: 20161214
  },
  news20161215: {
    component(language, index) { return <News20161215 language={language} key={index}/> },
    date: 20161215
  },
  news20170111: {
    component(language, index) { return <News20170111 language={language} key={index}/> },
    date: 20170111
  },
  news20170126: {
    component(language, index) { return <News20170126 language={language} key={index}/> },
    date: 20170126
  },
  news20170410: {
    component(language, index) { return <News20170410 language={language} key={index}/> },
    date: 20170410
  },
  news20170413: {
    component(language, index) { return <News20170413 language={language} key={index}/> },
    date: 20170413
  },
  news20170715: {
    component(language, index) { return <News20170715 language={language} key={index}/> },
    date: 20170715
  },
  news20170827: {
    component(language, index) { return <News20170827 language={language} key={index}/> },
    date: 20170827
  },
  news20171101: {
    component(language, index) { return <News20171101 language={language} key={index}/> },
    date: 20171101
  },
  news20180102: {
    component(language, index) { return <News20180102 language={language} key={index}/> },
    date: 20180102
  },
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

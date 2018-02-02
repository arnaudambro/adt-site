import React from 'react';
import './Presse20160401.css';
import le_courrier_de_l_architecte from './le_courrier_de_l_architecte.jpg';

export default class Presse20160401 extends React.Component {

  render() {

    const content = {
      title: {
        en: 'passenger horizon',
        fr: 'horizon passager'
      },
      date: {
        en() { 
          const date = new Date(2016, 3, 1)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long'/*, day: 'numeric'*/ })
        },
        fr() { 
          const date = new Date(2016, 3, 1)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long'/*, day: 'numeric'*/ })
        }
      },
      /*dateSubtitle: {
        en: {
          __html: `Winter walk<br />Valgrisenche, Italie`
        },
        fr: {
          __html: `Promenade hivernale<br />Valgrisenche, Italie`
        }
      },
      description: {
        en: 'Not the same vision of the human scale up there.',
        fr: 'Pas la même vision de l’échelle humaine de là haut.'
      }*/
    }

    return(
      <div className="presse__20160401--content  presse__content main__content">
      <div className="presse__20160401--title">{content.title[this.props.language]}</div>
        <div 
          className="presse__20160401--pic1"
          style={{ backgroundImage: `url(${le_courrier_de_l_architecte})`}}
          title="hiver 2018"> 
        </div>
        {/*<div className="presse__20160401--pic2">
          <img src={picture3} alt="plan architectural"/>
        </div>*/}
        <div className="presse__20160401--column3--container column3--container active">
          <div className="presse__20160401--column3">
            <div className="presse__20160401--date">{content.date[this.props.language]()}</div>
            {/*<div className="presse__20160401--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            <div className="presse__20160401--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

Presse20160401.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


import React from 'react';
import './News20170126.css';
import pic from './atelierdelalandetabourinnewsmatieretesteb12.png';

export default class News20170126 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2017, 0, 26)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2017, 0, 26)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Wood façade study Company B. Which one to choose ?`
        },
        fr: {
          __html: `Etude façade bois Entreprise B. Lequel choisir ?`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20170126--content news__content main__content">
        <div 
          className="news__20170126--pic1"
          style={{ backgroundImage: `url(${pic}) `}}
          title="chantier de la maison privée">
        </div>
        <div className="news__20170126--column3--container column3--container active">
          <div className="news__20170126--column3">
            <div className="news__20170126--date">{content.date[this.props.language]()}</div>
            <div className="news__20170126--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20170126--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20170126.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


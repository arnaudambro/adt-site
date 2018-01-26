import React from 'react';
import './News20171224.css';
import pic from './atelierdelalandetabourinnewsvh16chantier.jpg';

export default class News20171224 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2017, 11, 24)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2017, 11, 24)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Building site of private house VH16`
        },
        fr: {
          __html: `Chantier de la maison privée VH16`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20171224--content news__content main__content">
        <div className="news__20171224--pic1">
          <img src={pic} alt="chantier de la maison privée"/>
        </div>
        <div className="news__20171224--column3--container column3--container">
          <div className="news__20171224--column3">
            <div className="news__20171224--date">{content.date[this.props.language]()}</div>
            <div className="news__20171224--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20171224--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20171224.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


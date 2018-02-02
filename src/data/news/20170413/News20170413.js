import React from 'react';
import './News20170413.css';
import pic from './atelierdelalandetabourinnewschantierpierread38.jpg';

export default class News20170413 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2017, 3, 13)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2017, 3, 13)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Test on the material - Apartment D`
        },
        fr: {
          __html: `Test sur la matière – Appartement D`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20170413--content news__content main__content">
        <div 
          className="news__20170413--pic1"
          style={{ backgroundImage: `url(${pic}) `}}
          title="chantier de la maison privée">
        </div>
        <div className="news__20170413--column3--container column3--container active">
          <div className="news__20170413--column3">
            <div className="news__20170413--date">{content.date[this.props.language]()}</div>
            <div className="news__20170413--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20170413--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20170413.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


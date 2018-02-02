import React from 'react';
import './News20170111.css';
import pic from './atelierdelalandetabourinnewschantierad38.png';

export default class News20170111 extends React.Component {

  render() {

    const content = {
      date: {
        en() { 
          const date = new Date(2017, 0, 11)
          return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        },
        fr() { 
          const date = new Date(2017, 0, 11)
          return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        }
      },
      dateSubtitle: {
        en: {
          __html: `Start of the construction of apartment D.`
        },
        fr: {
          __html: `Démarrage du chantier de l’appartement D.`
        }
      },
      // description: {
      //   en: 'Not the same vision of the human scale up there.',
      //   fr: 'Pas la même vision de l’échelle humaine de là haut.'
      // }
    }

    return (
      <div className="news__20170111--content news__content main__content">
        <div 
          className="news__20170111--pic1"
          style={{ backgroundImage: `url(${pic}) `}}
          title="chantier de la maison privée">
        </div>
        <div className="news__20170111--column3--container column3--container active">
          <div className="news__20170111--column3">
            <div className="news__20170111--date">{content.date[this.props.language]()}</div>
            <div className="news__20170111--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            {/*<div className="news__20170111--date--description">{content.description[this.props.language]}</div>*/}
          </div>
        </div>
      </div>
      )
  }
}

News20170111.propTypes = {
  // language: React.PropTypes.string.isRequired,
}


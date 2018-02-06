import React from 'react';
// import './Presse20160301.css';
import le_courrier_de_l_architecte from './le_courrier_de_l_architecte_2.jpg';
import ADB from './ADB.png';
import AMC from './AMC.png';
import LA_PRESSE_D_ARMOR from './LA_PRESSE_D_ARMOR.png';
import TROPHEE_BETON from './TROPHEE_BETON.png';

export default class Presse20160301 extends React.Component {
  render() {
    // const content = {
    //   date: {
    //     en() {
    //       const date = new Date(2016, 2, 1)
    //       return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long'/*, day: 'numeric'*/ })
    //     },
    //     fr() {
    //       const date = new Date(2016, 2, 1)
    //       return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long'/*, day: 'numeric'*/ })
    //     }
    //   },
    //   /*dateSubtitle: {
    //     en: {
    //       __html: `Winter walk<br />Valgrisenche, Italie`
    //     },
    //     fr: {
    //       __html: `Promenade hivernale<br />Valgrisenche, Italie`
    //     }
    //   },
    //   description: {
    //     en: 'Not the same vision of the human scale up there.',
    //     fr: 'Pas la même vision de l’échelle humaine de là haut.'
    //   }*/
    // }

    return (
      <div className="presse__20160301--content presse__content main__content">
        <a
          className="presse__20160301--link1"
          href="http://www.lecourrierdelarchitecte.com/article_6913"
        >
          <div
            className="presse__20160301--pic1 presse__20160301--pic"
            style={{ backgroundImage: `url(${le_courrier_de_l_architecte})` }}
            title="ponton"
          />
          <div className="presse__overlay presse__20160301--pic" />
        </a>
        <a
          className="presse__20160301--link2"
          href="https://www.amc-archi.com/article/trophee-beton-2016-remise-des-prix,4161"
        >
          <div
            className="presse__20160301--pic2 presse__20160301--pic"
            style={{ backgroundImage: `url(${AMC})` }}
            title="logo AMC"
          />
        </a>
        <a
          className="presse__20160301--link3"
          href="https://www.trophee-beton.com/#eco/3"
        >
          <div
            className="presse__20160301--pic3 presse__20160301--pic"
            style={{ backgroundImage: `url(${TROPHEE_BETON})` }}
            title="logo trophée béton"
          />
        </a>
        <a
          className="presse__20160301--link4"
          href="http://www.academiedesbeauxarts.fr/prix/description.php?id=2"
        >
          <div
            className="presse__20160301--pic4 presse__20160301--pic"
            style={{ backgroundImage: `url(${ADB})` }}
            title="logo ADB"
          />
        </a>
        <a
          className="presse__20160301--link5"
          href="https://actu.fr/bretagne/pleubian_22195/architecture-leur-projet-de-beton-se-veut-lhorloge-de-la-maree_7717614.html"
        >
          <div
            className="presse__20160301--pic5 presse__20160301--pic"
            style={{ backgroundImage: `url(${LA_PRESSE_D_ARMOR})` }}
            title="logo la presse d'armor"
          />
        </a>
        {/*<div className="presse__20160301--column3--container column3--container">
          <div className="presse__20160301--column3">
            <div className="presse__20160301--date">{content.date[this.props.language]()}</div>
            <div className="presse__20160301--date--datesubtitle" dangerouslySetInnerHTML={content.dateSubtitle[this.props.language]}></div>
            <div className="presse__20160301--date--description">{content.description[this.props.language]}</div>
          </div>
        </div>*/}
      </div>
    );
  }
}

Presse20160301.propTypes = {
  // language: React.PropTypes.string.isRequired,
};

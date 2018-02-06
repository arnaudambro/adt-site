import React from 'react';
// import data_projets from '../../data_projets';

// import './template.css';

// import picture from './img/picture.jpg';

export default class template extends React.Component {
  render() {
    // const lang = this.props.language;
    // const pageName = this.props.name;

    /*    const content = {
      title: `${data_projets[`${pageName}`].name}.`,
      surface: {
        en: {
          __html: `Floor area: ${data_projets[`${pageName}`].surface} m<sup>2<sup>`,
        },
        fr: {
          __html: `Surface: ${data_projets[`${pageName}`].surface} m<sup>2<sup>`,
        }
      },
      cost: {
        en: {
          __html: 'Cost: NC',
        },
        fr: {
          __html: 'Coût: NC',
        }
      }
    }*/

    return (
      <div className="projet projet__template main__content projet__content">
        {/*<div className="projet__title">{content.title}</div>*/}
        {/*<div className="projet__subtitle projet__subtitle--surface" dangerouslySetInnerHTML={content.surface[lang]}></div>
        <div className="projet__subtitle projet__subtitle--cost" dangerouslySetInnerHTML={content.cost[lang]}></div>*/}
        {/*<div className="projet__image--fullWidth">
          <img src={plan} alt='plan' />
        </div>*/}
        <div className="projet__divider projet__divider--thick" />
        <p />
        <p />
        <p />
        <p />
        <div className="projet__divider projet__divider--thin" />
        {/*<div className="projet__image--fullWidth">
          <img src={plan} alt='plan' />
        </div>*/}
      </div>
    );
  }
}

template.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

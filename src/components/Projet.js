import React from 'react';
import { Link } from 'react-router-dom';
import data_projets from '../data/data_projets';
import menu from '../data/menu';
import { Helmet } from 'react-helmet';

import arrowLeft from '../img/icons/arrow-left.svg';
import arrowRight from '../img/icons/arrow-right.svg';
// import arrowDivider from '../img/icons/arrow-divider.svg'

export default class Projets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderingArray: Object.keys(data_projets),
      currentPosition: null,
      nextProject: null,
      prevProject: null
    };

    this.handleScrollingClick = this.handleScrollingClick.bind(this);
  }

  componentWillMount() {
    this.props.area && this.props.area.scrollTo(0, 0);
    this.props.willmount(true, true);
    menu.projets.active = true;
  }

  componentWillReceiveProps(nextProps) {
    const nextOrderingArray = nextProps.orderingArray;
    const name = nextProps.match.match.params.id;
    const nextPosition = nextOrderingArray.indexOf(name);
    const nextProject =
      nextPosition === nextOrderingArray.length - 1 ? 0 : nextPosition + 1;
    const prevProject =
      nextPosition === 0 ? nextOrderingArray.length - 1 : nextPosition - 1;

    this.setState({ orderingArray: [...nextOrderingArray] });
    this.setState({ currentPosition: nextPosition });
    this.setState({ nextProject: nextProject });
    this.setState({ prevProject: prevProject });
  }

  componentWillUnmount() {
    this.props.willmount(false);
  }

  handleScrollingClick() {
    this.props.onarrowclick(this.contentArea);
  }

  render() {
    const lang = this.props.language;
    const projet = this.props.match.match.params.id;
    const content = {
      title: `${data_projets[projet].name}.`,
      surface: {
        en: {
          __html: `Floor area: ${data_projets[projet].surface} m<sup>2<sup>`
        },
        fr: {
          __html: `Surface: ${data_projets[projet].surface} m<sup>2<sup>`
        }
      },
      cost: {
        en: {
          __html: `Cost: ${data_projets[projet].cost}`
        },
        fr: {
          __html: `Coût: ${data_projets[projet].cost}`
        }
      },
      material: {
        en: 'Material',
        fr: 'Matière'
      },
      delivery: {
        en(projet) {
          if (data_projets[projet].delivery) {
            if (Date.now() < data_projets[projet].delivery) {
              return `Delivery ${data_projets[
                projet
              ].delivery.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}`;
            } else {
              return `Delivered ${data_projets[
                projet
              ].delivery.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
              })}`;
            }
          } else {
            return '';
          }
        },
        fr(projet) {
          if (data_projets[projet].delivery) {
            if (Date.now() < data_projets[projet].delivery) {
              return `Livraison ${data_projets[
                projet
              ].delivery.toLocaleDateString('fr-FR', {
                month: 'long',
                year: 'numeric'
              })}`;
            } else {
              return `Livré ${data_projets[projet].delivery.toLocaleDateString(
                'fr-FR',
                { month: 'long', year: 'numeric' }
              )}`;
            }
          } else {
            return '';
          }
        }
      }
    };

    return (
      <div
        className="projet main__container"
        ref={contentArea => {
          this.contentArea = contentArea;
        }}
      >
        <Helmet>
          <title>ADT | {data_projets[projet].name.toUpperCase()}</title>
        </Helmet>
        <div className={`projet__header projet-${projet}`}>
          <div className="projet__header--title">
            <div className="projet__title">{content.title}</div>
            <div className="projet__arrows">
              <Link
                to={`/projet/${
                  this.state.orderingArray[this.state.prevProject]
                }`}
                className="projet__arrows--left"
                style={{ backgroundImage: `url(${arrowLeft})` }}
              />
              <div className="projet__arrows--divider" />
              <Link
                to={`/projet/${
                  this.state.orderingArray[this.state.nextProject]
                }`}
                className="projet__arrows--right"
                style={{ backgroundImage: `url(${arrowRight})` }}
              />
            </div>
          </div>
          <div
            className="projet__subtitle projet__subtitle--headline"
            dangerouslySetInnerHTML={data_projets[projet][lang].title}
          />
          <div className="projet__subtitle projet__subtitle--location">
            {data_projets[projet][lang].city},{' '}
            {data_projets[projet][lang].departmentName},{' '}
            {data_projets[projet][lang].country}
          </div>
          <div
            className="projet__subtitle projet__subtitle--surface"
            dangerouslySetInnerHTML={content.surface[lang]}
          />
          <div className="projet__subtitle projet__subtitle--material">
            {content.material[`${lang}`]}:{' '}
            <span
              dangerouslySetInnerHTML={data_projets[projet][lang].material}
            />
          </div>
          <div
            className="projet__subtitle projet__subtitle--cost"
            dangerouslySetInnerHTML={content.cost[lang]}
          />
          <div className="projet__subtitle projet__subtitle--delivery">
            {content.delivery[`${lang}`](projet)}
          </div>
        </div>
        {data_projets[projet].component(lang, projet)}
        <div
          className="main__container--marginbottom database"
          onClick={this.handleScrollingClick}
        />
      </div>
    );
  }
}

Projets.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
};

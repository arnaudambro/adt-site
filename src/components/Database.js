import React from 'react';
import { Link } from 'react-router-dom';
import data_projets from '../data/data_projets';

export default class Database extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'name',
      ascendant: true,
      currentArrow: 'arrow1'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ sortBy: e.target.dataset.sortby});
    this.setState({ ascendant: e.target.classList.contains('arrow__down')});
    this.setState({ currentArrow: e.target.id})
  }

  componentDidMount() {
    this.props.area && this.props.area.scrollTo(0,0);
  }

  render() {

    const lang = this.props.language;

    const content = {
      headerName: {
        en: 'name',
        fr: 'nom' ,
        sortBy: 'name',
      },
      headerMadeBy: {
        en: 'made by',
        fr: 'fait par' ,
        sortBy: 'madeBy',
      },
      headerMadeFor: {
        en: 'made for',
        fr: 'fait pour' ,
        sortBy: 'madeFor',
      },
      headerLocation: {
        en: 'location',
        fr: 'localisation' ,
        sortBy: 'city',
      },
      headerFunction: {
        en: 'function',
        fr: 'fonction' ,
        sortBy: 'function',
      },
      headerFloorArea: {
        en: 'floor area',
        fr: 'surface plancher' ,
        sortBy: 'surface',
      },
      headerPhase: {
        en: 'phase',
        fr: 'phase' ,
        sortBy: 'phase',
      },
      headerMaterial: {
        en: 'material',
        fr: 'matière' ,
        sortBy: 'material',
      },
      arrow: {
        up_inactive: {
          __html: '⮁',
        },
        down_inactive: {
          __html: '⮃',
        },
        up_active: {
          __html: '⮀',
        },
        down_active: {
          __html: '⮂',
        },
      }
    }

    return (
      <div className="ts_projets table">
        <div className="tr thead">
          <div className="tr__contour tr__contour--head noborder">
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerName.sortBy} 
                  className="arrow__down arrow"
                  id="arrow1" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow1' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow1 => this.arrow1 = arrow1}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerName.sortBy} 
                  className="arrow__up arrow"
                  id="arrow2"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow2' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow2 => this.arrow2 = arrow2}>
                </span>
                <span className="column__header">{content.headerName[`${lang}`]}</span>
              </div>
            </div>
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerMadeBy.sortBy} 
                  className="arrow__down arrow"
                  id="arrow3" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow3' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow3 => this.arrow3 = arrow3}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerMadeBy.sortBy} 
                  className="arrow__up arrow"
                  id="arrow4"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow4' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow4 => this.arrow4 = arrow4}>
                </span>
                <span className="column__header">{content.headerMadeBy[`${lang}`]}</span>
              </div>
            </div>
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerMadeFor.sortBy} 
                  className="arrow__down arrow"
                  id="arrow5" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow5' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow5 => this.arrow5 = arrow5}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerMadeFor.sortBy} 
                  className="arrow__up arrow"
                  id="arrow6"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow6' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow6 => this.arrow6 = arrow6}>
                </span>
                <span className="column__header">{content.headerMadeFor[`${lang}`]}</span>
              </div>
            </div>
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerLocation.sortBy} 
                  className="arrow__down arrow"
                  id="arrow7" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow7' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow7 => this.arrow7 = arrow7}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerLocation.sortBy} 
                  className="arrow__up arrow"
                  id="arrow8"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow8' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow8 => this.arrow8 = arrow8}>
                </span>
                <span className="column__header">{content.headerLocation[`${lang}`]}</span>
              </div>
            </div>
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerFunction.sortBy} 
                  className="arrow__down arrow"
                  id="arrow9" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow9' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow9 => this.arrow9 = arrow9}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerFunction.sortBy} 
                  className="arrow__up arrow"
                  id="arrow10"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow10' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow10 => this.arrow10 = arrow10}>
                </span>
                <span className="column__header">{content.headerFunction[`${lang}`]}</span>
              </div>
            </div>
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerFloorArea.sortBy} 
                  className="arrow__down arrow"
                  id="arrow11" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow11' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow11 => this.arrow11 = arrow11}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerFloorArea.sortBy} 
                  className="arrow__up arrow"
                  id="arrow12"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow12' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow12 => this.arrow12 = arrow12}>
                </span>
                <span className="column__header">{content.headerFloorArea[`${lang}`]}</span>
              </div>
            </div>
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerPhase.sortBy} 
                  className="arrow__down arrow"
                  id="arrow13" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow13' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow13 => this.arrow13 = arrow13}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerPhase.sortBy} 
                  className="arrow__up arrow"
                  id="arrow14"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow14' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow14 => this.arrow14 = arrow14}>
                </span>
                <span className="column__header">{content.headerPhase[`${lang}`]}</span>
              </div>
            </div>
            <div className="th th__container">
              <div className="th__container--container">
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerMaterial.sortBy} 
                  className="arrow__down arrow"
                  id="arrow15" 
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow15' ? content.arrow.down_active : content.arrow.down_inactive}
                  ref={arrow15 => this.arrow15 = arrow15}>
                </span>
                <span 
                  onClick={this.handleClick} 
                  data-sortby={content.headerMaterial.sortBy} 
                  className="arrow__up arrow"
                  id="arrow16"
                  dangerouslySetInnerHTML={this.state.currentArrow === 'arrow16' ? content.arrow.up_active : content.arrow.up_inactive}
                  ref={arrow16 => this.arrow16 = arrow16}>
                </span>
                <span className="column__header">{content.headerMaterial[`${lang}`]}</span>
              </div>
            </div>
          </div>
        </div>
            {Object
              .keys(data_projets)
              .sort((a, b) => {
                if (data_projets[a][`${this.state.sortBy}`]) {
                  if (data_projets[a][`${this.state.sortBy}`] > data_projets[b][`${this.state.sortBy}`]) {
                    return this.state.ascendant;
                  } else {
                    return !this.state.ascendant;
                  } 
                } else {
                  if (data_projets[a][`${lang}`][`${this.state.sortBy}`] > data_projets[b][`${lang}`][`${this.state.sortBy}`]) {
                    return this.state.ascendant;
                  } else {
                    return !this.state.ascendant;
                  } 
                }
              })
              .map((key, index) => 
                <div className={`tr tr${index} tr__clickable`} key={index}>
                  <Link to={data_projets[key].name} className="tr__contour">
                      <div className="td td__name">{data_projets[key].name}</div>
                      <div className="td">{data_projets[key][lang].madeBy}</div>
                      <div className="td">{data_projets[key][lang].madeFor}</div>
                      <div className="td">{data_projets[key][lang].city}<br/>{data_projets[key][lang].departmentNumber}<br/>{data_projets[key][lang].country}</div>
                      <div className="td">{data_projets[key][lang].function}</div>
                      <div className="td td__surface">{data_projets[key].surface}m<sup>2</sup></div>
                      <div className="td">{data_projets[key][lang].phasesWorked}</div>
                      <div className="td">{data_projets[key][lang].material}</div>
                  </Link>
                </div>
              )}
        <div className="tr tr__empty">
          <div className="tr__contour">
            <div className="td"></div>
            <div className="td"></div>
            <div className="td"></div>
            <div className="td"></div>
            <div className="td"></div>
            <div className="td"></div>
            <div className="td"></div>
            <div className="td"></div>
          </div>
        </div>
      </div>

      )
  }
}

Database.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

import React from 'react';
import { Link } from 'react-router-dom';
import data_projets from '../data/data_projets';
import {Helmet} from "react-helmet";
import arrow_down_filled from '../img/icons/arrow_down_filled.svg';
import arrow_up_filled from '../img/icons/arrow_up_filled.svg';
import arrow_down_stroked from '../img/icons/arrow_down_stroked.svg';
import arrow_up_stroked from '../img/icons/arrow_up_stroked.svg';
import _ from 'lodash';

export default class Database extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'winDate',
      ascendant: false,
      currentArrow: 'arrow3',
 
    }

    this.handleSortingClick = this.handleSortingClick.bind(this);
    this.handleScrollingClick = this.handleScrollingClick.bind(this);
  }

  componentDidMount() {
    this.props.willmount(true);
  }

  componentWillUnmount() {
    this.props.willmount(false);
  }

  handleScrollingClick() {
    this.props.onarrowclick(this.contentArea);
  }

  handleSortingClick(e) {
    this.setState({ sortBy: e.target.dataset.sortby});
    this.setState({ ascendant: e.target.classList.contains('arrow__down')});
    this.setState({ currentArrow: e.target.id})
  }

  render() {

    const lang = this.props.language;
    const minHeight = 50;
    const maxHeight = 150;
    const biggestProjectHeight = _.max(Object.keys(data_projets).map(key => data_projets[key].materialPicHeight));
    const heightFactor = (maxHeight - minHeight) / biggestProjectHeight 

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
      headerWinYear: {
        en: 'year',
        fr: 'année' ,
        sortBy: 'winDate',
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
      headerStatus: {
        en: 'status',
        fr: 'état' ,
        sortBy: 'delivery',
      },
      arrow: {
        up_inactive: arrow_up_stroked,
        down_inactive: arrow_down_stroked,
        up_active: arrow_up_filled,
        down_active: arrow_down_filled,
      },
      delivered: {
        en: 'delivered',
        fr: 'livré'
      },
      delivery: {
        en: 'delivery in',
        fr: 'livraison en'
      },

    }

    return (
      <div className="main__container ts_projets table" ref={(contentArea) => { this.contentArea = contentArea }}>
        <Helmet>
          <title>ATD | Base de données</title>
        </Helmet>
        <div className="main__content database">
          <div className="tr thead">
            <div className="tr__contour tr__contour--head noborder">
              <div className={`th th__container name`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow1" 
                        src={this.state.currentArrow === 'arrow1' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow1 => this.arrow1 = arrow1}
                        data-sortby={content.headerName.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow2"
                        src={this.state.currentArrow === 'arrow2' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow2 => this.arrow2 = arrow2}
                        data-sortby={content.headerName.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerName[`${lang}`]}</div>
                  </div>
                </div>
              </div>
              <div className={`th th__container winyear`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow3" 
                        src={this.state.currentArrow === 'arrow3' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow3 => this.arrow3 = arrow3}
                        data-sortby={content.headerWinYear.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow4"
                        src={this.state.currentArrow === 'arrow4' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow4 => this.arrow4 = arrow4}
                        data-sortby={content.headerWinYear.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerWinYear[`${lang}`]}</div>
                  </div>
                </div>
              </div>
              <div className={`th th__container madefor`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow5" 
                        src={this.state.currentArrow === 'arrow5' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow5 => this.arrow5 = arrow5}
                        data-sortby={content.headerMadeFor.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow6"
                        src={this.state.currentArrow === 'arrow6' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow6 => this.arrow6 = arrow6}
                        data-sortby={content.headerMadeFor.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerMadeFor[`${lang}`]}</div>
                  </div>
                </div>
              </div>
              <div className={`th th__container location`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow7" 
                        src={this.state.currentArrow === 'arrow7' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow7 => this.arrow7 = arrow7}
                        data-sortby={content.headerLocation.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow8"
                        src={this.state.currentArrow === 'arrow8' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow8 => this.arrow8 = arrow8}
                        data-sortby={content.headerLocation.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerLocation[`${lang}`]}</div>
                  </div>
                </div>
              </div>
              <div className={`th th__container function`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow9" 
                        src={this.state.currentArrow === 'arrow9' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow9 => this.arrow9 = arrow9}
                        data-sortby={content.headerFunction.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow10"
                        src={this.state.currentArrow === 'arrow10' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow10 => this.arrow10 = arrow10}
                        data-sortby={content.headerFunction.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerFunction[`${lang}`]}</div>
                  </div>
                </div>
              </div>
              <div className={`th th__container floorarea`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow11" 
                        src={this.state.currentArrow === 'arrow11' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow11 => this.arrow11 = arrow11}
                        data-sortby={content.headerFloorArea.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow12"
                        src={this.state.currentArrow === 'arrow12' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow12 => this.arrow12 = arrow12}
                        data-sortby={content.headerFloorArea.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerFloorArea[`${lang}`]}</div>
                  </div>
                </div>
              </div>
              <div className={`th th__container status`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow13" 
                        src={this.state.currentArrow === 'arrow13' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow13 => this.arrow13 = arrow13}
                        data-sortby={content.headerStatus.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow14"
                        src={this.state.currentArrow === 'arrow14' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow14 => this.arrow14 = arrow14}
                        data-sortby={content.headerStatus.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerStatus[`${lang}`]}</div>
                  </div>
                </div>
              </div>
              <div className={`th th__container material`}>
                <div className="th__container--content ">
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__down arrow"
                        id="arrow15" 
                        src={this.state.currentArrow === 'arrow15' ? content.arrow.down_active : content.arrow.down_inactive} 
                        alt=""
                        ref={arrow15 => this.arrow15 = arrow15}
                        data-sortby={content.headerMaterial.sortBy} 
                        />
                  <img 
                        onClick={this.handleSortingClick} 
                        className="arrow__up arrow"
                        id="arrow16"
                        src={this.state.currentArrow === 'arrow16' ? content.arrow.up_active : content.arrow.up_inactive} 
                        alt=""
                        ref={arrow16 => this.arrow16 = arrow16}
                        data-sortby={content.headerMaterial.sortBy} 
                        />
                  <div>
                    <div className="column__header">{content.headerMaterial[`${lang}`]}</div>
                  </div>
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
                  <div className={`tr tr${index} tr__clickable`} key={index} style={{ height: `${minHeight + data_projets[key].materialPicHeight * heightFactor}px`}}>
                    <Link to={`/projet/${key}`} className="tr__contour">
                        <div className="td name td__name">{data_projets[key].name}</div>
                        <div className="td winyear">{data_projets[key].winDate.getFullYear()}</div>
                        <div className="td madefor" dangerouslySetInnerHTML={data_projets[key][lang].madeFor}></div>
                        <div className="td location">{data_projets[key][lang].city}<br/>{data_projets[key][lang].departmentNumber}<br/>{data_projets[key][lang].country}</div>
                        <div className="td function">{data_projets[key][lang].function}</div>
                        <div className="td floorarea td__surface">{data_projets[key].surface}m<sup>2</sup></div>
                        <div className="td status">{data_projets[key][lang].status === null 
                                              ? ''
                                              : data_projets[key][lang].status === content.delivered[lang] 
                                                ? `${content.delivered[lang]}`
                                                : data_projets[key].delivery !== null 
                                                  ? `${data_projets[key][lang].status} - ${content.delivery[lang]} ${data_projets[key].delivery.getFullYear()}`
                                                  : `${data_projets[key][lang].status}`}
                        </div>
                        <div className="td material" dangerouslySetInnerHTML={data_projets[key][lang].material}></div>
                    </Link>
                  </div>
                )}
          <div className="tr tr__empty">
            <div className="tr__contour">
              <div className="td name"></div>
              <div className="td winyear"></div>
              <div className="td madefor"></div>
              <div className="td location"></div>
              <div className="td function"></div>
              <div className="td floorarea"></div>
              <div className="td phase"></div>
              <div className="td material"></div>
            </div>
          </div>
        </div>
        <div className="main__container--marginbottom database" onClick={this.handleScrollingClick}></div>
      </div>

      )
  }
}

Database.propTypes = {
  //*propName*: React.PropTypes.*proptype*.*isRequired*,
}

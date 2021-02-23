import React from "react";
import ReactTooltip from "react-tooltip";
import css from "./roi.module.css";
import { ReactComponent as InfoIcon } from "../../assets/images/info.svg";
const YearlyEarning = ({
  title,
  bsuPrice,
  money,
  bsu,
  active,
  setActive,
  percentage,
  showHelpBtn,
}) => {
  const formatNumber = (number) => {
    // const addDecimal = number.toFixed(2);
    return number.toLocaleString();
  };

  return (
    <div
      className={`${css.periodGroup} ${active ? css.periodGroupActive : ""}`}
      onClick={setActive}>
      <p className={css.yearTitle}>{title}</p>

      <div className={css.periodGruopFields}>
        <div className={`${css.mediumInput} `}>
          <div className={css.flex}>
            <p className={css.title}> Yearly Income</p>
            {showHelpBtn && (
              <div className={css.tool}>
                <a
                  data-tip
                  data-for='money'
                  data-event='click focus'
                  className={css.toolTipIconLink}>
                  {/* <img src={infoIcon} /> */}
                  <InfoIcon />
                </a>
                <ReactTooltip
                  effect='solid'
                  place='right'
                  className={css.bsuTooltip}
                  id='money'
                  aria-haspopup='true'
                  globalEventOff='click'>
                  <p>Yearly Income of BSU + BSU price growth</p>
                </ReactTooltip>
              </div>
            )}
          </div>
          <div className={`${css.yearlyInput} ${active ? css.investColor : css.neutralColor}`}>
            <span>$ </span>
            {/* <span> {Math.floor(parseFloat(money))}</span> */}
            {/* <span> {money.toLocaleString()}</span> */}
            <span> {formatNumber(money)}</span>
            {/* <span> {parseFloat(money).toFixed(2)}</span> */}
          </div>
        </div>
        <div className={css.smallInput}>
          <div className={css.bsuTitle}>
            <div className={css.flex}>
              <p className={css.title}> Holding Value</p>
              {showHelpBtn && (
                <div className={css.tool}>
                  <a data-tip data-for='bsu' data-event='click focus'>
                    {/* <img src={infoIcon} /> */}
                    <InfoIcon />
                  </a>
                  <ReactTooltip
                    effect='solid'
                    place='right'
                    className={css.bsuTooltip}
                    id='bsu'
                    aria-haspopup='true'
                    globalEventOff='click'>
                    Holding Value x BSU price
                  </ReactTooltip>
                </div>
              )}
            </div>
            <div className={css.bsuSmall}>
              <span>{bsuPrice} / BSU</span>
            </div>
          </div>
          <div className={`${css.yearlyInput} ${active ? css.earningColor : css.neutralColor}`}>
            <span>BSU </span>
            <span> {formatNumber(bsu)}</span>
            {/* <span> {parseFloat(bsu).toFixed(2)}</span> */}
            {/* <span> {Math.floor(parseFloat(bsu))}</span> */}
          </div>
          <span className={css.downInputDesc}>{percentage}% BSU reward</span>
        </div>
      </div>
    </div>
  );
};

export default YearlyEarning;

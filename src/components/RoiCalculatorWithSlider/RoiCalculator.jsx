import React, { useState } from "react";
import css from "./calculator.module.css";
import OpacityIcon from "./OpacityIcon";
import icon from "./ysignIcon.png";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ONE_YEAR_PERCTANGE = 0.5;
const TWO_YEAR_PERCTANGE = 0.5;
const THREE_YEAR_PERCTANGE = 0.5;

const RoiCalculator = () => {
  const [invest, setInvest] = useState(3000);
  const [roi, setRoi] = useState("0");
  const handleInvest = (e) => {
    setInvest(e.target.value);
  };
  return (
    <div className={css.calculator}>
      <div className={css.content} id='calculator'>
        <div className={css.left}>
          <div className={css.inputGroup}>
            <h4>Invest</h4>
            <input
              type='number'
              min={3000}
              placeholder='$3,000.00'
              value={invest}
              onChange={handleInvest}
            />
            <button>{invest ? (invest * 0.1).toFixed(2) : "300.00"} BSU</button>
          </div>
        </div>
        <div className={css.center}>
          <div className={css.centerHeader}>
            <h3>ROI Calculator</h3>
            <h3>Select Master Node</h3>
          </div>
          {/* <div className={css.centerSelect}> */}
          {/* <div> */}
          <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={100}
            currentSlide={2}
            totalSlides={6}
            visibleSlides={3}
            orientation='vertical'
            infinite={true}
            // lockOnWindowScroll={true}
            className={css.centerSelect}>
            <Slider>
              {/* <OpacityIcon iconOpacity={0.02} textOpacity={0.3} />
                  <OpacityIcon iconOpacity={0.1} textOpacity={0.5} />
                  <OpacityIcon iconOpacity={0.2} textOpacity={0.7} />
                  <div className={css.ysignIcon}>
                    <img src={icon} />
                    <p>ySign</p>
                  </div>
                  <OpacityIcon iconOpacity={0.2} textOpacity={0.7} /> */}
              <Slide className={css.slide} index={0}>
                <OpacityIcon iconOpacity={0.02} textOpacity={0.3} />
              </Slide>
              <Slide className={css.slide} index={1}>
                <OpacityIcon iconOpacity={0.1} textOpacity={0.5} />
              </Slide>
              <Slide className={css.slide} index={2}>
                <OpacityIcon iconOpacity={0.2} textOpacity={0.7} />
              </Slide>
              <Slide className={css.slide} index={3}>
                <div className={css.ysignIcon}>
                  <img src={icon} />
                  <p>ySign</p>
                </div>
              </Slide>
              <Slide className={css.slide} index={4}>
                <OpacityIcon iconOpacity={0.2} textOpacity={0.7} />
              </Slide>
              <Slide className={css.slide} index={5}>
                <OpacityIcon iconOpacity={0.1} textOpacity={0.5} />
              </Slide>
              <Slide className={css.slide} index={6}></Slide>
            </Slider>
          </CarouselProvider>

          {/* <OpacityIcon iconOpacity={0.1} /> */}

          {/* <OpacityIcon iconOpacity={0.3} /> */}
          {/* </div> */}
          {/* </div> */}
          <div className={css.centerFooter}>
            <button>get started</button>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.inputGroup}>
            <h4>Earn</h4>
            <div className={css.period}>
              <p className={css.activePeriod}>First year</p>
              <p>Second year</p>
              <p>Third year</p>
            </div>
            <div style={{ position: "relative", width: "80%" }}>
              <input type='number' placeholder='$3,990.60' />
              <p className={css.earnBSU}>27,52 (BSU)</p>
            </div>
          </div>
        </div>
      </div>
      <p className={css.footerText}>
        The following figures are an estimation based on masternode and market values. The ROI is
        subject to change.
      </p>
    </div>
  );
};

export default RoiCalculator;

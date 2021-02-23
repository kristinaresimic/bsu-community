import React, { useEffect, useState } from "react";
import DropdownComponent from "./Dropdown";
import InputGroup from "./InputGroup";
import css from "./roi.module.css";
import Thermostat from "./Thermostat";
import YearlyEarning from "./YearlyEarning";
import { data } from "./data";

const INITIAL_VAL = {
  ...data[0],
};

const RoiCalculator = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [roi, setRoi] = useState(INITIAL_VAL.roi);
  //price for BSU for every year
  const [price, setPrice] = useState(INITIAL_VAL.price);
  const [invest, setInvest] = useState(INITIAL_VAL.min_invest);
  const [ammountBSU, setAmmountBSU] = useState(INITIAL_VAL.min_invest / INITIAL_VAL.price.current);

  const [firstYear, setFirstYear] = useState({ money: 0, bsu: 0 });
  const [secondYear, setSecondYear] = useState({ money: 0, bsu: 0 });
  const [thirdYear, setThirdYear] = useState({ money: 0, bsu: 0 });

  const [dataTermostat, setDataTermostat] = useState({
    percentage: INITIAL_VAL.roi.first_year,
  });

  const [activeYear, setActiveYear] = useState(0);

  //update data for project change
  useEffect(() => {
    setRoi(data[selectedProject].roi);
    setPrice(data[selectedProject].price);
    setInvest(data[selectedProject].min_invest);
  }, [selectedProject]);

  useEffect(() => {
    calculateDataForThermos(activeYear);
  }, [activeYear, roi]);

  // useEffect(() => {
  //   // calculateDataForThermos(1);
  // }, [firstYear]);

  useEffect(() => {
    const calculateAmmount = invest / price.current;
    setAmmountBSU(calculateAmmount);
  }, [invest]);

  useEffect(() => {
    const calculateInvest = ammountBSU * price.current;
    setInvest(calculateInvest);
  }, [ammountBSU]);

  useEffect(() => {
    //first year calculations
    const firstYearMoney = invest + invest * roi.first_year - invest;
    const firstYearBSU = ammountBSU + ammountBSU * roi.first_year;
    setFirstYear({ money: firstYearMoney, bsu: firstYearBSU });

    //second year calculations
    const secondYearMoney = firstYearMoney + firstYearMoney * roi.second_year - invest;
    const secondYearBSU = firstYearBSU + firstYearBSU * roi.second_year;
    setSecondYear({ money: secondYearMoney, bsu: secondYearBSU });

    const thirdYearMoney = secondYearMoney + secondYearMoney * roi.third_year - invest;
    const thirdYearBSU = secondYearBSU + secondYearBSU * roi.third_year;
    setThirdYear({ money: thirdYearMoney, bsu: thirdYearBSU });
  }, [invest, ammountBSU]);

  const calculateDataForThermos = (year) => {
    console.log(year);
    console.log(roi);
    switch (year) {
      case 0:
        setDataTermostat({
          percentage: roi.first_year,
        });
        break;
      case 1:
        setDataTermostat({
          percentage: roi.second_year,
        });
        break;
      case 2:
        setDataTermostat({
          percentage: roi.third_year,
        });
        break;
      default:
        setDataTermostat({ percentage: roi.first_year });
    }
  };

  return (
    <div className={css.calculator}>
      <div className={css.content} id='calculator'>
        <div className={css.header}>Return of Investment (ROI) Calculator</div>
        <div className={css.form}>
          <DropdownComponent
            selected={selectedProject}
            setSelected={(idx) => {
              setSelectedProject(idx);
            }}
            description={data[selectedProject].project_description}
            link={data[selectedProject].project_link}
          />
          <div className={css.invest}>
            <InputGroup
              title='Invest'
              value={Math.ceil(invest).toString()}
              handleChange={(e) => setInvest(e.target.value)}
              inputColorClass='blueColor'
              prefix='$'
              size='largeInput'
              minValue={data[selectedProject].min_invest}
            />
            <InputGroup
              title='Total ammount of BSU'
              value={Math.ceil(ammountBSU).toString()}
              handleChange={(e) => setAmmountBSU(e.target.value)}
              inputColorClass='earningColor'
              prefix='BSU'
              size='largeInput'
              bsuPrice='0.1'
              minValue={data[selectedProject].min_invest / data[selectedProject].price.current}
            />
          </div>
          <p className={css.subHeader}>Earnings</p>
          <div className={css.earnings}>
            <div className={css.period}>
              <YearlyEarning
                title='1st year'
                bsuPrice={data[selectedProject].price.first_year}
                percentage={data[selectedProject].roi.first_year * 100}
                money={
                  firstYear.money + firstYear.bsu * data[selectedProject].price.first_year - invest
                }
                bsu={firstYear.bsu}
                active={activeYear === 0}
                setActive={() => setActiveYear(0)}
                showHelpBtn
              />
              <YearlyEarning
                title='2nd year'
                bsuPrice={data[selectedProject].price.second_year}
                percentage={data[selectedProject].roi.second_year * 100}
                money={
                  secondYear.money +
                  secondYear.bsu * data[selectedProject].price.second_year -
                  invest
                }
                bsu={secondYear.bsu}
                active={activeYear === 1}
                setActive={() => setActiveYear(1)}
              />
              <YearlyEarning
                title='3rd year'
                bsuPrice={data[selectedProject].price.third_year}
                percentage={data[selectedProject].roi.third_year * 100}
                money={
                  thirdYear.money + thirdYear.bsu * data[selectedProject].price.third_year - invest
                }
                bsu={thirdYear.bsu}
                active={activeYear === 2}
                setActive={() => setActiveYear(2)}
              />
            </div>
            <div className={css.termostat}>
              <Thermostat data={dataTermostat} />
            </div>
          </div>
          <div className={css.investBtn}>
            <button>Stake Now</button>
          </div>
        </div>
        <div className={css.footer}>
          The following figures are an estimation based on masternode and market values. The ROI is
          subject to change.
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator;

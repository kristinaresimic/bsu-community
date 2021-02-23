import React from "react";
import css from "./master-node.module.css";
import moneyIcon from "../../assets/images/Money Icon.svg";
import nodeIcon from "../../assets/images/Node Icon.svg";
import stakingIcon from "../../assets/images/Staking Icon.svg";
import arrow from "../../assets/images/Arrow.svg";
import { Link } from "react-router-dom";

const MasterNode = () => {
  return (
    <div className={css.masterNode} id='masternodes'>
      <div className={css.container}>
        <div>
          <div className={`${css.card} ${css.staking} ${css.stakingLeft}`}>
            <div className={css.icon}>
              <img src={moneyIcon} alt='Money Icon' />
            </div>
            <div className={css.text}>
              <h3>Masternode Staking</h3>
              <p>
                Staking is the process of taking part in the validation of transactions that Masternodes maintain on a blockchain, by holding the respective cryptocurrency in a secure wallet. Staking is a less resource intensive alternative to mining and hosting your own node.
              </p>
            </div>
          </div>
          {/* <a href='#how-it-works' className={css.cardLink}>
            <span>Find Out More</span>
            <img src={arrow} alt='Find out more about staking' />
          </a> */}
        </div>
        <div>
          <div className={`${css.card} ${css.nodes}`}>
            <div className={css.icon}>
              <img src={nodeIcon} alt='Node Icon' />
            </div>
            <div className={css.text}>
              <h3>Masternodes</h3>
              <p>
                Masternodes are superior servers on the blockchain that act to fortify the entire Inery blockchain network. Hosting a masternode rewards operators in the form of BSU and is the best way to earn passive income on the blockchain, as only a select amount of masternodes are allowed on the blockchain and early operators get to purchase BSU at the lowest price.
              </p>
              <br/>
              <p>
                For more information on the BSU node network, or if you are interested in running your own masternode – visit <a className="link" href="https://bsu.network/" target="_blank">BSU.Network</a>
              </p>
            </div>
          </div>
          {/* <Link to='/masternodelist' className={css.cardLink}>
            <span>View Masternode List</span>
            <img src={arrow} alt='Visit BSU Community Forum ' />
          </Link> */}
        </div>
        <div>
          <div className={`${css.card} ${css.staking} ${css.stakingRight}`}>
            <div className={css.icon}>
              <img src={stakingIcon} alt='Staking Icon' />
            </div>
            <div className={css.text}>
              <h3>Masternode Sharing</h3>
              <p>
                The shared masternode option is for those who wish to share the cost of hosting a
                masternode with other members of the community.
              </p>
            </div>
          </div>
          {/* <Link to='/forum' className={css.cardLink}>
            <span>Find Out More</span>
            <img src={arrow} alt='Visit BSU Community Forum ' />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default MasterNode;

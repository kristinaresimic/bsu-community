import React from "react";
import css from "./forum.module.css";
import image from "../../assets/images/Mac Mockup.jpg";
import { Link } from "react-router-dom";

const Forum = () => {
  return (
    <div className={css.forum}>
      <h1 className={css.title}>BSU Community Forum</h1>
      <div className={css.mockup}>
        <div className={css.forumText}>
          <p>
            A meeting place to exchange views on the latest news and happenings within the Inery
            blockchain
          </p>
          <Link to='/forum' className={css.visitBtn}>
            VISIT FORUM
          </Link>
        </div>
        <img src={image} alt='Forum mac mockup' />
      </div>
      <p className={css.desc}>
        The go-to place to find like-minded individuals looking to discuss anything and everything
        regarding Inery; from the latest features and updates to creating a small team of investors
        looking to share masternode costs.
      </p>
    </div>
  );
};

export default Forum;

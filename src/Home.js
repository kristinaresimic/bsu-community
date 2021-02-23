import React, { useState } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Forum from "./components/Forum/Forum";

import handleViewport from "react-in-viewport";

import MasterNode from "./components/MasterNode/MasterNode";
// import StakingPackages from "./components/StakingPackages/StakingPackages";
import { useMediaQuery } from "react-responsive";

import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

import HowItWorksComponent from "./components/HowItWorks/HowItWorks";
import HowItWorksMobileComponent from "./components/HowItWorksMobile/HowItWorksMobile";
import HeroSectionComponent from "./components/HeroSection/HeroSection";
import MasterNodeMobileComponent from "./components/MasterNodeMobile/MasterNodeMobile";
import DescriptionComponent from "./components/Description/Description";
// import StakingPackagesMobileComponent from "./components/StakingPackagesMobile/StakingPackagesMobile";
// import RoiCalculator from "./components/Calculator/RoiCalculator";

// import RoiCalculator from "./components/RoiCalculator/RoiCalculator";
import RoiCalculator from "./components/RoiCalculator/RoiCalculator";
import { Modal } from "./components/Modal/Modal";

const HowItWorks = handleViewport(HowItWorksComponent);
const HowItWorksMobile = handleViewport(HowItWorksMobileComponent);
const HeroSection = handleViewport(HeroSectionComponent);
const MasterNodeMobile = handleViewport(MasterNodeMobileComponent);
const Description = handleViewport(DescriptionComponent);
// const StakingPackagesMobile = handleViewport(StakingPackagesMobileComponent);

function Home() {
  const [active, setActive] = useState(2);
  const [modalDisplay, setModalDisplay] = useState('none');
  const [title, setTitle] = useState('noasdane');
  const [paragraph1, setParagraph1] = useState('');
  const [paragraph2, setParagraph2] = useState('');
  const [paragraph3, setParagraph3] = useState('');
  const [paragraph4, setParagraph4] = useState('');
  const [paragraph5, setParagraph5] = useState('');
  const [href, setHref] = useState('');
  const [linkText, setLinkText] = useState('');

  const isMobile = useMediaQuery({ maxDeviceWidth: 500 });


  const close = () => {
    if (modalDisplay == 'flex') {
      setModalDisplay("none");
      setTitle("");
      setParagraph1("");
      setParagraph2("");
      setParagraph3("");
      setParagraph4("");
      setParagraph5("");
      setLinkText("");
    }
  }
  const openModalMasternode = () => {
    setModalDisplay("flex")
    setTitle("What are Masternodes?");
    setParagraph1("The nodes in the Inery network are the most important part of the system. They ensure the transaction integrity and balance the workload while maintaining always-on operability in which data security rules operate. Master nodes are the backbone of the Inery network.");
    setParagraph2("By running a node you will become a part of a new ecosystem ensuring the safety and privacy of the data stored within the Inery blockchain. You will produce faster queries and together with other nodes you will have full control of which data to maintain with no single entity capable of controlling or manipulating it");
    setParagraph3("By becoming a master node early on you will have the chance of purchasing t BSU at a set price. Light nodes that only want to validate transactions, need to link themselves to a master node. However, in order to qualify as a node, you will need to have certain amount of BSU in your wallet. As a master node, you can share your resources with similar businesses creating your own network. Through numerous transactions being validated, you will have the chance to earn Inery BSU.");
  }
  const openModalInery = () => {
    setModalDisplay("flex")
    setTitle("Why Inery?");
    setParagraph1("Inery is specially designed to address database decentralization. By combining blockchain technology and distributed database properties, Inery enables data owners and users to efficiently store valuable and private information. Traditional means of data storage are fraught with many risks and elements of failure, with a lot of business owners looking for a better alternative. Decentralized data storage is that alternative. It is perfect for any business that is looking for the best privacy and security solution for their data. Improve the security, speed and management of your data with Inery!");
    setParagraph5("For more information visit");
    setHref("https://inery.io/");
    setLinkText("inery.io")
  }
  const openModalStaking = () => {
    setModalDisplay("flex")
    setTitle("What is Staking?");
    setParagraph1("Staking is the alternative to mining. No special hardware is required for this, but an investment in the selected coin or in our case BSU (Blockchain storage Unit). In addition, the BSU must be kept in a suitable wallet in order to take over the network functions as a node. These nodes take over the operation and the entire governance of the blockchain. With staking you are taking a part in the validation of transactions that Masternodes maintain on a blockchain. With your investment you will be able to access the resources of a Masternodes of your choosing and gain passive income.");

  }
  const openModalProof = () => {
    setModalDisplay("flex")
    setTitle("What is Proof of Stake?");
    setParagraph1("The proof-of-stake algorithm uses a random selection process to select a node as the validator for the next block. It does this based on a combination of factors which may include staking age, chance, and the nodes fortune.");
    setParagraph2("It can be noted that in proof-of-stake systems blocks are forged rather than mined.");
    setParagraph3("Users who want to participate in the forging process are obliged to have a certain number of coins as they are used in the network. The size of the stake determines the chances that a node will be chosen as the next validator to forge the next block - the bigger the stake, the greater the chances. ");
    setParagraph4('In order for the process to not benefit the richest nodes in the network, other unique methods are added to the selection process, such as "random block selection".')

  }
  return (
    <div onClick={close} className='App'>
      <Modal display={modalDisplay} close={close} title={title} paragraph1={paragraph1} paragraph2={paragraph2} paragraph3={paragraph3} paragraph4={paragraph4} paragraph5={paragraph5} href={href} linkText={linkText} />

      {isMobile ? <MobileNavigation active={active} setActive={(idx) => setActive(idx)} /> : null}
      <HeroSection
        onEnterViewport={() => {
          setActive(2);
        }}
        onLeaveViewport={() => { }}
      />
      {isMobile ? (
        <MasterNodeMobile
          onEnterViewport={() => {
            setActive(3);
          }}
          onLeaveViewport={() => { }}
        />
      ) : (
          <MasterNode />
        )}
      <Description
        onEnterViewport={() => {
          setActive(1);
        }}
        onLeaveViewport={() => { }}
      />
      {isMobile ? (
        <HowItWorksMobile
          onEnterViewport={() => {
            setActive(0);
          }}
          onLeaveViewport={() => { }}
        />
      ) : (
          <HowItWorks />
        )}

      <RoiCalculator />
      {/* {isMobile ? (
        <StakingPackagesMobile
          onEnterViewport={() => {
            setActive(4);
          }}
          onLeaveViewport={() => {}}
        />
      ) : (
        <StakingPackages />
      )} */}
      {/* <RoiCalculator /> */}
      <Forum />
      <Footer masternodes={openModalMasternode} inery={openModalInery} staking={openModalStaking} proof={openModalProof} />
    </div>
  );
}

export default Home;

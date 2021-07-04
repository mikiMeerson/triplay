import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import Form from "react-bootstrap/Form";
import Title from "./title";
import ListsContainer from "./lists-container";
import HomeStyle from "../Styles/home.module.css";
import GenericStyle from '../Styles/generic.module.css';

const Home = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isSwitchOn ? "dark" : "light"
    );
  }, [isSwitchOn]);

  const handleScroll = (location: string) => {
    scroller.scrollTo(location, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className={HomeStyle.container}>
      <Form className={GenericStyle.themeSwitch}>
        <Form.Switch
          onChange={() => setIsSwitchOn(!isSwitchOn)}
          type="switch"
          id="custom-switch"
          checked={isSwitchOn}
        />
      </Form>
      <Title scrollTo={handleScroll} isSwitchOn={isSwitchOn} />
      <div id="lists">
        <ListsContainer />
      </div>
    </div>
  );
};

export default Home;

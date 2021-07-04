import React, { useState, useEffect } from "react";
import lightImage from "../Assets/lake-light.jpg";
import darkImage from "../Assets/city-night.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import TitleStyle from "../Styles/title.module.css";

interface PropsType {
  scrollTo: (arg: string) => void;
  isSwitchOn: boolean;
}

const Title = ({ scrollTo, isSwitchOn }: PropsType) => {
  const [image, setImage] = useState(lightImage);

  useEffect(() => {
    setImage(isSwitchOn ? darkImage : lightImage);
  }, [isSwitchOn]);

  return (
    <div className={TitleStyle.header}>
      <Image src={image} className={TitleStyle.headerImage} />
      <div className={TitleStyle.headerText}>
        <h1 className={TitleStyle.title}>TRIPLAY</h1>
        <br />
        <span className={TitleStyle.secondTitle}>
          Find the match between your dream locations and your favorite artists.
          Your ideal vacation has never been closer.
        </span>
        <div className={TitleStyle.buttonContainer}>
          <Button
            className={TitleStyle.headerButton}
            size="lg"
            onClick={() => scrollTo("lists")}
          >
            Fill your bucket
          </Button>{" "}
          <Button
            variant="light"
            size="lg"
            onClick={() => scrollTo("suggestions")}
          >
            Get suggestions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Title;

import React from "react";
import { continents, music } from "../Assets/icons";

import BucketList from "./bucket-list";
import HomeStyle from "../Styles/home.module.css";

const ListsContainer = () => {
  return (
    <>
      <div className={HomeStyle.listContainer}>
        <BucketList
          header="PICK YOUR DESTINATION"
          placeholder="Where would you go?"
          iconList={continents}
        />
        <BucketList
          header="ADD YOUR ARTISTS"
          placeholder="Who are you listening to?"
          iconList={music}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ListsContainer;

import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import GenericStyle from "../Styles/generic.module.css";

interface optionType {
  value: string;
  label: string;
}

interface propsType {
  placeholder: string;
  onChange: (arg: any) => void;
  options: optionType[];
}

const SearchBar = (props: propsType) => {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(true);
  };

  const hideMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className={GenericStyle.searchContainer}>
      <Select
        isSearchable
        className={GenericStyle.searchBar}
        onInputChange={(e) => {
          e === "" ? hideMenu() : showMenu();
        }}
        menuIsOpen={openMenu}
        placeholder={props.placeholder}
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        onChange={props.onChange}
        options={props.options}
      />
      <Button className={GenericStyle.submit}>
        ADD
      </Button>
    </div>
  );
};

export default SearchBar;

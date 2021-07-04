import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./search-bar";
import ListStyle from "../Styles/list.module.css";

interface CountryType {
  name: string;
  label: string;
}

interface PropsType {
  header: string;
  placeholder: string;
  iconList: string[];
}

const BucketList = ({ header, placeholder, iconList }: PropsType) => {
  const [countries, setCountries] = useState<CountryType[] | any>([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all?fields=name`)
      .then((res) => {
        const data = res.data;
        setCountries(
          data.map((country: any) => {
            return { value: country.name, label: country.name };
          })
        );
      });
  }, []);

  return (
    <div className={ListStyle.list}>
      <h1 className={ListStyle.header}>{header}</h1>
      <div className={ListStyle.icons}>
        {iconList.map((icon) => (
          <i className={icon}></i>
        ))}
      </div>
      <SearchBar
        placeholder={placeholder}
        onChange={(e) => console.log(e)}
        options={countries}
      />
    </div>
  );
};

export default BucketList;

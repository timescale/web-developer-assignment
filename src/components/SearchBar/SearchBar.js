import React from "react";

//  Component
import InputGroup from "../Common/InputGroup";

//  Styles
import styles from "./styles/SearchBar.module.css";

const SearchBar = ({ placeholder, onChange, value }) => {
  return (
    <div className={styles.Search}>
      <InputGroup
        onChange={onChange}
        type="search"
        placeholder={placeholder}
        name="Search Bar"
        value={value}
      />
    </div>
  );
};

export default SearchBar;

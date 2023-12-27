import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import axios from "axios";
import Card from "./Card";
import MyCarousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Popular");

  useEffect(() => {
    fetchRecipe(selectedOption);
  }, [selectedOption]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      fetchRecipe(value);
    }, 500);

    setTimeoutId(newTimeoutId);
  };

  const handleSearchClick = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    fetchRecipe(searchTerm);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchRecipe = (searchString) => {
    const response = axios
      .get(
        `https://api.edamam.com/search?q=${searchString}&app_id=178b7114&app_key=6786ebd652b9bc2a711d5137b227a18f`
      )
      .then(function (response) {
        console.log(response.data.hits);
        setRecipeList(response.data.hits);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <div className="head-main">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <h4>Home</h4>
          <h4>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="Popular">Popular</option>
              <option value="chicken">Chicken</option>
              <option value="egg">Egg</option>
              <option value="pizza">Pizza</option>
            </select>
          </h4>
          <h4>About</h4>
          <Link to="/suggestion"><h4 className="sugg" >Suggestions</h4></Link>
        </div>
        <div className="searchbar">
          <div>
            <input
              type="text"
              className="search-bar"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <MyCarousel />
      <Card recipeList={recipeList} />
      <Footer/>
    </div>
  );
};

export default Header;

import React, { Component } from "react";

import Search from "./Search";
import Table from "./Table";

class App extends Component {
  state = {
    data: [],
    visibleData: [],
    allCategories: [],
    visibleCategories: [],
    searchCategory: "",
    isListCategoryVisible: false,
    selectedCategory: null
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = category => {
    fetch("http://www.json-generator.com/api/json/get/bZDwfDYjUy?indent=2")
      .then(response => response.json())
      .then(response => {
        const { entries } = response;
        const allCategories = entries
          .map(e => e.Category)
          .filter((item, pos, self) => self.indexOf(item) === pos);
        this.setState({
          data: entries,
          allCategories: allCategories,
          visibleCategories: allCategories
        });
      });
  };

  onSearch = event => {
    const value = event.target.value;
    const visibleCategories = this.state.allCategories.filter(category =>
      category.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      searchCategory: value,
      visibleCategories: visibleCategories
    });
  };

  onInput = event => {
    event.stopPropagation();
    this.setState({
      isListCategoryVisible: true
    });
  };

  onCategoryClick = category => {
    const visibleData = this.state.data.filter(
      e => e.Category.toLowerCase() === category.toLowerCase()
    );
    this.setState({
      isListCategoryVisible: false,
      selectedCategory: category,
      visibleData: visibleData
    });
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.onCategoryClick(this.state.searchCategory);
    }
  };

  render() {
    return (
      <div
        className="app"
        onClick={() => this.setState({ isListCategoryVisible: false })}
      >
        <div className="centerContainer">
          <Search
            onSearch={this.onSearch}
            onInput={this.onInput}
            onCategoryClick={this.onCategoryClick}
            isListCategoryVisible={this.state.isListCategoryVisible}
            visibleCategories={this.state.visibleCategories}
            onKeyDown={this.onKeyDown}
          />
          <Table
            selectedCategory={this.state.selectedCategory}
            visibleData={this.state.visibleData}
          />
        </div>
      </div>
    );
  }
}
export default App;

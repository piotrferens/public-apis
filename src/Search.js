import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div className="categories-wrapper">
        <input
          className="input"
          onChange={this.props.onSearch}
          onClick={this.props.onInput}
          value={this.props.searchCategory}
          onKeyDown={this.props.onKeyDown}
        />
        {this.props.isListCategoryVisible ? (
          <div className="categories">
            {this.props.visibleCategories.map(category => (
              <div
                onClick={() => this.props.onCategoryClick(category)}
                key={category}
              >
                {category}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

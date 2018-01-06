import React from "react";

export default class Table extends React.Component {
  render() {
    return (
      <div className="column">
        {this.props.selectedCategory ? (
          <table className="table">
            <thead className="tableHeader">
              <tr>
                <th> API</th>
                <th> Description</th>
                <th> HTTPS</th>
                <th> Link</th>
              </tr>
            </thead>
            <tbody>
              {this.props.visibleData.map(post => (
                <tr className="category" key={post.API}>
                  <td> {post.API} </td>
                  <td> {post.Description}</td>
                  <td style={{ padding: 5, textAlign: "center" }}>
                    {post.HTTPS ? "Yes" : "No"}
                  </td>
                  <td>
                    <a href={post.Link} target="_blank">
                      {post.Link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }
}

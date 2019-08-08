import React from "react";

class PortfolioItem extends React.Component {
  render() {
    let { title } = this.props.data;
    let { others } = this.props;
    return (
      <>
        <div className="portfolioItem">
          <h1>{title}</h1>
        </div>
      </>
    );
  }
}

export default PortfolioItem;

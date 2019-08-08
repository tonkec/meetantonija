import React from "react";

class PortfolioItem extends React.Component {
  render() {
    return (
      <>
        <div className="portfolioItem">{this.props.children}</div>
      </>
    );
  }
}

export default PortfolioItem;

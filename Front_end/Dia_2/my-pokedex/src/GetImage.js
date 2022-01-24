import React from "react";

class GetImage extends React.Component {
  render () {
    return (
      <img src={this.props.src} alt="Any"/>
    )
  }
}

export default GetImage;
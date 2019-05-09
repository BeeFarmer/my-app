import React from 'react'
class MyColor extends React.Component {
  render() {
    return (
      <div className="iframe-display">
      <iframe className="iframe" src="https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336">
      </iframe>
      </div>
    );
  }
}
export default MyColor

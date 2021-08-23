import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true,
    };
  }
  render() {
    return (
      <div className=" flex hover:bg-green-900   hover:text-white text-white bg-green-600 font-semibold  rounded-tr-lg shadow  m-2">
        <button
          onClick={() => this.props.numberQuestion(this.props.stt)}
          className=" w-12 h-8 focus:outline-none "
        ><p> {this.props.stt}</p>
        </button>
      </div>
    );
  }
}

export default Image;

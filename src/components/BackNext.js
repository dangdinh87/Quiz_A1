import React from "react";

class BackNext extends React.Component {
  BackNext = (e) => {
    let a = e.target.value;
    this.props.BackNext(parseInt(a));
  };

  render() {
    let { stt } = this.props;
    let checkStyle =
      stt == 0
        ? "bg-blue-200 text-white py-1 px-4  focus:outline-none rounded shadow"
        : "bg-blue-500 text-white py-1 px-4  focus:outline-none rounded shadow";
    let checkStyle2 =
      stt ==19
        ? "bg-blue-200 text-white py-1 px-4  focus:outline-none rounded shadow"
        : "bg-blue-500 text-white py-1 px-4  focus:outline-none rounded shadow";
    return (
      <div className="flex pt-4 justify-between">
        <button value="-1" className={checkStyle} onClick={this.BackNext}>
          <i class="fas fa-long-arrow-alt-left"></i>
          &nbsp; Back
        </button>
        <button
          value="1"
          className={checkStyle2}
          onClick={this.BackNext}
        >
          Next &nbsp;<i class="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  }
}
export default BackNext;

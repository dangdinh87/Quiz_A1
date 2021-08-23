import React from "react";

class QuestionChoice extends React.Component {
  handleClick = (a) => {
    let e = a.target.value;
    this.props.handleClick(this.props.choice, e);
  };

  render() {
    return (
      <div className=" text-black font-sans font-semibold">
        <input
          type="checkbox"
          name="gender"
          onClick={this.handleClick}
          checked={this.props.picked}
          value={this.props.picked ? true : false}
          className="cursor-pointer"
        />
        &nbsp;
        <p className="inline">{this.props.answer}</p>
        &nbsp;
      </div>
    );
  }
}
export default QuestionChoice;

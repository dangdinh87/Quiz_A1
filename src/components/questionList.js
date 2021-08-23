import React from "react";
import QuestionChoice from "./questionChoice";

class questionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      isDisplay: true,
    };
  }

  render() {
    let answers = [];
    for (let i = 0; i < this.props.quiz.answers.length; i++) {
      if (parseInt(this.props.arrQuestion.correct) === i) {
        answers.push(
          <QuestionChoice
            choice={i}
            handleClick={this.props.handleClick}
            answer={this.props.quiz.answers[i]}
            picked={true}
          />
        );
      } else {
        answers.push(
          <QuestionChoice
            choice={i}
            handleClick={this.props.handleClick}
            answer={this.props.quiz.answers[i]}
          />
        );
      }
    }
    return (
      <div className="w-full h-full mt-5">
        <img
          alt="Ảnh"
          className={this.props.image ? "bg-cover h-48 m-2 mx-auto " : "hidden"}
          src={this.props.image ? this.props.image : "null"}
        />
        <p className="font-bold  px-2">
          <span className="text-sm font-medium bg-orange-500  rounded text-white py-1 px-2 ">
            Câu {this.props.stt} / 20
          </span>
          &nbsp;{this.props.question}
        </p>
        <div className='p-2'>{answers}</div>
      </div>
    );
  }
}
export default questionList;

import React from "react";

import QuestionsList from "./questionList";
import Control from "./control";
import BackNext from "./BackNext";
import Result from "./Result";

import Swal from "sweetalert2";
import data from "./../data";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: data,
      score: 0,
      current: 0,
      arrQuestion: [
        {
          id: "1",
          correct: [-1, -2],
        },
        {
          id: "2",
          correct: -1,
        },
        {
          id: "3",
          correct: -1,
        },
        {
          id: "4",
          correct: -1,
        },
        {
          id: "5",
          correct: -1,
        },
        {
          id: "6",
          correct: -1,
        },
        {
          id: "7",
          correct: -1,
        },
        {
          id: "8",
          correct: -1,
        },
        {
          id: "9",
          correct: -1,
        },
        {
          id: "10",
          correct: -1,
        },
        {
          id: "11",
          correct: -1,
        },
        {
          id: "12",
          correct: -1,
        },
        {
          id: "13",
          correct: -1,
        },
        {
          id: "14",
          correct: -1,
        },
        {
          id: "15",
          correct: -1,
        },
        {
          id: "16",
          correct: -1,
        },
        {
          id: "17",
          correct: -1,
        },
        {
          id: "18",
          correct: -1,
        },
        {
          id: "19",
          correct: -1,
        },
        {
          id: "20",
          correct: -1,
        },
      ],
    };
  }
  BackNext = (value) => {
    if (this.state.current + value >= 0 && this.state.current + value < 20)
      this.setState({
        current: this.state.current + value,
      });
  };
  numberQuestion = (a) => {
    this.setState({
      current: a - 1,
    });
  };
  handleClick = (choice, checked) => {
    let stt = this.state.quiz[this.state.current].stt;
    for (const i of this.state.arrQuestion) {
      if (parseInt(i.id) === stt) {
        let arrSlice = this.state.arrQuestion.slice();
        arrSlice[stt - 1].correct = choice;
        this.setState({
          arrQuestion: arrSlice,
        });
      }
    }

    if (choice === this.state.quiz[this.state.current].correct) {
      if (checked === false.toString()) {
        this.setState({ score: this.state.score + 1 });
      }
    }
  };

  render() {
    const Completionist = () => {
      if (this.state.score > 14)
        Swal.fire(
          "Điểm của bạn là " + this.state.score + "/20",
          "Chúc mừng ! Bạn đã đậu bài test !",
          "success"
        );
      else
        Swal.fire({
          icon: "error",
          title: "Điểm của bạn là " + this.state.score + "/20",
          text: "Tiếc quá ! Bạn không đậu bài test! ",
        });
    };
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        return (
          <span>
            {minutes}:{seconds}
          </span>
        );
      }
    };

    return (
      <div className="md:flex md:flex-wrap  container w-full mx-auto relative justify-around">
        <div className="w-full md:w-3/12  bg-gray-100  rounded-md self-start border border-green-600 ">
          <Control
            quiz={this.state.quiz}
            // receiveId={this.receiveId}
            numberQuestion={this.numberQuestion}
          />
        </div>
        <div className="w-full md:w-8/12 flex flex-col bg-gray-100   py-2 px-8 rounded-md shadow-2xl">
          <QuestionsList
            handleClick={this.handleClick}
            quiz={this.state.quiz[this.state.current]}
            question={this.state.quiz[this.state.current].question}
            stt={this.state.quiz[this.state.current].stt}
            arrQuestion={this.state.arrQuestion[this.state.current]}
            image={this.state.quiz[this.state.current].image}
          />
          <BackNext BackNext={this.BackNext} stt={this.state.current} />
        </div>
        <Result score={this.state.score} />
      </div>
    );
  }
}
export default Main;

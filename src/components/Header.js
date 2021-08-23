import React, { Component } from "react";
import Countdown from "react-countdown";
import Swal from "sweetalert2";
const Completionist = () => {
  if (true)
    Swal.fire(
      // `Điểm của bạn là  ${this.props.score}/20`,
      "Đã hết thời gian làm bài !"
      // "success"
    );
  // else
  //   Swal.fire({
  //     icon: "error",
  //     title: `Điểm của bạn là  ${this.props.score}/20`,
  //     text: "Tiếc quá ! Bạn không đậu bài test! ",
  //   });
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

class Header extends Component {
  render() {
    return (
      <>
        <div className="container mx-auto pt-10 relative">
          <h1 className="text-4xl text-center text-gray-100	uppercase font-mono ">
            Thi trắc nghiệm bằng lái xe A1
          </h1>
        </div>
        <div className=" container mx-auto w-full relative py-8 px-8 ">
          <div className="flex flex-wrap flex-column justify-between items-center ">
            <div class="w-24 bg-white tracking-wide text-gray-800 font-bold rounded  shadow-md py-2">
              <div class="mx-auto text-center">
                <i class="fas fa-file"></i> Đề thi
              </div>
            </div>
            <div class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded  shadow-md py-2">
              <div class="mx-auto text-center">
                <i class="fas fa-history"></i>&nbsp;
                <Countdown date={Date.now() + 899000} renderer={renderer} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;

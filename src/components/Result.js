import React from "react";
import Swal from "sweetalert2";

class Result extends React.Component {

  changeText = () => {
    this.props.handleClick(this.props.choice);
  };

  Result = (e) => {
    Swal.fire({
      title: "Bạn muốn nộp bài ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp nhận",
    }).then((result) => {
      if (result.value) {
        if (e > 14)
          Swal.fire(
            "Điểm của bạn là " + e+'/20',
            "Chúc mừng ! Bạn đã đậu !",
            "success"
          );
        else
          Swal.fire({
            icon: "error",
            title: "Điểm của bạn là " + e+'/20',
            text: "Tiếc quá ! Bạn không đậu ! ",
          });
      }
    });
  };

  render() {
    return (
      <div className="flex justify-content mt-8">
        <button
          type="submit"
          className="uppercase mx-auto shadow bg-green-600 text-white text-xs py-3 px-10 rounded"
          onClick={() => {
            this.Result(this.props.score);
          }}
        >
          Nộp bài
        </button>
      </div>
    );
  }
}
export default Result;

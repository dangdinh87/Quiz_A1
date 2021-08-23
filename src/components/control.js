import React from "react";
import Image from "./image";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay : true,
    };
  }
  render() {
    let elms = this.props.quiz.map(({ stt }) => {
      return (
        <Image stt= {stt} numberQuestion={this.props.numberQuestion}/>
      );})
    return (
      <div className='bg-transparent flex flex-wrap my-4 justify-center'>
       {elms}
      </div>
    );
  }
}
export default Control;

import "../App.css";
import Q1 from "./Q1";
import Q2 from "./Q2";
import QuizTitle from "./QuizTitle";
function Quiz() {
  return (
    <div className='box'>
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
}

export default Quiz;

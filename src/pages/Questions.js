import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';
import Question from '../components/Question';
import { useState } from 'react';
import QuestionProgress from '../components/QuestionProgress';

function Questions() {
    const [questionCounter, setQuestionCounter] = useState(0);
    const [questionProgress, setQuestionProgress] = useState(0);
    const [progress1, setProgress1] = useState(0.5);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);

    function incrementQuestionCounter() {
        setQuestionCounter(prevCounter => {
            const newCounter = prevCounter + 1;
            const newProgress = (newCounter * 25) / 100;
            if (newCounter === 1) {
                setProgress1(1);
                setProgress2(0.5);
            } else if (newCounter === 2) {
                setProgress2(1);
                setProgress3(0.5);
            } else {
                setProgress3(1);
            }
            setQuestionProgress(newProgress);
            return newCounter;
        });
    }

    return (
        <div className='Questions'>
            <header>
                <Menu />
                <Progress progressBarValue1='1' progressBarValue2={questionProgress}/>
                <div className='QuestionProgressContainer'>
                    <md-divider />
                    <QuestionProgress progressBarValue1={progress1} progressBarValue2={progress2} progressBarValue3={progress3} questionCounter={questionCounter}/>
                </div>
            </header>
            <div className='Content'>
                <Question questionCounter={questionCounter} incrementQuestionCounter={incrementQuestionCounter} />
            </div>
        </div>
    );
} 

export default Questions;
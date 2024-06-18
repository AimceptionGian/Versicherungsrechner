import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';
import Question from '../components/Question';
import { useState } from 'react';
import QuestionProgress from '../components/QuestionProgress';

function Questions() {
    const [questionCounter, setQuestionCounter] = useState(0);
    const [questionProgress, setQuestionProgress] = useState(0);

    function incrementQuestionCounter() {
        setQuestionCounter(prevCounter => {
            const newCounter = prevCounter + 1;
            const newProgress = (newCounter * 25) / 100;
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
                    <QuestionProgress />
                </div>
            </header>
            <div className='Content'>
                <Question questionCounter={questionCounter} incrementQuestionCounter={incrementQuestionCounter} />
            </div>
        </div>
    );
} 

export default Questions;
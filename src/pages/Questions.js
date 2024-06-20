import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';
import Question from '../components/Question';
import QuestionProgress from '../components/QuestionProgress';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Questions() {
    const [questionCounter, setQuestionCounter] = useState(0);
    const [questionProgress, setQuestionProgress] = useState(0);
    const [progress1, setProgress1] = useState(0.5);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    const navigate = useNavigate();
    
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
            } else if (newCounter === 3){
                setProgress3(1);
            } else {
                navigate("/pages/Calculation");
            }
            setQuestionProgress(newProgress);
            return newCounter;
        });
    }

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = (event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
            setHovered(false);
        }
    };

    return (
        <div className='Questions'>
            <header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Menu />
                <Progress progressBarValue1='1' progressBarValue2={questionProgress}/>
                <div className={`QuestionProgressContainer ${hovered ? 'visible' : ''}`}>
                    <md-divider />
                    <QuestionProgress progressBarValue1={progress1} progressBarValue2={progress2} progressBarValue3={progress3} questionCounter={questionCounter} setQuestionCounter={setQuestionCounter} />
                </div>
            </header>
            <div className={`Content ${hovered ? 'offset' : ''}`}>
                <Question questionCounter={questionCounter} incrementQuestionCounter={incrementQuestionCounter} />
            </div>
        </div>
    );
} 

export default Questions;
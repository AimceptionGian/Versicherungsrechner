import '../styles/App.css';
import { ReactComponent as Adults } from '../images/adults.svg';
import { ReactComponent as Baby } from '../images/baby.svg';
import { ReactComponent as Rathaus } from '../images/rathaus.svg';
import { ReactComponent as Famous } from '../images/famous.svg';
import { useState, useEffect } from 'react';

const QuestionProgress = ({ progressBarValue1, progressBarValue2, progressBarValue3, questionCounter }) => {
    const [progressClass1, setProgressClass1] = useState('');
    const [progressClass2, setProgressClass2] = useState('');
    const [progressClass3, setProgressClass3] = useState('');
    const [progressClass4, setProgressClass4] = useState('');

    useEffect(() => {
        if (questionCounter === 0) {
            setProgressClass1('InProgress');
        } else if (questionCounter === 1) {
            setProgressClass1('Done');
            setProgressClass2('InProgress');
        } else if (questionCounter === 2) {
            setProgressClass2('Done');
            setProgressClass3('InProgress');
        } else if (questionCounter === 3) {
            setProgressClass3('Done');
            setProgressClass4('InProgress');
        } else {
            setProgressClass4('Done');
        }
    }, [questionCounter]);

    const handleButton = (buttonValue) => {

    };

    return (
        <div className='QuestionProgress'>
            <div className={`QuestionProgressItem ${progressClass1}`}>
                <md-icon-button onClick={() => handleButton()}><Adults className='AdultsIcon' /></md-icon-button>
                <h4>Erwachsene</h4>
            </div>
            <md-linear-progress value={progressBarValue1}></md-linear-progress>
            <div className={`QuestionProgressItem ${progressClass2}`}>
                <md-icon-button><Baby className='BabyIcon' /></md-icon-button>
                <h4>Kinder</h4>
            </div>
            <md-linear-progress value={progressBarValue2}></md-linear-progress>
            <div className={`QuestionProgressItem ${progressClass3}`}>
                <md-icon-button><Rathaus className='RathausIcon' /></md-icon-button>
                <h4>Tätigkeit</h4> 
            </div>
            <md-linear-progress value={progressBarValue3}></md-linear-progress>
            <div className={`QuestionProgressItem ${progressClass4}`}>
                <md-icon-button><Famous className='FamousIcon' /></md-icon-button>
                <h4>Social Media</h4> 
            </div>
        </div>
    );
}

export default QuestionProgress;
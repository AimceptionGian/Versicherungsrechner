import '../styles/App.css';
import { ReactComponent as Adults } from '../images/adults.svg';
import { ReactComponent as Baby } from '../images/baby.svg';
import { ReactComponent as Rathaus } from '../images/rathaus.svg';
import { ReactComponent as Famous } from '../images/famous.svg';
import { useState, useRef } from 'react';

const Question = ({ questionCounter, incrementQuestionCounter }) => {
    const [question0, setQuestion0] = useState(null);
    const [question1, setQuestion1] = useState(null);
    const [question2, setQuestion2] = useState(null);
    const [question3, setQuestion3] = useState(null);

    const refTfq0 = useRef(null);
    const refTfq1 = useRef(null);

    const handleContinueButton = () => {
        const valueTfq0 = refTfq0.current.value;
        const valueTfq1 = refTfq1.current.value;

        if (questionCounter === 0) {
            if (valueTfq0 <= 12 && valueTfq0 > 0) {
                setQuestion0(valueTfq0);
                incrementQuestionCounter();
            }
        } else {
            if (valueTfq1 <= 12 && valueTfq1 >= 0) {
                setQuestion1(valueTfq1);
                incrementQuestionCounter();
            }
        }
    };

    const handleNumberButton = (buttonValue) => {
        if (questionCounter === 0) {
            setQuestion0(buttonValue);
        } else if (questionCounter === 1) {
            setQuestion1(buttonValue);
        } else if (questionCounter === 2) {
            setQuestion2(buttonValue);
        } else {
            setQuestion3(buttonValue);
        }
        incrementQuestionCounter();
    };
    
    const q0ButtonValues = [1, 2, 3, 4];
    const q1ButtonValues = [0, 1, 2, 3];

    const questionList = [
        <div className='Vertical'>
            <Adults />
            <h3>Wieviele Erwachsene (über 18) gehören zu Ihrem Haushalt?</h3>
            <div className='Horizontal'>
                {q0ButtonValues.map((value) => (
                    <md-elevated-button onClick={() => handleNumberButton(value)}>{value}</md-elevated-button>
                ))}
            </div>
            <div className='Horizontal'>
                <md-outlined-text-field ref={refTfq0} type="number" label="Mehr (1-12)" />
                <md-filled-button onClick={handleContinueButton}>Weiter</md-filled-button>
            </div>
        </div>,
        <div className='Vertical'>
            <Baby />
            <h3>Wieviele Kinder (unter 18) gehören zu Ihrem Haushalt?</h3>
            <div className='Horizontal'>
                {q1ButtonValues.map((value) => (
                    <md-elevated-button onClick={() => handleNumberButton(value)}>{value}</md-elevated-button>
                ))}
            </div>
            <div className='Horizontal'>
                <md-outlined-text-field ref={refTfq1} type="number" label="Mehr (0-12)" />
                <md-filled-button onClick={handleContinueButton}>Weiter</md-filled-button>
            </div>
        </div>,
        <div className='Vertical'>
            <Rathaus />
            <h3>Übt eine versicherte Person eine politische oder religiöse Tätigkeit aus?</h3>
            <div className='Horizontal'>
                <md-elevated-button onClick={() => handleNumberButton(true)}>Ja</md-elevated-button>
                <md-elevated-button onClick={() => handleNumberButton(false)}>Nein</md-elevated-button>
            </div>
        </div>,
        <div className='Vertical'>
            <Famous />
            <h3>Ist eine der versicherten Personen eine Person öffentlichen Interesses <br /> oder hat ein Social Media Profil mit mehr als 5000 Followern?</h3>
            <div className='Horizontal'>
                <md-elevated-button onClick={() => handleNumberButton(true)}>Ja</md-elevated-button>
                <md-elevated-button onClick={() => handleNumberButton(false)}>Nein</md-elevated-button>
            </div>
        </div>
    ];

    return(
        <div>
           {questionList.map((question, index) => (
                <div className={`Question ${questionCounter === index ? 'visible' : ''}`}>
                    {question}
                </div>
            ))} 
        </div>
    );
}

export default Question;
import '../styles/App.css';
import { ReactComponent as Adults } from '../images/adults.svg';
import { ReactComponent as Baby } from '../images/baby.svg';
import { ReactComponent as Rathaus } from '../images/rathaus.svg';
import { ReactComponent as Famous } from '../images/famous.svg';
import { useState, useRef } from 'react';

function Question() {
    const [questionCounter, setQuestionCounter] = useState(0);
    const [question0, setQuestion0] = useState(null);
    const [question1, setQuestion1] = useState(null);
    const [question2, setQuestion2] = useState(null);
    const [question3, setQuestion3] = useState(null);

    const inputRef0 = useRef(null);
    const inputRef1 = useRef(null);

    const handleContinueButton = () => {
        const valueTfq0 = inputRef0.current.value;
        const valueTfq1 = inputRef1.current.value;

        if (questionCounter === 0) {
            if (valueTfq0 <= 12 && valueTfq0 >= 0) {
                setQuestion0(valueTfq0);
                setQuestionCounter(questionCounter + 1);
            }
        } else {
            if (valueTfq1 <= 12 && valueTfq1 >= 0) {
                setQuestion1(valueTfq1);
                setQuestionCounter(questionCounter + 1);
            }
        }
    };

    const questionList = [
        <div className='Vertical'>
            <Adults />
            <h3>Wieviele Erwachsene (über 18) gehören zu Ihrem Haushalt?</h3>
            <div className='Horizontal'>
                <md-elevated-button>1</md-elevated-button>
                <md-elevated-button>2</md-elevated-button>
                <md-elevated-button>3</md-elevated-button>
                <md-elevated-button>4</md-elevated-button>
            </div>
            <div className='Horizontal'>
                <md-outlined-text-field ref={inputRef0} id="tfq0" type="number" label="Mehr" />
                <md-filled-button onClick={handleContinueButton}>Weiter</md-filled-button>
            </div>
        </div>,
        <div className='Vertical'>
            <Baby />
            <h3>Wieviele Kinder (unter 18) gehören zu Ihrem Haushalt?</h3>
            <div className='Horizontal'>
                <md-elevated-button>Keine</md-elevated-button>
                <md-elevated-button>1</md-elevated-button>
                <md-elevated-button>2</md-elevated-button>
                <md-elevated-button>3</md-elevated-button>
            </div>
            <div className='Horizontal'>
                <md-outlined-text-field ref={inputRef1} id="tfq1" type="number" label="Mehr" />
                <md-filled-button onClick={handleContinueButton}>Weiter</md-filled-button>
            </div>
        </div>,
        <div className='Vertical'>
            <Rathaus />
            <h3>Übt eine versicherte Person eine politische oder religiöse Tätigkeit aus?</h3>
            <div className='Horizontal'>
                <md-elevated-button>Ja</md-elevated-button>
                <md-elevated-button>Nein</md-elevated-button>
            </div>
        </div>,
        <div className='Vertical'>
            <Famous />
            <h3>Ist eine der versicherten Personen eine Person öffentlichen Interesses <br /> oder hat ein Social Media Profil mit mehr als 5000 Followern?</h3>
            <div className='Horizontal'>
                <md-elevated-button>Ja</md-elevated-button>
                <md-elevated-button>Nein</md-elevated-button>
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
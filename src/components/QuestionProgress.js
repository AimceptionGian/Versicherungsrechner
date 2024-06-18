import '../styles/App.css';
import { ReactComponent as Adults } from '../images/adults.svg';
import { ReactComponent as Baby } from '../images/baby.svg';
import { ReactComponent as Rathaus } from '../images/rathaus.svg';
import { ReactComponent as Famous } from '../images/famous.svg';

const QuestionProgress = ({ progressBarValue1, progressBarValue2, progressBarValue3 }) => {
    return (
        <div className='QuestionProgress'>
            <div className='QuestionProgressItem'>
                <md-icon-button><Adults className='Adults' /></md-icon-button>
                <h4>Erwachsene</h4>
            </div>
            <md-linear-progress value={progressBarValue1}></md-linear-progress>
            <div className='QuestionProgressItem'>
                <md-icon-button><Baby className='Baby' /></md-icon-button>
                <h4>Kinder</h4>
            </div>
            <md-linear-progress value={progressBarValue2}></md-linear-progress>
            <div className='QuestionProgressItem'>
                <md-icon-button><Rathaus className='Rathaus' /></md-icon-button>
                <h4>Tätigkeit</h4> 
            </div>
            <md-linear-progress value={progressBarValue3}></md-linear-progress>
            <div className='QuestionProgressItem'>
                <md-icon-button><Famous className='Famous' /></md-icon-button>
                <h4>Social Media</h4> 
            </div>
        </div>
    );
}

export default QuestionProgress;
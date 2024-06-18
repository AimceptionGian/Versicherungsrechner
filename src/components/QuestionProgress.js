import '../styles/App.css';

const QuestionProgress = ({ progressBarValue1, progressBarValue2, progressBarValue3 }) => {
    return (
        <div className='Progress'>
            <div className='QuestionProgressItem'>
                <md-icon-button></md-icon-button>
                <h4>Auswahl</h4>
            </div>
            <md-linear-progress value={progressBarValue1}></md-linear-progress>
            <div className='QuestionProgressItem'>
                <md-icon-button></md-icon-button>
                <h4>Angaben</h4>
            </div>
            <md-linear-progress value={progressBarValue2}></md-linear-progress>
            <div className='QuestionProgressItem'>
                <md-icon-button></md-icon-button>
                <h4>Berechnung</h4> 
            </div>
            <md-linear-progress value={progressBarValue3}></md-linear-progress>
            <div className='QuestionProgressItem'>
                <md-icon-button></md-icon-button>
                <h4>Berechnung</h4> 
            </div>
        </div>
    );
}

export default QuestionProgress;
import '../styles/App.css';
import { ReactComponent as Auswahl} from '../images/auswahl.svg';
import { ReactComponent as Angaben} from '../images/angaben.svg';
import { ReactComponent as Berechnung} from '../images/calculator.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Progress = ({ progressBarValue1, progressBarValue2 }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (progressBarValue2 === 1) {
            document.getElementById('calcButton').disabled = false;
        } else {
            document.getElementById('calcButton').disabled = true;
        }
    },[progressBarValue2]);

    return (
        <div className='Progress'>
            <div className='ProgressItem'>
                <md-icon-button onClick={() => navigate("/Choose")}><Auswahl className='AuswahlIcon'/></md-icon-button>
                <h4>Auswahl</h4>
            </div>
            <md-linear-progress value={progressBarValue1}></md-linear-progress>
            <div className='ProgressItem'>
                <md-icon-button onClick={() => navigate("/Questions")}><Angaben className='AngabenIcon'/></md-icon-button>
                <h4>Angaben</h4>
            </div>
            <md-linear-progress value={progressBarValue2}></md-linear-progress>
            <div className='ProgressItem'>
                <md-icon-button id='calcButton' onClick={() => navigate("/Calculation")}><Berechnung className='BerechnungIcon'/></md-icon-button>
                <h4>Berechnung</h4>
            </div>
        </div>
    );
}

export default Progress;
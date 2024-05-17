import '../styles/App.css';
import { ReactComponent as Auswahl} from '../images/auswahl.svg';
import { ReactComponent as Angaben} from '../images/angaben.svg';
import { ReactComponent as Berechnung} from '../images/calculator.svg';

function Progress() {
    return (
        <div className='Progress'>
            <div className='ProgressItem'>
                <md-icon-button><Auswahl className='AuswahlIcon'/></md-icon-button>
                <h4>Auswahl</h4>
            </div>
            <md-linear-progress value="0"></md-linear-progress>
            <div className='ProgressItem'>
                <md-icon-button><Angaben className='AngabenIcon'/></md-icon-button>
                <h4>Angaben</h4>
            </div>
            <md-linear-progress value="0"></md-linear-progress>
            <div className='ProgressItem'>
                <md-icon-button><Berechnung className='BerechnungIcon'/></md-icon-button>
                <h4>Berechnung</h4>
            </div>
        </div>
    );
}

export default Progress;
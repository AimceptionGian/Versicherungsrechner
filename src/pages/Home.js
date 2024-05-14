import '../styles/App.css';
import { ReactComponent as Logo} from '../images/robot.svg';
import { ReactComponent as Auswahl} from '../images/auswahl.svg';
import { ReactComponent as Angaben} from '../images/angaben.svg';
import { ReactComponent as Berechnung} from '../images/calculator.svg';

function Home() {
    return (
        <div className='Home'>
        <body>
            <div className='TitelScreen'>
            <div className='Titel'> 
                <Logo className='Logo'/>
                <h1>Cyberversicherung</h1>
            </div>
            <h3>Versicherung abschliessen in 3 einfachen Schritten</h3>
            <Progress />
            <md-filled-button>Jetzt Starten</md-filled-button>
            </div>
        </body>
        </div>
    );
}

function Progress() {
    return (
        <div className='Progress'>
            <div className='ProgressItem'>
                <md-icon-button><Auswahl className='AuswahlIcon'/></md-icon-button>
                <h4>Auswahl</h4>
            </div>
            <md-linear-progress value="1"></md-linear-progress>
            <div className='ProgressItem'>
                <md-icon-button><Angaben className='AngabenIcon'/></md-icon-button>
                <h4>Angaben</h4>
            </div>
            <md-linear-progress value="0.5"></md-linear-progress>
            <div className='ProgressItem'>
                <md-icon-button><Berechnung className='BerechnungIcon'/></md-icon-button>
                <h4>Berechnung</h4>
            </div>
        </div>
    );
}

export default Home;
export { Progress };
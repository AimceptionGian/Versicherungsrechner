import '../styles/App.css';
import { ReactComponent as Logo} from '../images/robot.svg';
import { ReactComponent as Auswahl} from '../images/auswahl.svg';
import { ReactComponent as Angaben} from '../images/angaben.svg';
import { ReactComponent as Berechnung} from '../images/calculator.svg';
import Progress from '../components/Progress';

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

export default Home;
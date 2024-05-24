import '../styles/App.css';
import { ReactComponent as Logo } from '../images/robot.svg';
import Progress from '../components/Progress';

function Home() {
    return (
        <div className='Home'>
            <div className='Content'>
                <div className='Titel'>
                    <Logo className='Logo' />
                    <h1>Cyberversicherung</h1>
                </div>
                <h3>Versicherung abschliessen in 3 einfachen Schritten</h3>
                <Progress />
                <md-filled-button>Jetzt Starten</md-filled-button>
            </div>
        </div>
    );
}

export default Home;
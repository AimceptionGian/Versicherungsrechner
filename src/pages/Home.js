import '../styles/App.css';
import { ReactComponent as Logo } from '../images/robot.svg';
import Progress from '../components/Progress';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function handleStartButton() {
        navigate("/Choose");
    }

    return (
        <div className='Home'>
            <div className='Content'>
                <div className='Titel'>
                    <Logo className='Logo' />
                    <h1>Cyberversicherung</h1>
                </div>
                <h3>Versicherung abschliessen in 3 einfachen Schritten</h3>
                <Progress progressBarValue1='0' progressBarValue2='0' />
                <md-filled-button onClick={handleStartButton}>Jetzt Starten</md-filled-button>
            </div>
        </div>
    );
}

export default Home;
import '../styles/App.css';
import { ReactComponent as Logo} from '../images/robot.svg';
import { ReactComponent as Auswahl} from '../images/auswahl.svg';
import { ReactComponent as Angaben} from '../images/angaben.svg';
import { ReactComponent as Berechnung} from '../images/calculator.svg';
import Progress from './Home';

function Choose() {
    return (
        <head>
            <Progress />
        </head>
    );
}

export default Choose;
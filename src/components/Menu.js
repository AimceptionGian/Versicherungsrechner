import '../styles/App.css';
import { ReactComponent as Logo} from '../images/robot.svg';

function Menu() {
    return(
        <div className='MenuButton'>
            <md-icon-button><Logo className='MenuLogo' /></md-icon-button>
        </div>
    );
}

export default Menu;
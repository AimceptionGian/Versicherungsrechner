import '../styles/App.css';
import { ReactComponent as Logo} from '../images/robot.svg';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    function handleMenuButton() {
        navigate("/pages/Home");
      }

    return(
        <div onClick={handleMenuButton} className='MenuButton'>
            <md-icon-button><Logo className='MenuLogo' /></md-icon-button>
        </div>
    );
}

export default Menu;
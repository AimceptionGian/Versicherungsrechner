import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';

function Calculation() {
    return (
        <div className='Calculation'>
            <header>
                <Menu />
                <Progress />
            </header>
        </div>
    );
}

export default Calculation;
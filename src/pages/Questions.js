import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';
import Question from '../components/Question';

function Questions() {
    return (
        <div className='Questions'>
            <header>
                <Menu />
                <Progress progressBarValue1='1' progressBarValue2='0'/>
            </header>
            <div className='Content'>
                <Question />
            </div>
        </div>
    );
} 

export default Questions;
import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';
import { moduleList } from '../components/Modules';

function Calculation() {
    return (
        <div className='Calculation'>
            <header>
                <Menu />
                <Progress progressBarValue1={1} progressBarValue2={1} />
            </header>
            <div className='Content'>
                <div className='HorizontalTop'>
                    {moduleList.map((component) => (
                        <md-list>
                            <md-list-item>
                                {component}
                            </md-list-item>
                        </md-list>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculation;
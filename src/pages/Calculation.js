import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';
import { moduleList, prizes } from '../components/Modules';

function Calculation() {

    return (
        <div className='Calculation'>
            <header>
                <Menu />
                <Progress progressBarValue1={1} progressBarValue2={1} />
            </header>
            <div className='Content'>
                <div className='Vertical'>
                    <h2>Auswahl anpassen</h2>
                    <h3>Je mehr Sie auswählen (mindestens 2), desto günstiger werden die einzelnen Komponenten.</h3>
                </div>
                <div className='HorizontalTop'>
                    {moduleList.map((component) => (
                        <md-list>
                            <md-list-item>
                                {component}
                            </md-list-item>
                        </md-list>
                    ))}
                </div>
                <div className='Horizontal'>
                    {prizes.map((prize) => (
                        <div className='Prize'>
                            <h3>{prize}</h3>
                        </div>
                    ))}
                </div>
                <div className='Horizontal'>
                    <md-filled-button id='Praemie'><h2>Prämie:</h2></md-filled-button>
                </div>
            </div>
        </div>
    );
}

export default Calculation;
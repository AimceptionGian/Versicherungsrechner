import '../styles/App.css';
import Menu from '../components/Menu';
import Progress from '../components/Progress';
import { ReactComponent as Security } from '../images/security.svg';
import { ReactComponent as Shopping } from '../images/shopping.svg';
import { ReactComponent as Mobbing } from '../images/mobbing.svg';
import { ReactComponent as CreditCard } from '../images/creditcard.svg';
import { useState } from 'react';

function Calculation() {
    const [checkedCount, setCheckedCount] = useState(0);

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedCount(checkedCount + 1);
        } else {
            setCheckedCount(checkedCount - 1);
        }
    };

    const prizes = [63.95, 65.94, 65.52, 35.70];

    const moduleList = [
        <div>
            <div className='Horizontal'>
                <Security />
                <h5>Datenrettung <br /> & IT-Assistance</h5>
                <md-checkbox onChange={handleCheckboxChange} />
            </div>
            <div className='Vertical'>
                <h6>
                    Mit diesem Modul erhalten Sie professionelle Unterstützung bei der Virenentfernung,
                    Wiederherstellung Ihrer Daten und bei technischen Defekten von Computern und Laptops.
                </h6>
            </div>
        </div>,
        <div>
            <div className='Horizontal'>
                <Shopping />
                <h5>Online-Shopping</h5>
                <md-checkbox onChange={handleCheckboxChange} />
            </div>
            <div className='Vertical'>
                <h6>
                    Dieses Modul schützt Sie gegen Nicht-, Falsch- oder mangelhafte Lieferung durch unseriöse
                    Onlineshops oder Betrüger im Onlinehandel.
                </h6>
            </div>
        </div>,
        <div>
            <div className='Horizontal'>
                <Mobbing />
                <h5>Online-Mobbing <br /> & Urheberrechte</h5>
                <md-checkbox onChange={handleCheckboxChange} />
            </div>
            <div className='Vertical'>
                <h6>
                    Dieses Modul schützt Sie gegen rufschädigende und persönlichkeitsverletzende Inhalte.
                </h6>
            </div>
        </div>,
        <div>
            <div className='Horizontal'>
                <CreditCard />
                <h5>Online-Konten <br /> & Kreditkarten</h5>
                <md-checkbox onChange={handleCheckboxChange} />
            </div>
            <div className='Vertical'>
                <h6>
                    Dieses Modul schützt Sie gegen Diebstahl und Missbrauch Ihrer Online-Konten, Identitätsdaten, Login-Daten und Kreditkarten.
                </h6>
            </div>
        </div>
    ];

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
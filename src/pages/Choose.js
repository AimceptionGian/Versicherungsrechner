import '../styles/App.css';
import Progress from '../components/Progress';
import Menu from '../components/Menu';
import Info from '../components/Info'
import { ReactComponent as Security } from '../images/security.svg';
import { ReactComponent as Shopping } from '../images/shopping.svg';
import { ReactComponent as Mobbing } from '../images/mobbing.svg';
import { ReactComponent as CreditCard } from '../images/creditcard.svg';
import { useState } from 'react';

const Choose = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    return (
        <div className='Choose'>
            <header>
                <Menu />
                <Progress />
            </header>
            <div className='Content'>
                <div className='HorizontalTop'>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave} className="ChooseItem">
                            <div className='Horizontal'>
                                <Security />
                                <h5>Datenrettung <br /> & IT-Assistance</h5>
                                <md-checkbox />
                            </div>
                            <div className='Vertical'>
                                <h6>
                                    Mit diesem Modul erhalten Sie professionelle Unterstützung bei der Virenentfernung,
                                    Wiederherstellung Ihrer Daten und bei technischen Defekten von Computern und Laptops.
                                </h6>
                            </div>
                        </md-list-item>
                    </md-list>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} className="ChooseItem">
                            <div className='Horizontal'>
                                <Shopping />
                                <h5>Online-Shopping</h5>
                                <md-checkbox />
                            </div>
                            <div className='Vertical'>
                                <h6>
                                    Dieses Modul schützt Sie gegen Nicht-, Falsch- oder mangelhafte Lieferung durch unseriöse
                                    Onlineshops oder Betrüger im Onlinehandel.
                                </h6>
                            </div>
                        </md-list-item>
                    </md-list>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} className="ChooseItem">
                            <div className='Horizontal'>
                                <Mobbing />
                                <h5>Online-Mobbing <br /> & Urheberrechte</h5>
                                <md-checkbox />
                            </div>
                            <div className='Vertical'>
                                <h6>
                                    Dieses Modul schützt Sie gegen rufschädigende und persönlichkeitsverletzende Inhalte.
                                </h6>
                            </div>
                        </md-list-item>
                    </md-list>
                    <md-list>
                        <md-list-item onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} className="ChooseItem">
                            <div className='Horizontal'>
                                <CreditCard />
                                <h5>Online-Konten <br /> & Kreditkarten</h5>
                                <md-checkbox />
                            </div>
                            <div className='Vertical'>
                                <h6>
                                    Dieses Modul schützt Sie gegen Diebstahl und Missbrauch Ihrer Online-Konten, Identitätsdaten, Login-Daten und Kreditkarten.
                                </h6>
                            </div>
                        </md-list-item>
                    </md-list>
                </div>
                <Info hoverIndex={hoverIndex} />
            </div>
        </div>
    );
}

export default Choose;
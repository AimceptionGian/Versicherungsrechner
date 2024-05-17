import '../styles/App.css';
import Progress from '../components/Progress';
import Menu from '../components/Menu';
import { ReactComponent as Security} from '../images/security.svg';
import { ReactComponent as Shopping} from '../images/shopping.svg';
import { ReactComponent as Mobbing} from '../images/mobbing.svg';
import { ReactComponent as CreditCard} from '../images/creditcard.svg';

function Choose() {
    return (
        <div className='Choose'>
            <body>
                <header>
                    <Menu />
                    <Progress />
                </header>
                
                <div className='Content'>
                    <div className='HorizontalTop'>
                        <md-list>
                            <md-list-item>
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
                            <md-list-item>
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
                            <md-list-item>
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
                            <md-list-item>
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
                </div>
            </body>
        </div>
    );
}

export default Choose;
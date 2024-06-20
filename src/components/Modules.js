import '../styles/App.css';
import { ReactComponent as Security } from '../images/security.svg';
import { ReactComponent as Shopping } from '../images/shopping.svg';
import { ReactComponent as Mobbing } from '../images/mobbing.svg';
import { ReactComponent as CreditCard } from '../images/creditcard.svg';

export const moduleList = [
        <div>
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
        </div>,
        <div>
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
        </div>,
        <div>
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
        </div>,
        <div>
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
        </div>
    ];

export const prizes = [63.95, 65.94, 65.52, 35.70];
import '../styles/App.css';
import { ReactComponent as Erklaerung} from '../images/erklaerung.svg';

function Info() {
    return(
        <div className='Info'>
            <h6>Leistungen:
Rechtsschutz: z. B. Durchsetzung von Ansprüchen bei einem Identitätsmissbrauch
Erstattung finanzieller Schäden: z. B. nach einem Kreditkartenmissbrauch
Online-Portal mit Cyber-Präventionsservices: z. B. Monitoring von Daten-Diebstählen</h6>
            <Erklaerung className='Erklaerung' />
        </div>
    );
}

export default Info;
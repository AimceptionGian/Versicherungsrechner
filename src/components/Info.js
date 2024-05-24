import '../styles/App.css';
import { ReactComponent as Erklaerung} from '../images/erklaerung.svg';

function Info() {
    return(
        <div className='Info'>
            <h6>Durch ein Datenleck bei einem Online-Shop wurden Millionen Kundenkonten einschliesslich E-Mail-Adressen gestohlen. Kriminelle haben mit den Accounts bereits Waren bestellt.

Unser Onlinedienst informiert Sie, dass Ihre E-Mail-Adresse von diesem Datendiebstahl betroffen ist, und empfiehlt, das Passwort zu ändern.
Unsere Anwältinnen und Anwälte unterstützen Sie bei der Durchsetzung ihrer Ansprüche gegenüber den Kriminellen sowie gegenüber dem Shop.
Zudem übernimmt die AXA allfällige Geldschäden, die am Ende noch bestehen.
Ihr Selbstbehalt bei finanziellen Schäden beträgt CHF 200, beim Rechtsschutz haben Sie keinen Selbstbehalt.</h6>
            <Erklaerung className='Erklaerung' />
        </div>
    );
}

export default Info;
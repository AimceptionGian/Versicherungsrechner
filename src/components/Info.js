import '../styles/App.css';
import { ReactComponent as Erklaerung} from '../images/erklaerung.svg';

const Info = ({hoverIndex}) => {
    const infoTexts = [
        <h6>
                Dieses Modul schützt Sie gegen Diebstahl und Missbrauch Ihrer Online-Konten, Identitätsdaten, Login-Daten und Kreditkarten.
                <br />
                <br />
                <b>Leistungen:</b>
                <ul>
                    <li>
                        Rechtsschutz: z. B. Durchsetzung von Ansprüchen bei einem Identitätsmissbrauch
                    </li>
                    <li>
                        Erstattung finanzieller Schäden: z. B. nach einem Kreditkartenmissbrauch
                    </li>
                    <li>
                        Online-Portal mit Cyber-Präventionsservices: z. B. Monitoring von Daten-Diebstählen
                    </li>
                </ul>
                <b>Beispiel:</b>
                <br />
                Durch ein Datenleck bei einem Online-Shop wurden Millionen Kundenkonten einschliesslich E-Mail-Adressen gestohlen.
                <br />
                Kriminelle haben mit den Accounts bereits Waren bestellt.
                <ul>
                    <li>
                        Unser Onlinedienst informiert Sie, dass Ihre E-Mail-Adresse von diesem Datendiebstahl betroffen ist, und empfiehlt, das Passwort zu ändern.
                    </li>
                    <li>
                        Unsere Anwältinnen und Anwälte unterstützen Sie bei der Durchsetzung ihrer Ansprüche gegenüber den Kriminellen sowie gegenüber dem Shop.
                    </li>
                    <li>
                        Zudem übernimmt die AXA allfällige Geldschäden, die am Ende noch bestehen.
                    </li>
                </ul>
                Ihr Selbstbehalt bei finanziellen Schäden beträgt CHF 200, beim Rechtsschutz haben Sie keinen Selbstbehalt.
                <br />
                <br />
                <b>Für wen eignet sich dieses Modul?</b>
                <br />
                Für alle, die Kreditkarten oder Online-Logins (z. B. bei E-Mail- oder Online-Diensten) nutzen.
        </h6>,
        <h6>
                Dieses Modul schützt Sie gegen Nicht-, Falsch- oder mangelhafte Lieferung durch unseriöse Onlineshops oder Betrüger im Onlinehandel.
                <br />
                <br />
                <b>Leistungen:</b>
                <ul>
                    <li>
                        Rechtsschutz: z. B. Durchsetzung von Ansprüchen gegenüber Online-Shops
                    </li>
                    <li>
                        Erstattung finanzieller Schäden: z. B. durch eine mangelhafte Lieferung
                    </li>
                    <li>
                        Online-Portal mit Cyber-Präventionsservices: z. B. Warnmeldungen vor unseriösen Online-Shops
                    </li>
                </ul>
                <b>Beispiel:</b>
                <br />
                Sie bestellen die neueste Spielkonsole, erhalten jedoch ein Vorgängermodell. Der Online-Shop verweigert den Umtausch und behauptet, die richtige Spielkonsole geliefert zu haben.
                <ul>
                    <li>
                        Der Onlinedienst setzt sich mit dem Shop in Verbindung, um das Problem zu lösen.
                    </li>
                    <li>
                        Die Shop reagiert nicht. Ab jetzt versucht die Rechtsschutzversicherung, Ihre Ansprüche durchzusetzen. Der Shop ist jedoch nicht mehr auffindbar – Sie wurden offensichtlich Opfer eines Fake-Shops.
                    </li>
                    <li>
                        Wir erstatten Ihnen die Kosten für die falsche Konsole.
                    </li>
                </ul>
                Ihr Selbstbehalt bei finanziellen Schäden beträgt CHF 200, beim Rechtsschutz müssen Sie keinen Selbstbehalt tragen.
                <br />
                <br />
                <b>Für wen eignet sich dieses Modul?</b>
                <br />
                Für alle, die im Internet einkaufen.
        </h6>,
        <h6>
                Dieses Modul schützt Sie gegen rufschädigende und persönlichkeitsverletzende Inhalte.
                <br />
                <br />
                <b>Leistungen:</b>
                <ul>
                    <li>
                        Rechtsschutz: Durchsetzung von Ansprüchen z. B. gegenüber Tätern
                    </li>
                    <li>
                        Online-Portal mit Cyber-Präventionsservices: z. B. Durchsuchen des Internets auf Mobbing-Kommentare und Abmahnung des Verfassers zur Löschung des Inhalts
                    </li>
                    <li>
                        Telefonische Betreuung durch anerkannte Notfallpsychologinnen und Notfallpsychologen im Falle eines Cyber-Mobbings
                    </li>
                </ul>
                <b>Beispiel:</b>
                <br />
                Sie werden auf Twitter / X gemobbt, und unter Ihre Beiträge werden verschiedene Hasskommentare geschrieben.
                <ul>
                    <li>
                        Unser Onlinedienst erkennt die verletzenden Kommentare und informiert Sie.
                    </li>
                    <li>
                        Sie entscheiden sich, gegen die Mobbing-Kommentare vorzugehen. Die AXA mahnt die Personen ab, die eine Beleidigung unter dem Post hinterlassen haben, und fordert sie auf, die Kommentare zu löschen.
                    </li>
                    <li>
                        Werden die Kommentare trotzdem nicht gelöscht, werden rechtliche Schritte gegen die Cybermobber eingeleitet.
                    </li>
                    <li>
                        Sie werden durch einen Notfallpsychologen betreut, der Ihnen hilft, das Geschehene zu verarbeiten.
                    </li>
                </ul>
                Sie müssen keinen Selbstbehalt tragen.
                <br />
                <br />
                <b>Für wen eignet sich dieses Modul?</b>
                <br />
                Insbesondere für Nutzer von sozialen Medien und Eltern von Teenagern.
        </h6>,
        <h6>
                Mit diesem Modul erhalten Sie professionelle Unterstützung bei der Virenentfernung, Wiederherstellung Ihrer Daten und bei technischen Defekten von Computern und Laptops.
                <br />
                <br />
                <b>Leistungen:</b>
                <ul>
                    <li>
                        Technischer Fach-Support bis CHF 3000 pro Fall
                    </li>
                    <li>
                        Es sind zwei Schadenfälle pro Jahr versichert
                    </li>
                </ul>
                <b>Beispiel:</b>
                <br />
                Ihr Computer wird durch einen Virus beschädigt, und alle wichtigen persönlichen Dokumente sowie Fotos sind gelöscht oder unbrauchbar.
                <ul>
                    <li>
                        Wir übernehmen die Kosten für eine Fachfirma, die den Virus entfernt und den Computer wieder funktionstüchtig macht.
                    </li>
                    <li>
                        Die verlorengegangenen Daten werden durch eine Fachfirma wiederhergestellt.
                    </li>
                </ul>
                Sie müssen keinen Selbstbehalt tragen.
                <br />
                <br />
                <b>Für wen eignet sich dieses Modul?</b>
                <br />
                Für alle, die wertvolle Daten (beispielsweise Ferienfotos oder Steuerdaten) auf einem Computer speichern.
        </h6>
    ];

    return(
        <div className={`Info ${hoverIndex === null ? '' : 'visible'}`}>
            {infoTexts.map((infoText, index) => (
                <div className={`InfoText ${hoverIndex === index ? 'visible' : ''}`}>
                    {infoText}
                </div>
            ))}
            <Erklaerung className='Erklaerung' />
        </div>
    );
}

export default Info;
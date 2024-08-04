'use client'
import City from "@/components/ui-kit/City";
import Lang from "@/components/ui-kit/Lang";
import { useMediaQuery } from "@/hooks/useMediaQuery";


export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__line">
          <a href="#" className="footer__link">&Uuml;ber uns</a>
          <a href="#" className="footer__link">Impressum</a>
          <a href="#" className="footer__link">Kontakt</a>
          <a href="#" className="footer__link">Sicherheit</a>
          <a href="#" className="footer__link">Karriere</a>
          <a href="#" className="footer__link">Magazin</a>
          <a href="#" className="footer__link">Premium Kundigen</a>
        </div>
        <div className="footer__line">
          <a href="#" className="footer__link">AGB</a>
          <a href="#" className="footer__link">Nutzungsbedingungen</a>
          <a href="#" className="footer__link">Datenschutzhinweise</a>
          <a href="#" className="footer__link">Cookie-Einstellungen verwalten</a>
          <a href="#" className="footer__link">Sitemap</a>
        </div>
      </div>
      {useMediaQuery(1080) && (
        <div className="footer__options">
          <Lang />
          <City />
        </div>
      )}
      <div className="container">

        <p>
          WillBetreut.at ist eine Online-Plattform, auf der Familien und Betreuer miteinander in&nbsp;Kontakt treten, Informationen austauschen und Absprachen treffen. Familien, die eine Betreuung suchen, k&ouml;nnen von Dienstleistungsanbietern kontaktiert werden und Profile einsehen. F&uuml;r die Kontaktaufnahme mit Anbietern ist ein kostenpflichtiges Abonnement erforderlich. Weder stellen wir direkt Betreuung zur Verf&uuml;gung, noch suchen wir pers&ouml;nlich bestimmte Betreuer aus und schlagen sie Betreuungssuchenden vor oder umgekehrt. Betreut.at &uuml;berpr&uuml;ft nicht die Identit&auml;t und pers&ouml;nlichen Angaben der Betreuer. Bitte<br /> informieren Sie sich in&nbsp;unserem <a href="#">Sicherheitsbereich</a> dar&uuml;ber, wie Sie dies selbst tun k&ouml;nnen.<br />
          Betreut.at ist eine Marke der Care.com Europe GmbH. &copy;&nbsp;2013-2024 Care.com Europe GmbHAlle Rechte vorbehalten.<br />
          Care.com Europe GmbH, Rotherstr.&nbsp;17, 10245 Berlin| Amtsgericht Berlin Charlottenburg, HRB 110588&nbsp;B&nbsp;| USt-Identifikationsnummer: DE258126229&nbsp;Gesch&auml;ftsf&uuml;hrer: Dirk Kasten
        </p>
      </div>
    </footer>
  )
}

"use client"
import styles from "./index.module.scss"
import Link from "next/link";

const Order = () => {
  return (
    <div className="container-fluid">
      <div className={styles.wrap}>
        <div className={styles.column}>
          <div className={styles.column__top}>
            <span>Allgemeine Daten</span>
            <Link href="#">Bearbeiten</Link>
          </div>
          <div className={styles.column__line}>
            <strong>Vorname*</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Name*</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Postleitzahl</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Stadt</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Geschlecht</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Geburtsdatum</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Telefon*</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Passwort</strong>
            <Link href="#" className={styles.bold__link}>Passwort ändern</Link>
          </div>
          <div className={styles.column__line}>
            <strong>Primäres Interesse</strong>
            <p>info</p>
          </div>

        </div>
        <div className={styles.column}>
          <div className={styles.column__top}>
            <span>Informationen zur Mitgliedschaft</span>
          </div>
          <div className={styles.column__line}>
            <strong>Telefonpasswort</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Mitglied seit</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Status</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Typ des Accounts</strong>
            <p>info</p>
          </div>
          <div className={styles.column__line}>
            <strong>Mitgliedschaft</strong>
            <p>
              <Link href="#">Premium-Mitglied werden</Link>
              <Link href="#" className={styles.green}>Konto deaktivieren</Link>
            </p>
          </div>


        </div>
        <div className={styles.column}>
          <div className={styles.column__top}>
            <span>Verifizierungen</span>
            <Link href="#">Bearbeiten</Link>
          </div>
          <div className={styles.column__line}>
            <strong>E-Mail</strong>
            <p>mail@mail.com</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.column__top}>
            <span>Ihre Privatsphäre-Einstellungen</span>
            <Link href="#">Bearbeiten</Link>
          </div>
          <div className={styles.column__item}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.55769 6.1601L1.2859 9.7529C1.13993 9.91339 0.962963 9.99179 0.755006 9.9881C0.546882 9.9846 0.369833 9.90269 0.22386 9.74238C0.0778872 9.58208 0.00490068 9.38589 0.00490068 9.15382C0.00490068 8.92176 0.0778872 8.72557 0.22386 8.56526L3.48583 4.98298L0.214285 1.41758C0.0681444 1.25728 -0.00324632 1.06109 0.000113244 0.829022C0.00330483 0.597139 0.0778872 0.401044 0.22386 0.240737C0.369833 0.0802461 0.548477 0 0.759794 0C0.97111 0 1.14976 0.0802461 1.29573 0.240737L4.55769 3.83353L7.80429 0.240737C7.95026 0.0802461 8.12723 0 8.33518 0C8.54331 0 8.72036 0.0802461 8.86633 0.240737C9.02272 0.412297 9.10091 0.611252 9.10091 0.8376C9.10091 1.06395 9.02272 1.25728 8.86633 1.41758L5.60436 4.98298L8.87591 8.57605C9.02205 8.73636 9.09512 8.9307 9.09512 9.15908C9.09512 9.38764 9.02205 9.58208 8.87591 9.74238C8.71969 9.91413 8.53852 10 8.33241 10C8.1263 10 7.95026 9.91413 7.80429 9.74238L4.55769 6.1601Z" fill="#888888" />
            </svg>
            <p>
              Ich möchte meine Jobchancen erhöhen, indem ich mein Profil auf vertrauenswürdigen Websites von Drittanbietern wie indeed.com teile. Weitere Informationen finden Sie in unserer <a href="#">Datenschutzerklärung</a>.
            </p>
          </div>
          <div className={styles.column__item}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.20628 5.32753L8.49776 0.319369C8.66218 0.163748 8.87145 0.0859375 9.12556 0.0859375C9.37967 0.0859375 9.58894 0.163748 9.75336 0.319369C9.91779 0.47499 10 0.673052 10 0.913557C10 1.15406 9.91779 1.35213 9.75336 1.50775L3.83408 7.1101C3.65471 7.27986 3.44544 7.36475 3.20628 7.36475C2.96711 7.36475 2.75785 7.27986 2.57848 7.1101L0.246637 4.90311C0.0822123 4.74749 0 4.54943 0 4.30892C0 4.06842 0.0822123 3.87035 0.246637 3.71473C0.411061 3.55911 0.620329 3.4813 0.874439 3.4813C1.12855 3.4813 1.33782 3.55911 1.50224 3.71473L3.20628 5.32753Z" fill="#045719" />
            </svg>
            <p>
              Ich möchte hilfreiche Informationen und personalisierte. Angebote erhalten.
            </p>
          </div>
          <div className={styles.column__item}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.20628 5.32753L8.49776 0.319369C8.66218 0.163748 8.87145 0.0859375 9.12556 0.0859375C9.37967 0.0859375 9.58894 0.163748 9.75336 0.319369C9.91779 0.47499 10 0.673052 10 0.913557C10 1.15406 9.91779 1.35213 9.75336 1.50775L3.83408 7.1101C3.65471 7.27986 3.44544 7.36475 3.20628 7.36475C2.96711 7.36475 2.75785 7.27986 2.57848 7.1101L0.246637 4.90311C0.0822123 4.74749 0 4.54943 0 4.30892C0 4.06842 0.0822123 3.87035 0.246637 3.71473C0.411061 3.55911 0.620329 3.4813 0.874439 3.4813C1.12855 3.4813 1.33782 3.55911 1.50224 3.71473L3.20628 5.32753Z" fill="#045719" />
            </svg>
            <p>
              Senden Sie mir den Betreut.at Newsletter für Partner-Angebote und Events.
            </p>
          </div>
          <div className={styles.column__item}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.20628 5.32753L8.49776 0.319369C8.66218 0.163748 8.87145 0.0859375 9.12556 0.0859375C9.37967 0.0859375 9.58894 0.163748 9.75336 0.319369C9.91779 0.47499 10 0.673052 10 0.913557C10 1.15406 9.91779 1.35213 9.75336 1.50775L3.83408 7.1101C3.65471 7.27986 3.44544 7.36475 3.20628 7.36475C2.96711 7.36475 2.75785 7.27986 2.57848 7.1101L0.246637 4.90311C0.0822123 4.74749 0 4.54943 0 4.30892C0 4.06842 0.0822123 3.87035 0.246637 3.71473C0.411061 3.55911 0.620329 3.4813 0.874439 3.4813C1.12855 3.4813 1.33782 3.55911 1.50224 3.71473L3.20628 5.32753Z" fill="#045719" />
            </svg>
            <p>
              Ich gestatte, dass mein Profil für Suchmaschinen zugänglich gemacht und sämtlichen Websitenbesuchern angezeigt wird, um meine Chancen zu erhöhen, Jobs zu finden.
            </p>
          </div>
          <div className={styles.column__item}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.20628 5.32753L8.49776 0.319369C8.66218 0.163748 8.87145 0.0859375 9.12556 0.0859375C9.37967 0.0859375 9.58894 0.163748 9.75336 0.319369C9.91779 0.47499 10 0.673052 10 0.913557C10 1.15406 9.91779 1.35213 9.75336 1.50775L3.83408 7.1101C3.65471 7.27986 3.44544 7.36475 3.20628 7.36475C2.96711 7.36475 2.75785 7.27986 2.57848 7.1101L0.246637 4.90311C0.0822123 4.74749 0 4.54943 0 4.30892C0 4.06842 0.0822123 3.87035 0.246637 3.71473C0.411061 3.55911 0.620329 3.4813 0.874439 3.4813C1.12855 3.4813 1.33782 3.55911 1.50224 3.71473L3.20628 5.32753Z" fill="#045719" />
            </svg>
            <p>
              Benachrichtigen Sie mich über neue Job-Anzeigen in meiner Nähe.
            </p>
          </div>
          <div className={styles.column__item}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.20628 5.32753L8.49776 0.319369C8.66218 0.163748 8.87145 0.0859375 9.12556 0.0859375C9.37967 0.0859375 9.58894 0.163748 9.75336 0.319369C9.91779 0.47499 10 0.673052 10 0.913557C10 1.15406 9.91779 1.35213 9.75336 1.50775L3.83408 7.1101C3.65471 7.27986 3.44544 7.36475 3.20628 7.36475C2.96711 7.36475 2.75785 7.27986 2.57848 7.1101L0.246637 4.90311C0.0822123 4.74749 0 4.54943 0 4.30892C0 4.06842 0.0822123 3.87035 0.246637 3.71473C0.411061 3.55911 0.620329 3.4813 0.874439 3.4813C1.12855 3.4813 1.33782 3.55911 1.50224 3.71473L3.20628 5.32753Z" fill="#045719" />
            </svg>
            <p>
              Um mehr Besucher auf meinem Profil zu bekommen, schalte ich es für Werbung frei. Ich stimme der Veröffentlichung meines Vornamens, Wohnorts, Fotos und meines Profils auf Webseiten Dritter zu. Alle Werbepartner finde ich in der Datenschutzerklärung.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Order;
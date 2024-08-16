"use client"
import React from "react"
import RadioButtons from "@/components/ui-kit/RadioButtons";
import styles from "./index.module.scss"
import { services } from "@/utils/constants";
import DropDown from "@/components/ui-kit/DropDown";
import MyInput from "@/components/ui-kit/MyInput";
import TextArea from "@/components/ui-kit/TextArea";

const Filter = () => {

  const accompanying = ["Häusliche Betreuung", "Körperpflege (z.B. waschen, anziehen)", "Ambulante Betreuung", "Häusliche Krankenpflege", "Haushaltsdienste", "Mobilitätshilfe", "Zubereitung von Mahlzeiten", "Transport", "Freizeitbegleitung", "Besorgungen / Einkäufe erledigen"]
  const benefits = ["Eigenes Fahrzeug", "Nichtraucher", "Kontaktlos", "Einverstanden mit Haustieren"]
  const features = ["Erste-Hilfe-Zertifikat", "Herz-Lungen-Wiederbelebung", "Erfahrung mit Behinderungen", "Sprachtherapie", "Physiotherapie", "Beschäftigungstherapie", "Ausgebildeter Krankenpfleger", "Führerschein / Lenkberechtigung", "Österreichischer Reisepass vorhanden"]

  const [additional, setAdditional] = React.useState([""])
  const [prof, setProf] = React.useState<string>()
  const [experience, setExperience] = React.useState<string>()
  const [selectedService, setSelectedService] = React.useState<string>()
  const [qualification, setQualification] = React.useState<string>()
  const [lang, setLang] = React.useState<string>()
  const [otherLang, setOtherLang] = React.useState<string>()
  const [opportunities, setOpportunities] = React.useState<string>()
  const [about, setAbout] = React.useState<string>()

  const isChecked = (item: string, state: string[]) => (state.includes(item) ? styles.checked : "")

  const handleClick = (item: string, state: string[],
    func: (value: React.SetStateAction<string[]>) => void) => {
    if (state.includes(item)) {
      func(state => {
        return state.filter(state => state !== item)
      })
    }
    else {
      func(state => [...state, item])
    }
  }

  return (
    <div className="container-fluid">
      <h4 className="page__title">Finden Sie Ihren perfekten Job!</h4>
      <span className="page__subtitle">
        Beschreiben Sie sich & Ihre Erfahrung
      </span>
      <div className={styles.wrap}>
        <div className={styles.item}>
          <span className={styles.title}>
            In welchem Bereich suchen Sie?*
          </span>
          <RadioButtons options={services} value={prof} onClick={setProf}
            grid={2} />
        </div>
        <div className={styles.item}>
          <span className={styles.title}>
            In welchem Bereich suchen Sie?*
          </span>
          <RadioButtons options={accompanying} value={selectedService} onClick={setSelectedService}
            grid={2} />
        </div>
        <div className={styles.item}>
          <span className={styles.title}>
            Über mich & meine Erfahrung:*
          </span>
          <DropDown options={["1", "2", "3", "4", "+5", "+10"]} onChange={setExperience}
            selected={experience || "Wie viel Erfahrung haben Sie?"} boxed mixed />
          <div className={styles.checkbox__wrap}>
            {benefits.map((item: string) => {
              return (
                <button
                  key={item}
                  className={isChecked(item, additional)}
                  onClick={() => { handleClick(item, additional, setAdditional) }}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>
            Über mich & meine Erfahrung:*
          </span>
          <div className={styles.price}>
            <div className={styles.price__input}>
              <MyInput mini />
            </div>
            <span>
              (Betreut empfiehlt einen Stundensatz von mindestens 7,00 €)
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Titel
          </h6>
          <div className={styles.textarea}>
            <TextArea placeholder="Bitte stellen Sie sich kurz vor (maximal 100 Zeichen):*" maxLength={100} />

          </div>
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Beschreibung Ihrer Person
          </h6>
          <div className={styles.textarea__last}>
            <TextArea placeholder="Bitte erzählen Sie mehr über sich und/oder Ihre Erfahrung als Seniorenbetreuer!" />

          </div>
          <div className={styles.agreement}>
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement" />
            <p>
              Ich möchte den Bewerbungsassistenten nutzen und dieses Profil automatisch an passende Job-Anzeigen verschicken.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Weitere Informationen über mich
          </h6>
          <div className={styles.select}>
            <div className={styles.select__item}>
              <DropDown options={["1", "2", "3", "4", "+5", "+10"]} onChange={setQualification}
                selected={qualification || "Höchster Bildungsabschluss"} boxed mixed />
            </div>
            <div className={styles.select__item}>
              <DropDown options={["1", "2", "3", "4", "+5", "+10"]} onChange={setLang}
                selected={lang || "Muttersprache"} boxed mixed />
            </div>
            <div className={styles.select__item}>
              <DropDown options={["1", "2", "3", "4", "+5", "+10"]} onChange={setOtherLang}
                selected={otherLang || "Andere Sprachen"} boxed mixed />
            </div>
          </div>
          <RadioButtons options={["Erweitertes Führungszeugnis liegt vor",
            "Erfahrung als Krankenpfleger", "Interessiert bei der Familie zu leben", "Interessiert außerhalb der Familie zu leben"
          ]} value={opportunities} onClick={setOpportunities} />
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Über mich & meine Erfahrung:*
          </h6>

          <RadioButtons options={features} value={about} onClick={setAbout} />
        </div>
        <button className={styles.save + " save"}>Speichern</button>
      </div>
    </div>
  )
}
export default Filter;
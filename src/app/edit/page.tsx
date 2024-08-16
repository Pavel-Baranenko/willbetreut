"use client"
import React from "react";
import styles from "./index.module.scss"
import MyInput from "@/components/ui-kit/MyInput";
import RadioButtons from "@/components/ui-kit/RadioButtons";
import DropDown from "@/components/ui-kit/DropDown";
import Tabs from "@/components/ui-kit/Tabs";
import TextArea from "@/components/ui-kit/TextArea";
import TimePicker from "@/components/ui-kit/TimePicker";
import DatePicker from "@/components/ui-kit/DatePicker";


const Edit = () => {

  const prof = ["Haushaltshilfe", "Gärtner", "Handwerker"]
  const services = ["Weitere Aufgaben (nicht gelistet)", "Fenster putzen", "Bodenpflege", "Bügeln", "Wäsche waschen"]
  const countOptions = ["1", "2", "3", "4", "+5"]
  const times = ["Regelmäßig", "Einmalig"]
  const workingHours = ["1", "2", "3", "4", "5", "6", "7", "8"]
  const workSchedule = ["Tag", "Woche", "Monat"]
  const requirements = ["Eigene Geräte", "Eigene Putzmittel", "Kontaktlos", "Strafregisterbescheinigung wünschenswert"]

  const [bathroom, setBathroom] = React.useState<string>()
  const [badroom, setBadroom] = React.useState<string>()
  const [selected, setSelected] = React.useState<string>()
  const [additional, setAdditional] = React.useState([""])
  const [reqSelected, setReqSelected] = React.useState([""])
  const [timetable, setTimetable] = React.useState(0)
  const [duration, setDuration] = React.useState<string>()
  const [schedule, setSchedule] = React.useState<string>()
  const [title, setTitle] = React.useState("")

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
      <h6 className="page__title">Job-Anzeige bearbeiten</h6>
      <span className="page__subtitle">
        Finden Sie mit einer persönlichen Job-Anzeige Ihren passenden Alltagshelfer.
      </span>
      <div className={styles.wrap}>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Wo leben Sie?*
          </h6>
          <MyInput boxed />
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Welche Art von Unterstützung suchen Sie?*
          </h6>
          <RadioButtons options={prof} onClick={setSelected} value={selected} grid={3} />
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Zusätzliche Services (optional):
          </h6>
          <div className={styles.checkbox__wrap}>
            {services.map((item: string) => {
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
          <h6 className={styles.title}>
            Über dein Zuhause:
          </h6>
          <div className={styles.grid}>
            <div className={styles.grid__item}>
              <DropDown options={countOptions} className="first" selected={bathroom || "Anzahl der Badezimmer"} onChange={setBathroom} boxed />
            </div>
            <div className={styles.grid__item}>
              <DropDown options={countOptions} selected={badroom || "Anzahl der Schlafzimmer"} onChange={setBadroom} boxed />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Wie häufig benötigen Sie Unterstützung?*
          </h6>
          <Tabs options={times} onClick={setTimetable} active={timetable} boxed />
        </div>
        <div className={styles.item}>
          <h6 className={styles.title}>
            Über dein Zuhause:
          </h6>
          <div className={styles.grid}>
            <div className={styles.grid__item}>
              <DropDown options={workingHours} selected={duration || "Anzahl der Arbeitsstunden"} onChange={setDuration} boxed postfix=" Stunden" />
            </div>
            <div className={styles.grid__item}>
              <DropDown options={workSchedule} selected={schedule || "pro Tag"} onChange={setSchedule} boxed prefix="pro " />
            </div>
          </div>
        </div>
        <div className={styles.item}>

          <TimePicker />
        </div>
        <div className={styles.item}>
          <DatePicker />
        </div>

        <div className={styles.item}>
          <h6 className={styles.title}>
            Anforderungen an die Haushaltshilfe:
          </h6>
          <div className={styles.checkbox__wrap}>
            {requirements.map((item: string) => {
              return (
                <button
                  key={item}
                  className={isChecked(item, reqSelected)}
                  onClick={() => { handleClick(item, reqSelected, setReqSelected) }}
                >
                  {item}
                </button>
              )
            })}
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
        </div>
        <button className={styles.save + " save"}>Speichern</button>
      </div>
    </div>

  )
}



export default Edit;
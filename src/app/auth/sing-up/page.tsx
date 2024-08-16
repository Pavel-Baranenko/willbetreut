"use client"
import React from "react";

import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import ChoiceItem from "@/components/ui-kit/ChoiceItem";

import styles from "../index.module.scss"
import Link from "next/link";
import { services } from "@/utils/constants";
import RadioButtons from "@/components/ui-kit/RadioButtons";
import CheckBoxes from "@/components/ui-kit/CheckBoxes";
import MyInput from "@/components/ui-kit/MyInput";
import DropDown from "@/components/ui-kit/DropDown";
import Tabs from "@/components/ui-kit/Tabs";
import TimePicker from "@/components/ui-kit/TimePicker";
import DatePicker from "@/components/ui-kit/DatePicker";


const SingUp = () => {

  const additionall = {
    "Haushaltshilfe": ["Bettwäsche wechseln", "Backofenreinigung", "Kühlschrankreinigung", "Umzugshilfe", "Einkäufe erledigen", "Gebäudereinigung", "Haussitting", "Dachbodenreinigung"],
    "Gärtner": ["item1", "item2", "item3", "item4", "item5", "item6"],
    "Handwerker": ["parameter1", "parameter2", "parameter3", "parameter4", "parameter5"]
  }

  const title = [
    "Hallo! Verraten Sie uns, wer Sie sind?",
    "Wie können wir Ihnen weiterhelfen?",
    "Nach welcher Art von Betreuung suchen Sie?",
    "Details",
    "Wie lautet Ihre Postleitzahl?",
    "Nur noch ein paar Angaben...",
    "Gut gemacht! Ihr Profil ist fast fertig",
    "Erzählen Sie uns, inwiefern Sie Hilfe im Haushalt benötigen",
    "Wann benötigen Sie Unterstützung?",
    "Haben Sie weitere Anforderungen, die Sie teilen möchten?",
    "Premium-Mitglied werden"
  ]
  const knowns = ["item1", "item2"]
  const bathroom = ["1", "2", "3", "4", "5", "+5"]
  const bedrooms = ["1", "2", "3", "4", "5", "+5"]
  const requirements = ["Eigene Geräte", "Eigene Putzmittel", "Kontaktlos"]
  const details = ["Haushaltshilfe", "Gärtner", "Handwerker"]
  const times = ["Regelmäßig", "Einmalig"]
  const workingHours = ["1", "2", "3", "4", "5", "6", "7", "8"]
  const workSchedule = ["Tag", "Woche", "Monat"]

  const [type, setType] = React.useState<string>()
  const [profession, setProfession] = React.useState<string>()
  const [stage, setStage] = React.useState<number>(10)
  const [weNeed, setWeNeed] = React.useState<string>()
  const [addictionalValue, setAddictionalValue] = React.useState([""])
  const [more, setMore] = React.useState(true)
  const [optional, setOptional] = React.useState<string>()
  const [count, setCount] = React.useState<string>()
  const [countBed, setCountBed] = React.useState<string>()
  const [reqSelected, setReqSelected] = React.useState([""])
  const [timetable, setTimetable] = React.useState(0)



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

    <div className="container">
      <div className={styles.auth}>
        <h6 className={styles.title}>{title[stage]}</h6>
        <div className={styles.box}>
          {stage == 0 && (
            <>
              <ChoiceItem label="Eine Privatperson" color="green" value="person"
                onClick={(value) => { setType(value); setStage(1) }}
                src="../img/icons/businessman.png" />

              <ChoiceItem label="Ein Unternehmen" color="beige" value="company" onClick={(value) => { setType(value); setStage(1) }} src="../img/icons/people.svg" />
            </>
          )}
          {stage == 1 && (
            <>

              <ChoiceItem label="Ich suche einen Alltagshelfer" color="green" value="employer"
                onClick={(value) => { setProfession(value); setStage(2) }} />

              <ChoiceItem label="Ich suche einen Job" color="beige" value="worker"
                onClick={(value) => { setProfession(value); setStage(2) }} />
            </>

          )}
          {stage == 2 && (
            <>
              {services.map((item: string, index: number) => {
                const color = (index: number) => index % 2 == 0 ? "green" : "beige"

                return (
                  <ChoiceItem label={item} color={color(index)} value={item} key={item}
                    onClick={(value) => { setProfession(value); setStage(3) }}
                    src={`../img/static/${item}.png`} />
                )
              })}
            </>

          )}
          {stage == 3 && (
            <>
              <div className={styles.wrapper}>
                <p className={styles.subtitle}>
                  Wer kann Ihnen am besten helfen?
                </p>
                <RadioButtons options={details} onClick={setWeNeed} value={weNeed} />

                <p className={styles.subtitle}>
                  Benötigen Sie zusätzliche Dienstleistungen (optional)?
                </p>

              </div>
              {(weNeed && more) &&
                <div className={styles.checkbox}>
                  {(additionall.Haushaltshilfe).map((item: string, index: number) => {
                    return (
                      <button
                        key={item}
                        className={isChecked(item, addictionalValue)}
                        onClick={() => { handleClick(item, addictionalValue, setAddictionalValue) }}
                      >
                        {item}
                      </button>
                    )
                  })}
                </div>
              }
              <button className={`${styles.more} + ${!more ? styles.reverce : ""}`} onClick={() => { setMore(!more) }}>
                <span>Weniger anzeigen</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" >
                  <path d="M7.25646 9.30771C7.32521 9.38035 7.40542 9.41667 7.49708 9.41667C7.58875 9.41667 7.6709 9.38035 7.74354 9.30771L9.48854 7.56292C9.59229 7.45903 9.61729 7.33708 9.56354 7.19708C9.50965 7.05708 9.40729 6.98708 9.25646 6.98708H5.73604C5.58937 6.98708 5.48931 7.05708 5.43583 7.19708C5.3825 7.33708 5.40771 7.45903 5.51146 7.56292L7.25646 9.30771ZM7.50271 15C6.46562 15 5.49056 14.8032 4.5775 14.4096C3.66458 14.016 2.87042 13.4818 2.195 12.8071C1.51958 12.1324 0.98493 11.3389 0.591042 10.4267C0.197014 9.51458 0 8.53993 0 7.50271C0 6.46562 0.196805 5.49056 0.590417 4.5775C0.984028 3.66458 1.51819 2.87042 2.19292 2.195C2.86764 1.51958 3.66111 0.98493 4.57333 0.591042C5.48542 0.197014 6.46007 0 7.49729 0C8.53438 0 9.50945 0.196806 10.4225 0.590417C11.3354 0.984028 12.1296 1.51819 12.805 2.19292C13.4804 2.86764 14.0151 3.66111 14.409 4.57333C14.803 5.48542 15 6.46007 15 7.49729C15 8.53438 14.8032 9.50944 14.4096 10.4225C14.016 11.3354 13.4818 12.1296 12.8071 12.805C12.1324 13.4804 11.3389 14.0151 10.4267 14.409C9.51458 14.803 8.53993 15 7.50271 15ZM7.5 14.1667C9.36111 14.1667 10.9375 13.5208 12.2292 12.2292C13.5208 10.9375 14.1667 9.36111 14.1667 7.5C14.1667 5.63889 13.5208 4.0625 12.2292 2.77083C10.9375 1.47917 9.36111 0.833333 7.5 0.833333C5.63889 0.833333 4.0625 1.47917 2.77083 2.77083C1.47917 4.0625 0.833333 5.63889 0.833333 7.5C0.833333 9.36111 1.47917 10.9375 2.77083 12.2292C4.0625 13.5208 5.63889 14.1667 7.5 14.1667Z" fill="#045719" />
                </svg>
              </button>
              <button className={styles.next} onClick={() => { setStage(4) }}>Weiter</button>
            </>
          )}
          {stage == 4 && (
            <>
              <MyInput placeholder="Ihre Postleitzahl" />
              <p className={styles.descr__text}>
                Wir verwenden Ihre Postleitzahl, um Betreuer in Ihrer Nähe zu finden. Sie wird auch in Ihren Stellenausschreibungen angezeigt, um Alltagshelfern Orientierung bei der Jobsuche zu geben.
              </p>
              <button className={styles.next} onClick={() => { setStage(5) }}>Weiter</button>

            </>
          )}
          {stage == 5 && (
            <div className="">
              <MyInput placeholder="E-Mail-Adresse" type="email" />
              <MyInput placeholder="Passwort" type="password" />
              <div className={styles.agreement}>
                <input type="checkbox" id="agreement" />
                <label htmlFor="agreement" />
                <p>
                  Ich bin damit einverstanden, dass Betreut.at mir Neuigkeiten zum Service und Angebote zusendet. Abmeldung jederzeit möglich. Mehr Informationen in unseren <a href="#">Datenschutzhinweisen</a>.
                </p>
              </div>
              <button className={styles.next} onClick={() => { setStage(6) }}>Weiter</button>

            </div>
          )}
          {stage == 6 && (
            <div className={styles.inner}>
              <MyInput placeholder="Vorname" type="text" />
              <MyInput placeholder="Nachname" type="text" />
              <div className={styles.optional}>
                <p>
                  Wie haben Sie von uns erfahren?
                </p>
                <DropDown options={knowns} selected={optional || "optionale Angabe"}
                  onChange={(selected) => setOptional(selected)} />
              </div>
              <p className={styles.bottom__text}>
                Mit Ihrer Anmeldung stimmen Sie den AGB und Datenschutzrichtlinien von Betreut.at zu. Sie können der werblichen Nutzung Ihrer Daten jederzeit <a href="#">widersprechen</a>.
              </p>
              <button className={styles.next} onClick={() => { setStage(7) }}>Weiter</button>

            </div>
          )}
          {stage == 7 && (
            <div className={styles.inner}>
              <p className={styles.subtext}>
                Dein Zuhause
              </p>
              <DropDown className="first" options={bathroom} selected={count || "Anzahl der Badezimmer"}
                onChange={(selected) => setCount(selected)} />
              <DropDown options={bedrooms} selected={countBed || "Anzahl der Schlafzimmer"}
                onChange={(selected) => setCountBed(selected)} />
              <div className={styles.bottom__box}>
                <p className={styles.subtext}>
                  Anforderungen an die Haushaltshilfe:
                </p>
                <div className={styles.checkbox__wrap}>
                  {(requirements).map((item: string) => {
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

              <button className={styles.next} onClick={() => { setStage(8) }}>Weiter</button>

            </div>
          )}
          {stage == 8 && (
            <div className={styles.inner}>
              <Tabs options={times} onClick={setTimetable} active={timetable} boxed auth />
              <div className={styles.title__opt}>
                Dein Zuhause
              </div>
              <DropDown className="first" options={workingHours} selected={count || "Anzahl der Badezimmer"} postfix=" Stunden"
                onChange={(selected) => setCount(selected)} />
              <DropDown options={workSchedule} selected={countBed || "Anzahl der Schlafzimmer"}
                onChange={(selected) => setCountBed(selected)} prefix="pro " />
              <div className={styles.time}>
                <TimePicker auth />
                <div className={styles.time__bottom}>
                  <DatePicker auth />
                </div>
              </div>

              <button className={styles.next} onClick={() => { setStage(9) }}>Weiter</button>

            </div>
          )}
          {stage == 9 && (
            <div className={styles.demands}>
              <span className={styles.demands__title}>Zusammenfassung:*</span>
              <MyInput />
              <div className={styles.demands__text}>
                <span className={styles.demands__title}>Beschreibung:*:*</span>
                <textarea />
                <div className={styles.agreement}>
                  <input type="checkbox" id="agreement" />
                  <label htmlFor="agreement" />
                  <p>
                    Ich möchte meine Chancen, einen Alltagshelfer zu finden, erhöhen: Dazu werden meine Anzeigen in Suchmaschinen (z.B. Google, Bing) und auf anderen Seiten (z.B. indeed.com, siehe auch unsere Datenschutzerklärung) angezeigt.
                  </p>
                </div>
              </div>
              <button className={styles.next} onClick={() => { setStage(10) }}>Weiter</button>

            </div>
          )}
          {stage == 10 && (
            <div className={styles.premium}>
              <ul className={styles.premium__list}>
                <li>Jeden Alltagshelfer direkt kontaktieren</li>
                <li>Freischaltung aller Nachrichten</li>
                <li>Bewerbungen von idealen Kandidaten</li>
              </ul>
              <div className={styles.premium__box}>
                <div className={styles.premium__item + " green-bg"}>
                  <div className={styles.premium__info}>
                    <span>1 Monat</span>
                    <p>€ 35,00</p>
                  </div>

                  <Link href="#" className={styles.premium__link}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.94626 6.00001L0.873012 1.92701C0.734678 1.78851 0.663845 1.61443 0.660512 1.40476C0.657345 1.19526 0.728178 1.01801 0.873012 0.873012C1.01801 0.728178 1.19368 0.655762 1.40001 0.655762C1.60634 0.655762 1.78201 0.728178 1.92701 0.873012L6.42126 5.36726C6.51476 5.46093 6.58076 5.55968 6.61926 5.66351C6.65776 5.76735 6.67701 5.87951 6.67701 6.00001C6.67701 6.12051 6.65776 6.23268 6.61926 6.33651C6.58076 6.44035 6.51476 6.5391 6.42126 6.63276L1.92701 11.127C1.78851 11.2653 1.61443 11.3362 1.40476 11.3395C1.19526 11.3427 1.01801 11.2718 0.873012 11.127C0.728178 10.982 0.655762 10.8063 0.655762 10.6C0.655762 10.3937 0.728178 10.218 0.873012 10.073L4.94626 6.00001Z" fill="#1C1B1F" />
                    </svg>
                  </Link>
                </div>
                <div className={styles.premium__item + " beige-bg"}>
                  <div className={styles.premium__info}>
                    <span>3 Monate</span>
                    <p>€ 70,00</p>
                  </div>

                  <Link href="#" className={styles.premium__link}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.94626 6.00001L0.873012 1.92701C0.734678 1.78851 0.663845 1.61443 0.660512 1.40476C0.657345 1.19526 0.728178 1.01801 0.873012 0.873012C1.01801 0.728178 1.19368 0.655762 1.40001 0.655762C1.60634 0.655762 1.78201 0.728178 1.92701 0.873012L6.42126 5.36726C6.51476 5.46093 6.58076 5.55968 6.61926 5.66351C6.65776 5.76735 6.67701 5.87951 6.67701 6.00001C6.67701 6.12051 6.65776 6.23268 6.61926 6.33651C6.58076 6.44035 6.51476 6.5391 6.42126 6.63276L1.92701 11.127C1.78851 11.2653 1.61443 11.3362 1.40476 11.3395C1.19526 11.3427 1.01801 11.2718 0.873012 11.127C0.728178 10.982 0.655762 10.8063 0.655762 10.6C0.655762 10.3937 0.728178 10.218 0.873012 10.073L4.94626 6.00001Z" fill="#1C1B1F" />
                    </svg>
                  </Link>
                </div>
                <div className={styles.premium__item + " green-bg"}>
                  <div className={styles.premium__info}>
                    <span>12 Monate</span>
                    <p>€ 140,00</p>
                  </div>

                  <Link href="#" className={styles.premium__link}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.94626 6.00001L0.873012 1.92701C0.734678 1.78851 0.663845 1.61443 0.660512 1.40476C0.657345 1.19526 0.728178 1.01801 0.873012 0.873012C1.01801 0.728178 1.19368 0.655762 1.40001 0.655762C1.60634 0.655762 1.78201 0.728178 1.92701 0.873012L6.42126 5.36726C6.51476 5.46093 6.58076 5.55968 6.61926 5.66351C6.65776 5.76735 6.67701 5.87951 6.67701 6.00001C6.67701 6.12051 6.65776 6.23268 6.61926 6.33651C6.58076 6.44035 6.51476 6.5391 6.42126 6.63276L1.92701 11.127C1.78851 11.2653 1.61443 11.3362 1.40476 11.3395C1.19526 11.3427 1.01801 11.2718 0.873012 11.127C0.728178 10.982 0.655762 10.8063 0.655762 10.6C0.655762 10.3937 0.728178 10.218 0.873012 10.073L4.94626 6.00001Z" fill="#1C1B1F" />
                    </svg>
                  </Link>
                </div>
              </div>
              <Link href="#" className={styles.premium__started}>
                oder mit Basis-Mitgliedschaft starten
              </Link>
              <div className={styles.premium__code}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <mask id="mask0_252_10349" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                    <rect width="18" height="18" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_252_10349)">
                    <path d="M3 12.5913V14.0192C3 14.0769 3.02406 14.1298 3.07219 14.1778C3.12019 14.2259 3.17306 14.25 3.23081 14.25H14.7692C14.8269 14.25 14.8798 14.2259 14.9278 14.1778C14.9759 14.1298 15 14.0769 15 14.0192V12.5913H3ZM3.23081 4.8894H5.30625C5.24375 4.7769 5.19713 4.65815 5.16638 4.53315C5.13563 4.40815 5.12025 4.2769 5.12025 4.1394C5.12025 3.6154 5.30175 3.1719 5.66475 2.8089C6.02775 2.4459 6.47125 2.2644 6.99525 2.2644C7.30962 2.2644 7.60044 2.34609 7.86769 2.50947C8.13494 2.67284 8.36813 2.87578 8.56725 3.11828L8.98556 3.67797L9.40388 3.11828C9.59525 2.8664 9.82687 2.66109 10.0987 2.50234C10.3707 2.34372 10.6637 2.2644 10.9776 2.2644C11.5006 2.2644 11.9435 2.4459 12.3064 2.8089C12.6694 3.1719 12.8509 3.6154 12.8509 4.1394C12.8509 4.2769 12.8367 4.40815 12.8083 4.53315C12.7799 4.65815 12.7321 4.7769 12.6649 4.8894H14.7692C15.1481 4.8894 15.4688 5.02065 15.7313 5.28315C15.9938 5.54565 16.125 5.86634 16.125 6.24522V14.0192C16.125 14.398 15.9938 14.7187 15.7313 14.9812C15.4688 15.2437 15.1481 15.375 14.7692 15.375H3.23081C2.85194 15.375 2.53125 15.2437 2.26875 14.9812C2.00625 14.7187 1.875 14.398 1.875 14.0192V6.24522C1.875 5.86634 2.00625 5.54565 2.26875 5.28315C2.53125 5.02065 2.85194 4.8894 3.23081 4.8894ZM3 10.6586H15V6.24522C15 6.18747 14.9759 6.13459 14.9278 6.08659C14.8798 6.03847 14.8269 6.0144 14.7692 6.0144H10.6701L11.8673 7.66009C11.9586 7.79184 11.9954 7.93053 11.9777 8.07615C11.9598 8.22178 11.885 8.34028 11.7533 8.43165C11.6216 8.52303 11.4829 8.5579 11.3372 8.53628C11.1916 8.51465 11.0731 8.44178 10.9817 8.31765L8.98556 5.60772L6.98944 8.31765C6.89806 8.44178 6.77956 8.51465 6.63394 8.53628C6.48831 8.5579 6.34963 8.52303 6.21788 8.43165C6.08612 8.34028 6.00944 8.22178 5.98781 8.07615C5.96619 7.93053 6.001 7.79184 6.09225 7.66009L7.278 6.0144H3.23081C3.17306 6.0144 3.12019 6.03847 3.07219 6.08659C3.02406 6.13459 3 6.18747 3 6.24522V10.6586ZM6.99525 4.8894C7.20775 4.8894 7.38587 4.81753 7.52962 4.67378C7.67337 4.53003 7.74525 4.3519 7.74525 4.1394C7.74525 3.9269 7.67337 3.74878 7.52962 3.60503C7.38587 3.46128 7.20775 3.3894 6.99525 3.3894C6.78275 3.3894 6.60462 3.46128 6.46087 3.60503C6.31712 3.74878 6.24525 3.9269 6.24525 4.1394C6.24525 4.3519 6.31712 4.53003 6.46087 4.67378C6.60462 4.81753 6.78275 4.8894 6.99525 4.8894ZM10.9759 4.8894C11.1884 4.8894 11.3665 4.81753 11.5103 4.67378C11.654 4.53003 11.7259 4.3519 11.7259 4.1394C11.7259 3.9269 11.654 3.74878 11.5103 3.60503C11.3665 3.46128 11.1884 3.3894 10.9759 3.3894C10.7634 3.3894 10.5852 3.46128 10.4415 3.60503C10.2977 3.74878 10.2259 3.9269 10.2259 4.1394C10.2259 4.3519 10.2977 4.53003 10.4415 4.67378C10.5852 4.81753 10.7634 4.8894 10.9759 4.8894Z" fill="#FEAC08" />
                  </g>
                </svg>
                <span>
                  Gutschein-Code
                </span>
              </div>
            </div>
          )}

          {/* <button onClick={() => { alert(type) }}>sacvms</button> */}
        </div>
        {stage < 7 &&
          <div className={styles.bottom}>
            Bereits registriert? <Link href="#">Jetzt einloggen</Link>
          </div>
        }

      </div>
    </div >


  )
}

export default SingUp;
"use client"
import React from "react";
import styles from "./index.module.scss"

interface TimePickerProps {
  auth?: boolean
}
export default function TimePicker({ auth }: TimePickerProps) {

  const times = ["Vormittags", "Nachmittags", "Abends", "Nachts"]
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
  // const
  const [options, setOptions] = React.useState({
    Vormittags: { Mo: false, Di: false, Mi: false, Do: false, Fr: false, Sa: false, So: false },
    Nachmittags: { Mo: false, Di: false, Mi: false, Do: false, Fr: false, Sa: false, So: false },
    Abends: { Mo: false, Di: false, Mi: false, Do: false, Fr: false, Sa: false, So: false },
    Nachts: { Mo: false, Di: false, Mi: false, Do: false, Fr: false, Sa: false, So: false },
  })

  const handleSelect = (time: string, day: string) => {


  }

  return (
    <div className={styles.wrap + (auth ? " " + styles.auth : "")} >
      <div className={styles.top}>
        <div className={styles.right}>
          {days.map((item: string) => {
            return (
              <span key={item}>{item}</span>
            )
          })}
        </div>
      </div>
      <div className={styles.body}>
        {times.map((item: string) => {
          return (
            <div className={styles.item} key={item}>
              <div className={styles.left}>{item}</div>
              <div className={styles.right}>
                {days.map((str: string) => {
                  return (
                    <div className={styles.inner} key={str}>
                      <input type="checkbox" id={item + "-" + str} onSelect={() => { handleSelect(item, str) }} />
                      <label htmlFor={item + "-" + str} />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

import styles from "./index.module.scss"


interface DatePickerProps {
  auth?: boolean
}
export default function DatePicker({ auth }: DatePickerProps) {


  return (
    <div className={styles.wrap + (auth ? " " + styles.auth : "")} >
      <span>Ich suche ab:</span>
      <div className={styles.date}>
        <input type="date" />
      </div>
    </div>
  )
}

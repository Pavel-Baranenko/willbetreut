import styles from "./index.module.scss"

interface TextAreaProps {
  value?: string,
  placeholder?: string,
  onChange?: (e: any) => void,
  boxed?: boolean,
  width?: number,
  maxLength?: number
}



export default function TextArea({ value, placeholder, onChange, boxed, maxLength }: TextAreaProps) {


  return (
    <div className={styles.wrap + (boxed ? (" " + styles.boxed) : "")} >
      <textarea placeholder={placeholder} value={value} onChange={onChange} maxLength={maxLength} />
    </div>
  )
}

import styles from "./index.module.scss"

interface MyInputProps {
  value?: string,
  type?: string,
  placeholder?: string,
  onChange?: (e: any) => void,
  boxed?: boolean,
  width?: number,
  mini?: boolean
}


export default function MyInput({ value, type, placeholder, onChange, boxed, mini }: MyInputProps) {

  return (
    <>
      {mini ? (
        <div className={styles.wrap + " " + styles.mini} >
          <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
      ) :
        (
          <div className={styles.wrap + (boxed ? (" " + styles.boxed) : "")} >
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
          </div>
        )
      }
    </>

  )
}
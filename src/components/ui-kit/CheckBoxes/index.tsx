import styles from "./index.module.scss"


interface CheckBoxesProps {
  options: string[];
  onClick: (e: string[]) => void;
  value?: string[]
}

export default function CheckBoxes({ options, value, onClick }: CheckBoxesProps) {

  return (
    <div className={styles.wrap}>
      <div className={styles.buttons}>
        {options.map((item: string, index: number) => {
          return (
            <button key={item} className={(item === (value ? value[index] : "")) ? styles.active : ""}
              onClick={() => { onClick }}>{item}</button>
          )
        })}
      </div>
    </div>


  )
}



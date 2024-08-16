import styles from "./index.module.scss"


interface RadioButtonsProps {
  options: string[];
  onClick: (e: string) => void;
  value: string | undefined,
  grid?: 2 | 3
}

export default function RadioButtons({ options, value, onClick, grid }: RadioButtonsProps) {

  return (
    <div className={styles.wrap
    }>
      <div className={styles.buttons + (grid ? (grid == 2 ? (" " + styles.grid) : (" " + styles.box)) : "")}>
        {options.map((item: string) => {
          return (
            <button key={item} className={(item === value) ? styles.active : ""}
              onClick={() => { onClick(item) }}>{item}</button>
          )
        })}
      </div>
    </div >


  )
}



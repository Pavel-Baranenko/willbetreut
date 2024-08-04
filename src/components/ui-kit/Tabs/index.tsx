import styles from "./index.module.scss"

interface TabsProps {
  options: string[];
  onClick: (e: number) => void;
  active: number
}

export default function Tabs({ options, onClick, active }: TabsProps) {

  return (
    <div className={styles.wrap}>
      <div className={styles.buttons}>
        {options.map((item: string, index: number) => {
          return (
            <button key={item} className={(index === active) ? "green-dark-bg active" : ""}
              onClick={() => { onClick(index) }}>{item}</button>
          )
        })}
      </div>
    </div>


  )
}

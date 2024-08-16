import styles from "./index.module.scss"

interface TabsProps {
  options: string[];
  onClick: (e: any) => void;
  active: number | string,
  boxed?: boolean,
  auth?: boolean,
  inlineButton?: boolean
}

export default function Tabs({ options, onClick, active, boxed, auth, inlineButton }: TabsProps) {

  return (
    <>
      {inlineButton ?

        <>
          <div className={styles.wrap + " " + styles.inlineButton} >
            <div className={styles.buttons}>
              {options.map((item: string) => {
                return (
                  <button key={item} className={(item === active) ? styles.inlineButton__active : ""}
                    onClick={() => { onClick(item) }}>{item}</button>
                )
              })}
            </div>
          </div >

        </>
        :
        <>
          {auth ?
            <div className={styles.wrap + " " + styles.auth} >
              <div className={styles.buttons}>
                {options.map((item: string, index: number) => {
                  return (
                    <button key={item} className={(index === active) ? "green-dark-bg active" : ""}
                      onClick={() => { onClick(index) }}>{item}</button>
                  )
                })}
              </div>
            </div >

            :
            <div className={styles.wrap + (boxed ? " " + styles.boxed : "")} >
              <div className={styles.buttons}>
                {options.map((item: string, index: number) => {
                  return (
                    <button key={item} className={(index === active) ? "green-dark-bg active" : ""}
                      onClick={() => { onClick(index) }}>{item}</button>
                  )
                })}
              </div>
            </div >
          }
        </>
      }


    </>


  )
}

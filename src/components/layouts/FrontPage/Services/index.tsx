'use client'
import React from 'react'
import styles from "./index.module.scss"
import Tabs from '@/components/ui-kit/Tabs'
import { cities, services } from '@/utils/constants'


export default function Services() {

  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <section className={`green-bg ${styles.services}`}>
      <h6 className={styles.title}>
        Finden Sie Alltagshelfer vor Ort
      </h6>
      <div className={styles.buttons}>
        <Tabs options={services} onClick={setActiveIndex} active={activeIndex} />

      </div>
      <div className={styles.tabs}>
        <div className={styles.tab}>
          {cities.map((item: string) => {
            return (
              <a href="#" className={styles.tab__link} key={item}>
                <img src="./img/icons/arrow_warm_up.svg"
                  alt={`Link to ${services[activeIndex] + item}`}
                />
                <span>{services[activeIndex] + " " + item}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"
import React from 'react'
import styles from "./index.module.scss"
import { cities } from '@/utils/constants'
import { motion, AnimatePresence } from "framer-motion";

export default function City() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(cities[8])

  return (
    <div className={styles.wrap}>
      <button className={styles.selected} onClick={() => { setIsOpen(!isOpen) }}>
        <div className={styles.img__inner} >
          <img src="./img/icons/city.png" alt="City.png" />
        </div>
        <span>{selected}</span>

        <svg width="9" height="5" viewBox="0 0 9 5" className={isOpen ? styles.reverce : ""}>
          <path d="M4.44967 5.00892C4.34925 5.00892 4.25578 4.99288 4.16925 4.96079C4.08272 4.92871 4.00043 4.87371 3.92238 4.79579L0.177168 1.05059C0.0618903 0.93517 0.00286247 0.7901 8.46941e-05 0.615378C-0.0025542 0.440795 0.0564736 0.293086 0.177168 0.172253C0.298001 0.0515582 0.44439 -0.00878906 0.616334 -0.00878906C0.788279 -0.00878906 0.934668 0.0515582 1.0555 0.172253L4.44967 3.56663L7.84383 0.172253C7.95925 0.0569749 8.10432 -0.0020529 8.27904 -0.00483068C8.45363 -0.00746957 8.60134 0.0515582 8.72217 0.172253C8.84286 0.293086 8.90321 0.439475 8.90321 0.61142C8.90321 0.783364 8.84286 0.929753 8.72217 1.05059L4.97696 4.79579C4.8989 4.87371 4.81661 4.92871 4.73008 4.96079C4.64356 4.99288 4.55008 5.00892 4.44967 5.00892Z" fill="#1C1B1F" />
        </svg>

      </button>
      <div className={styles.list}>
        <div className={styles.list__wrap}>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key='content'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                className={styles.list__inner}
                style={{ overflow: 'hidden' }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {cities.map((item: string) => {
                  if (item != selected) return (
                    <button key={item}
                      className={styles.list__item}
                      onClick={() => { setSelected(item); setIsOpen(false) }}
                    >{item}</button>
                  )
                })}
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </div>
  )
}

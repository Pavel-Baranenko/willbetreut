import React from 'react'
import styles from "./index.module.scss"

interface ChoiceItem {
  src?: string,
  label: string,
  color: string,
  value: string,
  onClick: (e: string) => void
}

export default function ChoiceItem({ src, label, color, value, onClick }: ChoiceItem) {


  return (
    <div className={styles.wrap} onClick={() => { onClick(value) }}>
      {src && (
        <div className={`${color}-bg  ${styles.icon}`}>
          <img src={src} alt="" />
        </div>
      )}
      <div className={`${color}-bg  ${styles.content}`}>
        <span className={src ? styles.left : ""}>{label}</span>
      </div>
    </div>
  )
}

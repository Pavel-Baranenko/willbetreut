"use client"
import Image from "next/image";
import styles from "./index.module.scss"
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React from "react"
import Tabs from "@/components/ui-kit/Tabs";

const options = ["Activ", "Archiv", "Geblockt"]

const Order = () => {
  const [activeTab, setActiveTab] = React.useState(options[0])
  return (
    <div className="container-fluid">
      <div className={styles.wrap}>
        <div className={styles.upper}>
          <Tabs options={options} active={activeTab} onClick={setActiveTab} inlineButton />

        </div>
        <div className={styles.panels}>
          {activeTab == "Activ" &&
            <div className={styles.box}>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
            </div>
          }
          {activeTab == "Archiv" &&
            <div className={styles.box}>
              <div className={styles.item}>
                <Image src={"/img/static/avatar.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/avatar.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/avatar.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/avatar.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/avatar.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>


                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>

                    <span className={styles.time}>09:56</span>

                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
            </div>
          }
          {activeTab == "Geblockt" &&
            <div className={styles.box}>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <Image src={"/img/static/user.png"} alt="User avatar" width={60} height={60} />
                <div className={styles.info}>
                  <div className={styles.top}>
                    <span className={styles.name}>Evelyn Theil</span>
                    <span className={styles.time}>09:56</span>
                    <button className={styles.menu}>
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="black" />
                      </svg>
                    </button>

                  </div>
                  <p className={styles.heading}>
                    Unterstützung für den Haushalt benötigt
                  </p>
                  <p className={styles.text}>
                    Danke sehr. Hat sich erledigt. Danke sehr. Hat sich erledigt.Danke sehr. Hat sich...
                  </p>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    </div >
  )
}
export default Order;
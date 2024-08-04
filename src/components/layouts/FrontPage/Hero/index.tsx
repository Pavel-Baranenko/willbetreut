"use client"
import React from 'react'
import styles from "./index.module.scss"
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from '@/hooks/useMediaQuery';


export default function Hero() {

  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          <span>
            Finden Sie den <span className='green-text'>perfekten K&uuml;nstler</span> f&uuml;r Ihre Aufgaben
          </span>
        </h1>

        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.comlete}>
              <strong>245 640</strong> erledigte Aufgaben
            </span>
            <div className={styles.search}>
              {!useMediaQuery(1080) &&
                <img src="./img/icons/search.svg" className={styles.search__img} />
              }
              <input type="text" placeholder='Postleitzahl eingeben' />
              <button className={`green-btn ${styles.btn}`}>
                {useMediaQuery(1080) ? (
                  <img src="./img/icons/data_loss_prevention.svg" alt="" />
                ) : 'Finden'}
              </button>
            </div>
            <div className={styles.reg}>
              <span>Auf Jobsuche? <Link href="#">Los geht&rsquo;s</Link></span>
              <object data="./img/icons/blue-arrow.svg" />
            </div>
          </div>
          <div className={styles.images}>
            <Image
              src="/img/static/hero-man.png"
              alt="Ein männlicher Maler"
              width={useMediaQuery(1080) ? 70 : 151}
              // width={151}
              height={useMediaQuery(1080) ? 145 : 310}
            // height={310}
            />
            <Image
              src="/img/static/hero-woman.png"
              alt="Hausmeisterin"
              width={useMediaQuery(1080) ? 75 : 161}
              // width={161}
              height={useMediaQuery(1080) ? 134 : 288}
            // height={288}
            />
          </div>
        </div>
        <div className={styles.items}>

          <div className={styles.item}>
            <div className={`green-bg ${styles.item__icon}`}>
              <Image src="/img/static/hands.png" alt=""
                width={32}
                height={32}

              />
            </div>
            <div className={`beige-bg ${styles.item__box}`}>
              <span>Kinderbetreuung</span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={`beige-bg ${styles.item__icon}`}>
              <Image src="/img/static/Haushaltshilfe.png" alt=""
                width={32}
                height={32}
              />
            </div>
            <div className={`green-bg ${styles.item__box}`}>
              <span>Haus &amp;&nbsp;Garten</span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={`green-bg ${styles.item__icon}`}>
              <Image src="/img/static/Tierbetreuung.png" alt=""
                width={32}
                height={32}
              />
            </div>
            <div className={`beige-bg ${styles.item__box}`}>
              <span>Tierbetreuung</span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={`beige-bg ${styles.item__icon}`}>
              <Image src="/img/static/Seniorenbetreuung.png" alt=""
                width={32}
                height={32}
              />
            </div>
            <div className={`green-bg ${styles.item__box}`}>
              <span>Seniorenbetreuung</span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={`green-bg ${styles.item__icon}`}>
              <Image src="/img/static/Au-Pair.png" alt=""
                width={32}
                height={32}
              />
            </div>
            <div className={`beige-bg ${styles.item__box}`}>
              <span>Au-Pair</span>
            </div>
          </div>
          <div className={styles.item}>
            <div className={`beige-bg ${styles.item__icon}`}>
              <Image src="/img/static/Nachhilfe.png" alt=""
                width={32}
                height={32}
              />
            </div>
            <div className={`green-bg ${styles.item__box}`}>
              <span>Nachhilfe</span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

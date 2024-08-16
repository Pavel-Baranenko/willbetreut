"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import styles from "./index.module.scss"
import Image from 'next/image';
import Link from 'next/link';


export default function Reviews() {


  return (
    <section className={styles.wrap}>
      <h6 className="section-title">Alltagshelfer treffen</h6>
      <div className="container-left">
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.top}>
                <Image src="/img/static/user.png" alt="" width={50} height={50} />
                <div className={styles.info}>
                  <div className={styles.name}>Benedict Hauer</div>
                  <div className={styles.descr}>
                    <Image src="/img/icons/diamond.png" alt="" width={24} height={19} />
                    <span>4.9</span>
                    <Link href="#">Rezension</Link>
                  </div>
                </div>
              </div>
              <p className={styles.text}>
                "Jasmin ist nun seit vier Wochen bei mir und ich bin sehr zufrieden. Sie arbeitet schnell, ist freundlich und sympathisch und macht bei mir wieder super "klar Schiff".
                Die Kommunikation mit ihr ist völlig unkompliziert."
              </p>
              <div className={styles.bottom}>
                Tatjana V. • Frankfurt am Main
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
  )
}

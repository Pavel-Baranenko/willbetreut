"use client"
import Image from "next/image";
import styles from "./index.module.scss"
import TimePicker from "@/components/ui-kit/TimePicker";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Order = () => {
  return (
    <div className="container-content">
      <div className={styles.wrap}>
        <div className="user-grid">
          <div className="grid-left">
            <div className={styles.order}>
              <div className={styles.head}>
                <h1 className={styles.title}>
                  Unterstützung für den Haushalt benötigt
                </h1>
                <span className={styles.location}>1120 Wien Meidling</span>
                <div className={styles.params}>
                  <strong>€ 50</strong>
                  <span>5 Std. / Monat</span>
                </div>
              </div>
              {useMediaQuery(1080) &&
                <div className={styles.buttons}>
                  <button className={styles.btn__active}>Ich bin interessiert</button>
                  <button className={styles.btn__disactive}>Nein, kein Interesse</button>
                </div>
              }
              <div className={styles.body}>
                <p className={styles.text}>
                  Hallo, ich wohne in 1120 Wien und suche jemanden, der die Reinigung der Wohnung übernehmen kann.
                  Erfahrungen und Referenzen sind von Vorteil. Bitte seien Sie bereit, folgenden Service anzubieten: Bügeln, Fenster putzen und Kühlschrankreinigung. Sie sollten zuverlässig und gründlich sein. Alles Weitere kann im persönlichen Gespräch geklärt werden. Wenn Sie Interesse haben, schicken Sie mir bitte eine Nachricht.
                  Danke.
                </p>
                <div className={styles.author}>
                  <Image src={"img/static/user.png"} alt="User avatar"
                    width={40} height={40} />
                  <div className={styles.author__info}>
                    <p>Erstellt von Doris</p>
                    <span>am 27.07.2024</span>
                  </div>
                </div>

              </div>
              <div className={styles.options}>
                <div className={styles.info}>
                  <strong className={styles.availability}>Gewünschte Verfügbarkeit</strong>
                  <p className={styles.grafic}>5 Std. / Monat</p>
                  <span className={styles.beginning}>Beginnt: Bald</span>
                </div>
                <div className={styles.date}>
                  <TimePicker />
                </div>
                {useMediaQuery(1080) &&
                  <div className={styles.side}>
                    <div className={styles.side__info}>
                      <strong>Gewünschte Verfügbarkeit</strong>
                      <p>1 Schlafzimmer</p>
                      <p>1 Bad</p>
                    </div>
                    <div className={styles.services}>
                      <strong>Leistungen</strong>
                      <p>Fenster putzen</p>
                      <p>Backofenreinigung</p>
                      <p>Bügeln</p>
                    </div>
                  </div>
                }
                <div className={styles.links}>
                  <Link href="#">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none"  >
                      <path d="M1.927 6.49996H13.5C13.6423 6.49996 13.7613 6.45221 13.8568 6.35671C13.9523 6.26121 14 6.14229 14 5.99996C14 5.85762 13.9523 5.73871 13.8568 5.64321C13.7613 5.54771 13.6423 5.49996 13.5 5.49996H1.927L5.6615 1.76546C5.759 1.66796 5.81 1.55321 5.8145 1.42121C5.819 1.28904 5.768 1.16787 5.6615 1.05771C5.55133 0.947374 5.43242 0.891291 5.30475 0.889458C5.17725 0.887458 5.05833 0.941624 4.948 1.05196L0.565499 5.43446C0.478166 5.52179 0.416917 5.61096 0.38175 5.70196C0.346416 5.79296 0.328751 5.89229 0.328751 5.99996C0.328751 6.10762 0.346416 6.20696 0.38175 6.29796C0.416917 6.38896 0.478166 6.47812 0.565499 6.56546L4.948 10.948C5.0455 11.0455 5.16125 11.0965 5.29525 11.101C5.42925 11.1055 5.55133 11.0525 5.6615 10.9422C5.768 10.832 5.82217 10.7141 5.824 10.5885C5.826 10.4628 5.77183 10.3448 5.6615 10.2345L1.927 6.49996Z" fill="#767676" />
                    </svg>
                    <span>Alle Jobs ansehen</span>
                  </Link>
                  <Link href="#">
                    <span>Nächster Job</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none"  >
                      <path d="M12.073 6.49996H0.5C0.357667 6.49996 0.23875 6.45221 0.14325 6.35671C0.0477499 6.26121 0 6.14229 0 5.99996C0 5.85762 0.0477499 5.73871 0.14325 5.64321C0.23875 5.54771 0.357667 5.49996 0.5 5.49996H12.073L8.3385 1.76546C8.241 1.66796 8.19 1.55321 8.1855 1.42121C8.181 1.28904 8.232 1.16787 8.3385 1.05771C8.44867 0.947374 8.56758 0.891291 8.69525 0.889458C8.82275 0.887458 8.94167 0.941624 9.052 1.05196L13.4345 5.43446C13.5218 5.52179 13.5831 5.61096 13.6182 5.70196C13.6536 5.79296 13.6712 5.89229 13.6712 5.99996C13.6712 6.10762 13.6536 6.20696 13.6182 6.29796C13.5831 6.38896 13.5218 6.47812 13.4345 6.56546L9.052 10.948C8.9545 11.0455 8.83875 11.0965 8.70475 11.101C8.57075 11.1055 8.44867 11.0525 8.3385 10.9422C8.232 10.832 8.17783 10.7141 8.176 10.5885C8.174 10.4628 8.22817 10.3448 8.3385 10.2345L12.073 6.49996Z" fill="#767676" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="grid-right">
            {!useMediaQuery(1080) &&
              <div className={styles.side}>
                <button className={styles.btn__active}>Ich bin interessiert</button>
                <button className={styles.btn__disactive}>Nein, kein Interesse</button>
                <div className={styles.side__info}>
                  <strong>Gewünschte Verfügbarkeit</strong>
                  <p>1 Schlafzimmer</p>
                  <p>1 Bad</p>
                </div>
                <div className={styles.services}>
                  <strong>Leistungen</strong>
                  <p>Fenster putzen</p>
                  <p>Backofenreinigung</p>
                  <p>Bügeln</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

    </div>
  )
}
export default Order;
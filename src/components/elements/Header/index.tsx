'use client'
import Image from "next/image";
import Link from "next/link";
import City from '@/components/ui-kit/City'
import Lang from '@/components/ui-kit/Lang'
import { useMediaQuery } from "@/hooks/useMediaQuery";


interface HeaderProps {
  isAuth?: boolean,
  regPage?: boolean
}

export default function Header({ isAuth, regPage }: HeaderProps) {


  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {!useMediaQuery(1080) &&
            <div className="header__left">
              <Lang />
              <City />
            </div>
          }

          <Link href="/" className='Logo'>
            <Image
              src="/img/Logo.png"
              alt="Willbetreut Logo"
              width={useMediaQuery(1080) ? 87 : 123.58}
              height={useMediaQuery(1080) ? 35 : 50}
            />
          </Link>
          <div className="header__right">
            {(!useMediaQuery(1080)) &&
              <Link href="/find-job" className='header__link'>Job finden</Link>
            }
            <Link href="#" className={`header__link ${useMediaQuery(1080) ? "green-btn" : ""}`}>Einloggen</Link>
            {!useMediaQuery(1080) &&
              <Link href="/auth/sing-up" className='header__reg green-btn'>Jetzt registrieren</Link>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

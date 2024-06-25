'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from 'react'

import Image from "next/image";
import aboutSix from '/public/about-six.png'
import logo from '/public/topNavLogo.png'
import instaBl from '/public/insta-block.png'
import instaPhone from '/public/insta-block-mobile.png'
import logoFooter from '/public/logoFooter.png'
import tagFooter from '/public/tag-footer.png'
import mail from '/public/mail-icon.png'
import instIcon from '/public/insta-icon.png'

export default function About() {
  const [isDrop, setIsDrop] = useState(false)
  const showClick = event => setIsDrop(current => !current)
	return (
    <main className="about ">
      <nav className="flex">
        <div>
          <div className="logo-div">
            <Link href="/">
              <Image src={logo} alt="Chili B." width={115} height={24} />
            </Link>
          </div>
        </div>

        <div className="linkOne flex">
          <div className="drop" onClick={showClick}>Discover
            <ul className={isDrop ? "show dropdown" : "dropdown"}>
              <li className="pink drop-li"><Link href="/magnesium">Magnesium</Link></li>
              <li className="purple  drop-li"><Link href="/ashwagandha">Ashwagandha</Link></li>
            </ul>
          </div>
          <Link href="/about">About</Link>
        </div>
      </nav>
    	<section className="hero hero-about hero-white section">
        <div className="hero-inner">
          
          <h1>Welcome to Chili&nbsp;B.<br/>serving Wellness,<br/>One Sip at a Time</h1>
        </div>
      </section>

      <section className="flex row about-intro section">
      	<div className="copy-block">
          <p className="">At Chili&nbsp;B, we&apos;re dedicated to elevating your everyday life. With a passion for wellness and a commitment to quality, we invite you to indulge in a journey of good taste and peace, where every sip nourishes the body and relaxes the mind.</p>
          <Link href="/info" className="">Learn More</Link>
        </div>
        <Image src={aboutSix} alt="Chili B." width={420} />
      </section>

      <section className="instablock section">
        <h1 className="red">We’re on a mission to<br/>chill with you </h1>
        <Image src={instaBl} alt="Chili B." className="hide-md" />
        <Image src={instaPhone} alt="Chili B." className="hide-lg" />
      </section>

      <section className="about-outro section">
        <p className="center">Chili&nbsp;Beverage was created with you in mind. We recognize the demands of the modern workweek, and we&apos;re dedicated to lifting you up & helping you relax. Let us be your companion in good time or stress. We&apos;re offering you a refreshing respite to help you power through.</p>
      </section>

      <footer className="footer">
        <div className="flex"> 
          <div className="four-zero">
            <Image src={logoFooter} alt="Logo on footer" width={180} height={37} />
          </div>
          <div className="six-zero">
            <Link href="mailto:zena@chilibeverage.com" className="mail">
              zena@chilibeverage.com
            </Link>
          </div>
        </div>
        <div className="flex">
          <p className="four-zero">© 2024 ALL RIGHTS RESERVED.</p>
          <div className="flex-in six-zero">
            <Link href="https://instagram.com/chili_beverage" target="_blank" className="">
              <Image src={instIcon} alt="Chili B." width={19} />
            </Link>
            <Link href="#" className="">
              <p>Privacy Policy</p>
            </Link>
            <Link href="#" className="">
              <p>Terms & Conditions</p>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
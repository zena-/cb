'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from 'react'

import Image from "next/image";
import aboutSix from '/public/lineup.png'
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
          <Link href="/magnesium" className="no-show">Magnesium</Link>
          <Link href="/ashwagandha" className="no-show">Ashwagandha</Link>
          <Link href="/shop" className="box">Shop</Link>
        </div>
      </nav>
    	<section className="hero hero-about hero-white section">
        <div className="hero-inner">
          
          <h1>Welcome to Chili&nbsp;B.<br/>serving Wellness,<br/>One Sip at a Time</h1>
        </div>
      </section>

      <section className="flex about-intro section">
      	<div className="copy-block">
          <p className="center">At Chili&nbsp;B, we&apos;re dedicated to elevating your everyday life. With a passion for wellness and a commitment to quality, we invite you to indulge in a journey of good taste and peace, where every sip nourishes the body and relaxes the mind.</p>
          <Link href="/info" className="">Learn More</Link>
        </div>
        <Image src={aboutSix} alt="Chili B." width={820} />
      </section>

      <section className="about-outro section">
        <h1 className="instablockH1">We’re on a mission to chill with you </h1>
        <p className="center">Chili&nbsp;Beverage was created with you in mind. We recognize the demands of the modern workweek, and we&apos;re dedicated to lifting you up & helping you relax. Let us be your companion in good time or stress. We&apos;re offering you a refreshing respite to help you power through.</p>
      </section>

      <section className="instablock section">
        <Image src={instaBl} alt="Chili B." className="hide-md" />
        <Image src={instaPhone} alt="Chili B." className="hide-lg" />
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
            <Link href="https://instagram.com/chilibeverage" target="_blank" className="">
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
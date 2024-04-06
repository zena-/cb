'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from 'react'

import Image from "next/image";
import aboutSix from '/public/about-six.png'
import logo from '/public/logo.png'
import instaBl from '/public/insta-block.png'
import instaPhone from '/public/insta-block-mobile.png'
import logoFooter from '/public/logo-footer.png'
import tagFooter from '/public/tag-footer.png'
import mail from '/public/mail-icon.png'
import instIcon from '/public/insta-icon.png'

export default function About() {
  const [isDrop, setIsDrop] = useState(false)
  const showClick = event => setIsDrop(current => !current)
	return (
    <main className="about ">
    	<section className="hero hero-about hero-white section">
        <div className="hero-inner">
          <nav className="flex ">
            <div className="linkOne flex">
              <div className="drop" onClick={showClick}>Discover
                <ul class={isDrop ? "show dropdown" : "dropdown"}>
                  <li className="pink"><Link href="/magnesium">Magnesium</Link></li>
                  <li className="purple"><Link href="/ashwagandha">Ashwagandha</Link></li>
                </ul>
              </div>
              <Link href="/about">About</Link>
            </div>
            <div className="logo-div">
              <Link href="/">
                <Image src={logo} alt="Chili B." width={182} height={38} />
              </Link>
            </div>
            <div></div>
          </nav>
          <h1>Welcome to Chili&nbsp;B.<br/>serving Wellness,<br/>One Sip at a Time</h1>
        </div>
      </section>

      <section className="flex row about-intro section">
      	<div className="copy-block">
          <p className="med-text">At Chili&nbsp;B, we&apos;re dedicated to elevating your everyday life. With a passion for wellness and a commitment to quality, we invite you to indulge in a journey of good taste and peace, where every sip nourishes the body and relaxes the mind.</p>
          <Link href="/info" className="">Learn More</Link>
        </div>
        <Image src={aboutSix} alt="Chili B." width={420} />
      </section>

      <section className="instablock section">
        <h1>We’re on a mission to<br/>chill with you </h1>
        <Image src={instaBl} alt="Chili B." className="hide-md" />
        <Image src={instaPhone} alt="Chili B." className="hide-lg" />
      </section>

      <section className="about-outro section">
        <p className="center med-text">Chili&nbsp;Beverage was created with you in mind. We recognize the demands of the modern workweek, and we&apos;re dedicated to lifting you up & helping you relax. Let us be your companion in good time or stress. We&apos;re offering you a refreshing respite to help you power through.</p>
      </section>

      <footer className="footer">
        <div className="flex">
          <Link href="/"><Image src={logoFooter} alt="Chili B." width={230} /></Link>
          <Image src={tagFooter} alt="Chili B." className="tag" width={350} />
        </div>
        <div className="flex border white-copy">
          <div className="flex row">
            <Link href="mailto:zena@chilibeverage.com" className="flex mail">
              <Image src={mail} alt="Chili B." width={50} />
              zena@chilibeverage.com
            </Link>
            <Link href="https://instagram.com/chili_beverage" className="flex mail">
              <Image src={instIcon} alt="Chili B." width={19} />
            </Link>
          </div>

          <div className="flex row white-copy footer-nav">
            <Link href="/about">About</Link>
            <Link href="/magnesium">Magnesium</Link>
            <Link href="/ashwagandha">Ashwagandha</Link>
          </div>
        </div>

        <div className="flex row white-copy lastblock-nav">
          <div>
            <p>© 2024 ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex footer-nav row">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
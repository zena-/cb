'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from 'react'
import { useEffect } from 'react'
import {RadioGroup, Radio} from "@nextui-org/radio";

import Image from "next/image";
import logo from '/public/topNavLogo.png'
import instaBl from '/public/insta-block.png'
import instaPhone from '/public/insta-block-mobile.png'
import logoFooter from '/public/logoFooter.png'
import tagFooter from '/public/tag-footer.png'
import instIcon from '/public/insta-icon.svg'
import nosugar from '/public/no-sugar.svg'
import vegan from '/public/vegan.svg'
import organic from '/public/organic.svg'
import fruit from '/public/fruit.svg'
import mood from '/public/mood.svg'
import gmo from '/public/gmo.svg'
import red from '/public/can-rose2.png'
import orange from '/public/can-orange2.png'
import green from '/public/can-lime2.png'
import pink from '/public/can-apple2.png'
import yellow from '/public/can-lemon2.png'
import purple from '/public/can-tea2.png'

import guavaRec from '/public/guavaRec.png'

import cranberry from '/public/cranberry.png'
import orangeProud from '/public/orangeProud.png'
import lime from '/public/lime.png'
import guava from '/public/guava.png'
import hibiscus from '/public/hibiscus.png'
import lemon from '/public/lemon.png'

export default function About() {
  const [flavor, setFlavor] = useState("Cranberry & Rose Hips")
  const [prod, setProd] = useState(cranberry)
  const [func, setFunc] = useState("300 mg Magnesium Citrate")
  const [selectedcranberry, setselectedcranberry] = useState(false)
  const [selectedorange, setselectedorange] = useState(false)
  const [selectedguava, setselectedguava] = useState(false)
  const [selectedhibiscus, setselectedhibiscus] = useState(false)
  const [selectedlime, setselectedlime] = useState(false)
  const [selectedlemon, setselectedlemon] = useState(false)
  const [count, setCount] = useState(1)
  const [flavorDesc, setflavorDesc] = useState('Dive into the crisp and refreshing taste of cranberry, masterfully blended with a hint of rose hips for a subtle floral undertone. This beverage is your gateway to a rejuvenating experience, enriched with magnesium to support your mood and overall well-being. Embrace the power of nature with this cranberry bliss, perfect for any time of day when you need a little or a lot of relaxation.')

  let minus = event => setCount(current => current > 1 ? current -1 : 1)
  let plus = event => setCount(current => current + 1)
  const newCranberry = event => setselectedcranberry(current => !current)
  const neworange = event => setselectedorange(current => !current)
  const newguava = event => setselectedguava(current => !current)
  const newhibiscus = event => setselectedhibiscus(current => !current)
  const newlime = event => setselectedlime(current => !current)
  const newlemon = event => setselectedlemon(current => !current)

  useEffect(() => {
    if(selectedcranberry){
      setProd(cranberry)
      setFunc("300 mg Magnesium Citrate")
      setFlavor("Cranberry & Rose Hips")
      setselectedorange(false)
      setselectedguava(false)
      setselectedhibiscus(false)
      setselectedlime(false)
      setselectedlemon(false)
      setflavorDesc('Dive into the crisp and refreshing taste of cranberry, masterfully blended with a hint of rose hips for a subtle floral undertone. This beverage is your gateway to a rejuvenating experience, enriched with magnesium to support your mood and overall well-being. Embrace the power of nature with this branberry bliss, perfect for any time of day when you need a little or a lot of relaxation.')
    }

    if(selectedorange){
      setProd(orangeProud)
      setFunc("250 mg Ashwagandha Root")
      setFlavor("Orange")
      setselectedcranberry(false)
      setselectedguava(false)
      setselectedhibiscus(false)
      setselectedlime(false)
      setselectedlemon(false)
      setflavorDesc('Immerse yourself in the vibrant, zesty essence of Orange Oasis, a refreshing beverage that marries the boldness of ripe oranges with the calming effects of Ashwagandha root. This blend is perfect for those seeking a natural uplift and a serene mindset throughout the day. Step into your own personal oasis with Orange Oasis—your go-to for a refreshing burst of energy and a peaceful state of mind.')
    }

    if(selectedguava){
      setProd(guava)
      setFunc("300 mg Magnesium Citrate")
      setFlavor("Guava & Apple")
      setselectedcranberry(false)
      setselectedorange(false)
      setselectedhibiscus(false)
      setselectedlime(false)
      setselectedlemon(false)
      setflavorDesc('Savor the lush, tropical sweetness of guava, a refreshing functional beverage infused with a delicate hint of apple for a subtly crisp finish. This enticing blend is designed to enhance your everyday wellness routine with a dose of magnesium, known for its mood-enhancing and relaxation properties. Elevate your beverage selection with Guava Glow—where health meets the delightful essence of guava and apple.')
    }

    if(selectedlime) {
      setProd(lime)
      setFunc("250 mg Ashwagandha Root")
      setFlavor("Lime & Mint")
      setselectedcranberry(false)
      setselectedorange(false)
      setselectedhibiscus(false)
      setselectedguava(false)
      setselectedlemon(false)
      setflavorDesc('Experience the crisp, invigorating taste of Lime Refresh, artfully blended with a burst of cool mint for a truly revitalizing beverage experience. Enhanced with Ashwagandha root, this drink is designed to soothe and uplift, promoting a balanced mood and a calm mind. Dive into the vibrant fusion of lime and mint with Lime Refresh—where each sip brings you closer to tranquility and renewed energy.')
    }

    if(selectedhibiscus) {
      setProd(hibiscus)
      setFunc("250 mg Ashwagandha Root")
      setFlavor("Hibiscus Tea")
      setselectedcranberry(false)
      setselectedorange(false)
      setselectedguava(false)
      setselectedlime(false)
      setselectedlemon(false)
      setflavorDesc('Indulge in the soothing, floral notes of Hibiscus Harmony, elegantly fused with a whisper of sweet peach for a soft, enticing finish. This delicately crafted tea is enriched with Ashwagandha root, a revered adaptogen known for its stress-reducing and mood-enhancing properties. Experience the serenity of Hibiscus Harmony—a gentle embrace of floral and fruit with the revitalizing power of Ashwagandha.')
    }

    if(selectedlemon) {
      setProd(lemon)
      setFunc("300 mg Magnesium Citrate")
      setFlavor("Lemon & Ginger")
      setselectedcranberry(false)
      setselectedorange(false)
      setselectedhibiscus(false)
      setselectedguava(false)
      setselectedlime(false)
      setflavorDesc('Unleash the vibrant energy of Lemon Zing, a zesty beverage perfectly paired with the warm, spicy notes of ginger. Each sip is a splash of sunshine and a spark of spice, crafted to invigorate your senses and enhance your wellness with a boost of magnesium. Step into a world of zest with Lemon Zing—your daily dose of brightness and spice, enhanced with the benefits of magnesium.')
    }

  }, [selectedcranberry, 
    setselectedcranberry, 
    selectedorange, 
    setselectedorange, 
    selectedguava, 
    setselectedguava, 
    selectedhibiscus, 
    setselectedhibiscus, 
    selectedlime, 
    setselectedlime,
    selectedlemon, 
    setselectedlemon,
    setProd, 
    setFunc, 
    setFlavor])


	return (
    <main className="shop ">
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

      <section className="product flex row not-tablet">
        <div className="prod-img">
          <Image src={prod} alt="Chili B product image" width={580} />
        </div>

        <div className="prod-info">
          <h2 className="prod-flavor med-text">{flavor}</h2>

          <div className="details">
            <div className="flex row d-gap not-tablet">
              <p className="label-type">Functionality</p>
              <div className="desc-type">
                <p className="">{func}</p>
              </div>
            </div>

            <div className="flex row d-gap not-tablet">
              <p className="label-type">Case</p>
              <RadioGroup isDisabled className="flex row packs desc-type">
                <Radio value="4 pack" >4&nbsp;pack</Radio>
                <Radio value="6 pack" >6&nbsp;pack</Radio>
                {/*<Radio value="12 pack" >12&nbsp;pack</Radio>*/}
                <Radio value="24 pack" >24&nbsp;pack</Radio>
              </RadioGroup>
            </div>

            <div className="flex row d-gap not-tablet">
              <p className="label-type">Variety Packs</p>
              <RadioGroup isDisabled className="flex row packs case desc-type">
                <Radio value="magnesium pack">Magnesium&nbsp;<span className="hide-mid">case</span></Radio>
                <Radio value="Ashwagandha pack">Ashwagandha&nbsp;<span className="hide-mid">case</span></Radio>
                <Radio value="All pack">Best&nbsp;sellers</Radio>
              </RadioGroup>
            </div>

            <div className="flex row d-gap not-tablet">
              <p className="label-type">Quantity</p>
              <div className="flex row not-tablet countBox desc-type">
                <button className="" onClick={minus}>-</button>
                <p className="med-text">{count}</p>
                <button className="" onClick={plus}>+</button>
              </div>
            </div>

            <div className="flex row d-gap not-tablet">
              <p className="baseline label-type">Flavors</p>
              <div className="cans-wrap">
                <RadioGroup isDisabled className="flex row prod-cans desc-type">
                  <Radio onClick={newCranberry} className="red" value="red">
                    <Image src={red} alt="image of Chili B can" width={193} />
                  </Radio>
                  <Radio onClick={neworange} className="orange" value="orange">
                    <Image src={orange} alt="image of Chili B can" width={193} />
                  </Radio>
                  <Radio onClick={newguava} className="pink" value="pink">
                    <Image src={pink} alt="image of Chili B can" width={193} />
                  </Radio>
                  <Radio onClick={newlime} className="green" value="green">
                    <Image src={green} alt="image of Chili B can" width={193} />
                  </Radio>
                  <Radio onClick={newhibiscus} className="purple" value="purple">
                    <Image src={purple} alt="image of Chili B can" width={193} />
                  </Radio>
                  <Radio onClick={newlemon} className="yellow" value="yellow">
                    <Image src={yellow} alt="image of Chili B can" width={193} />
                  </Radio>
                </RadioGroup>
              </div>
            </div>

            <button className="buyNow">Sold Out</button>
          </div>
        </div>
      </section>

      <section className="pdp-info">
        <div className="pdp product flex row">
          <div className="flex column half-width">
            <h2 className="prod-flavor ">{flavor}</h2>
            <p>{flavorDesc}</p>
            <ul>
              <li>Sip one can for an uplifting boost to your&nbsp;spirits</li>
              <li>Enjoy two to unwind and relax after a busy&nbsp;day</li>
              <li>Indulge in three for a deep, restorative night’s&nbsp;sleep</li> 
            </ul>
            <p>Each can is crafted without additives, ensuring a pure, natural taste that not only refreshes but also nurtures your body and mind.</p>
          </div>

          <div className="align-content half-width">
            {/*<video width="520" height="400" controls autoPlay loop muted playsInline preload="auto">
              <source src="/public/Chili_B_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>*/}
          </div>
        </div>

        <div className="icons flex row not-tablet">
          <div className="icon">
            <Image src={nosugar} alt="Chili B." width={90} height={90} />
            <p>no sugar</p>
          </div>
          <div className="icon">
            <Image src={vegan} alt="Chili B." width={90} height={90} />
            <p>vegan</p>
          </div>
          <div className="icon">
            <Image src={fruit} alt="Chili B." width={90} height={90} />
            <p>real fruit</p>
          </div>
          <div className="icon">
            <Image src={gmo} alt="Chili B." width={90} height={90} />
            <p>non gmo</p>
          </div>
          <div className="icon">
            <Image src={organic} alt="Chili B." width={90} height={90} />
            <p>organic</p>
          </div>
          <div className="icon">
            <Image src={mood} alt="Chili B." width={90} height={90} />
            <p>mood</p>
          </div>
        </div>
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
            <Link href="https://www.instagram.com/chilibeverage/" target="_blank" className="">
              <Image src={instIcon} alt="Chili B." width={19} height={12} />
            </Link>
            <Link href="#" className="">
              <p>Privacy&nbsp;Policy</p>
            </Link>
            <Link href="#" className="">
              <p>Terms&nbsp;&&nbsp;Conditions</p>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
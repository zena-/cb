'use client'

import {useState} from 'react'
import Image from "next/image";
import Link from 'next/link'
import logo from '../public/topNavLogo.png'
import icon from '../public/black-icon.png'
import pour from '../public/orange-water.png'
// import action from '../public/action3.png'
import realfruit from '../public/realFruitnew.png'
import bold from '../public/boldTnew.png'
import passion from '../public/passionNew.png'
import logoFooter from '../public/logoFooter.png'
import tagFooter from '../public/tag-footer.png'
import mocktail from '../public/mocktail-sand.webp'
import instIcon from '../public/insta-icon.svg'
import flowR from '../public/harmR.png'
import flowL from '../public/harmL.png'

export default function Home() {
  // const [isMag, setIsMag] = useState(false)
  const [isAsh, setIsAsh] = useState(true)
  const [isDrop, setIsDrop] = useState(false)
  const handleClick = event => setIsAsh(current => !current)
  const showClick = event => setIsDrop(current => !current)

  return (
    <main className="main">
      <nav className="flex">
        <div>
          <div className="logo-div">
            <Link href="/">
              <Image src={logo} alt="Chili B." width={115} height={24} />
            </Link>
          </div>
        </div>

        <div className="linkOne flex">
          {/*<div className="drop" onClick={showClick}>Discover
            <ul className={isDrop ? "show dropdown" : "dropdown"}>
              <li className="pink drop-li"><Link href="/magnesium">Magnesium</Link></li>
              <li className="purple  drop-li"><Link href="/ashwagandha">Ashwagandha</Link></li>
            </ul>
          </div>*/}
          <Link href="/magnesium" className="no-show">Magnesium</Link>
          <Link href="/ashwagandha" className="no-show">Ashwagandha</Link>
          <Link href="/shop" className="box">Shop</Link>
          {/*<Link href="/about">About</Link>*/}
        </div>
      </nav>

      <section className="hero hero-home section">
        <div className="hero-inner">
          <h1 className="bold cap black">where wellness <br/>meets refreshment</h1>
          <p className="black">Immerse yourself in the essence of indulgence as you discover <br/>our meticulously formulated functional beverage.</p>
        </div>
        <div className="lineup"></div>
      </section>
      
      <section className="flavor section palms">
        <div className="mid">
          <h2 className="center uppercase tit">Indulge in Our Flavorful World</h2>
          <div className="flex flavor-option">
            <div className={isAsh ? '' : 'active'} onClick={handleClick}><h2>Magnesium</h2></div>
            <div className={isAsh ? 'active' : ''} onClick={handleClick}><h2>Ashwagandha</h2></div>
          </div>
          <div className={isAsh ? 'active ash flex ops' : 'ops'}>
            <div className="imgBox">
              <Link href="/ashwagandha#orange" className="imgBox orange"></Link>
              <p className=" ingredients med-text ">Carbonated Water, Organic Orange Juice Concentrate, Orange Extract, Organic Lemon Juice Concentrate, Ashwagandha Root Extract.</p>
            </div>
            <div className="imgBox">
              <Link href="/ashwagandha#lime" className="imgBox green"></Link>
              <p className=" ingredients med-text ">Carbonated Water, Organic Apple Juice Concentrate, Mint Extract, Organic Lime Juice Concentrate, Ashwagandha Root Extract, Lime Extract.</p>
            </div>
            <div className="imgBox">
              <Link href="/ashwagandha#hibiscus" className="imgBox purple"></Link>
              <p className=" ingredients med-text ">Carbonated Water, Organic Apple Juice Concentrate, Organic Peach Juice Concentrate, Hibiscus Extract, Organic Lemon Juice Concentrate, Peach Extract, Ashwagandha Root Extract.</p>
            </div>
          </div>
          <div className={isAsh ? 'ops' : 'active mag flex ops'}>
            <div className="imgBox">
              <Link href="/magnesium#apple" className="imgBox pink"></Link>
              <p className=" ingredients med-text">Carbonated Water, Organic Apple Juice Concentrate, Guava Extract, Organic Lemon Juice Concentrate, Magnesium Citrate.</p>
            </div>
            <div className="imgBox">
              <Link href="/magnesium#cranberry" className="imgBox red"></Link>
              <p className=" ingredients med-text">Carbonated Water, Organic Apple Juice Concentrate, Organic Cranberry Juice Concentrate, Cranberry Extract, Magnesium Citrate, Organic Lime Juice Concentrate, Rose Extract.</p>
            </div>
            <div className="imgBox">
              <Link href="/magnesium#pineapple" className="imgBox yellow"></Link>
              <p className="ingredients med-text">Carbonated Water, Organic Orange Juice Concentrate, Organic Lemon Juice Concentrate, Magnesium Citrate, Ginger Extract, Lemon Extract.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="display flex">
        <div className="copy-block">
          <h2 className="uppercase displayTitle">Elevate&nbsp;your <br className="hide-lg"/>daily&nbsp;routine</h2>
          <p className="">Discover a new way to nourish your body and mind with our functional beverage crafted from real fruit juice and a blend of nature&apos;s finest ingredients. We&apos;re offering you a soothing antidote to the stresses of modern&nbsp;life.</p>
          <Link href="/info" className="">Learn More</Link>
        </div>
      </section>

      <section className="why">
        <div>
          <h2 className="uppercase">What makes us&nbsp;different</h2>
          <div className="flex wrap">
            <div className="flex inner">
              <Image src={bold} alt="Chili B." width={370} />
              <h4 className="">bold taste</h4>
              <p className="">A new kind of sparkling water. Our beverage delivers an unforgettable taste experience. Bold, vibrant, and unapologetically unique.</p>
            </div>
            <div className="flex inner flip">
              <Image src={realfruit} alt="Chili B." width={370} />
              <h4 className="">real fruit</h4>
              <p className="">Our commitment to quality, from farm-fresh fruits to carefully sourced botanicals, each element is selected with your well-being in mind.</p>
            </div>
            <div className="flex inner">
              <Image src={passion} alt="Chili B." width={370} />
              <h4 className="">Passion</h4>
              <p className="">Passion drives everything we do. From hand-selecting the finest ingredients to crafting each batch with care, our dedication shines through in every sip.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pour flex">
        <h1>Discover, Balance, Embrace, Peace</h1>
      </section>

      <section className="flex flow">
        <Image className="left" src={flowL} alt="flow with Chili beverage image" width={590} />
        <Image className="right" src={flowR} alt="flow with Chili beverage image" width={590} />
      </section>

      <section className="action flex section">
        <div className="copy-block">
          <h2 className="uppercase">Harmony in&nbsp;Action</h2>
          <p className="">It&apos;s time to embrace the science-backed benefits of our ingredients, carefully selected to support stress reduction, promote mental clarity, and nourish your body from within. A beverage that not only tastes great but contributes to your&nbsp;health.</p>
          <Link href="/info" className="">Learn More</Link>
        </div>
      </section>

      <section className="lastBlock"></section>

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
          <p className="four-zero">Chili Beverage © 2024 ALL RIGHTS RESERVED.</p>
          <div className="flex-in six-zero">
            <Link href="https://www.instagram.com/chilibeverage/" target="_blank" className="">
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
  );
}

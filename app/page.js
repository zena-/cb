'use client'

import {useState} from 'react'
import Image from "next/image";
import Link from 'next/link'
import logo from '../public/logo.png'
import icon from '../public/black-icon.png'
import red from '../public/can-rose2.png'
import orange from '../public/can-orange2.png'
import green from '../public/can-lime2.png'
import pink from '../public/can-apple2.png'
import yellow from '../public/can-lemon2.png'
import purple from '../public/can-tea2.png'
import pour from '../public/orange-water.png'
import action from '../public/action3.png'
import realfruit from '../public/real-fruit.png'
import bold from '../public/bold.webp'
import passion from '../public/passion.png'
import logoFooter from '../public/logo-footer.png'
import tagFooter from '../public/tag-footer.png'
import mocktail from '../public/mocktail-sand.webp'
import mail from '../public/mail-icon.png'
import instIcon from '../public/insta-icon.png'

export default function Home() {
  // const [isMag, setIsMag] = useState(false)
  const [isAsh, setIsAsh] = useState(true)
  const [isDrop, setIsDrop] = useState(false)
  const handleClick = event => setIsAsh(current => !current)
  const showClick = event => setIsDrop(current => !current)

  return (
    <main className="main">
      <section className="hero hero-home section">
        <div className="hero-inner">
          <nav className="flex">
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

          <h1 className="cartier black">Sparkling Water</h1>
        </div>
      </section>
      <section className="display flex">
        <Image src={mocktail} alt="Chili B." width={800} />
        <div className="copy-block">
          <h2 className="uppercase green displayTitle">Elevate your daily&nbsp;routine</h2>
          <p className="">Discover a new way to nourish your body and mind with our functional beverage crafted from real fruit juice and a blend of nature&apos;s finest ingredients. We&apos;re offering you a soothing antidote to the stresses of modern&nbsp;life.</p>
          <Link href="/info" className="">Learn More</Link>
        </div>
      </section>
      
      <section className="flavor section palms">
        <div className="mid">
          <h2 className="center uppercase">Indulge in Our<br/>Flavorful World</h2>
          <div className="flex flavor-option">
            <div className={isAsh ? '' : 'active'} onClick={handleClick}><h2>Magnesium</h2></div>
            <div className={isAsh ? 'active' : ''} onClick={handleClick}><h2>Ashwagandha</h2></div>
          </div>
          <div className={isAsh ? 'active ash flex ops' : 'ops'}>
            <div className="">
              <Link href="/ashwagandha#orange"><Image src={orange} alt="Chili B." width={130} /></Link>
              <p className="orange ingredients med-text ">Carbonated water, blood orange juice, ashwagandha</p>
            </div>
            <div className="">
              <Link href="/ashwagandha#lime"><Image src={green} alt="Chili B." width={130} /></Link>
              <p className="green ingredients med-text ">Carbonated water, lime juice, mint, lemon balm, ashwagandha</p>
            </div>
            <div className="">
              <Link href="/ashwagandha#hibiscus"><Image src={purple} alt="Chili B." width={130} /></Link>
              <p className="purple ingredients med-text ">Carbonated water, hibiscus tea, ashwagandha</p>
            </div>
          </div>
          <div className={isAsh ? 'ops' : 'active mag flex ops'}>
            <div className="">
              <Link href="/magnesium#apple"><Image src={pink} alt="Chili B." width={130} /></Link>
              <p className="pink ingredients med-text">Carbonated water, apple juice, guava puree, magnesium</p>
            </div>
            <div className="">
              <Link href="/magnesium#cranberry"><Image src={red} alt="Chili B." width={130} /></Link>
              <p className="red ingredients med-text">Carbonated water, cranberry juice, rose hips, magnesium</p>
            </div>
            <div className="">
              <Link href="/magnesium#pineapple"><Image src={yellow} alt="Chili B." width={130} /></Link>
              <p className="yellow ingredients med-text">Carbonated water, pineapple juice, ginger, lemon balm, magnesium</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pour flex">
        <h1>Discover Balance, Embrace Peace</h1>
      </section>

      <section className="why">
        <div>
          <h2 className="title uppercase">What makes us different</h2>
          <div className="flex wrap">
            <div className="flex inner">
              <Image src={realfruit} alt="Chili B." width={430} />
              <h4 className="orange">real fruit</h4>
              <p className="">Our commitment to quality, from farm-fresh fruits to carefully sourced botanicals, each element is selected with your well-being in mind.</p>
            </div>
            <div className="flex inner">
              <Image src={bold} alt="Chili B." width={430} />
              <h4 className="orange">bold taste</h4>
              <p className="">A new kind of sparkling water. Our beverage delivers an unforgettable taste experience. Bold, vibrant, and unapologetically unique.</p>
            </div>
            <div className="flex inner">
              <Image src={passion} alt="Chili B." width={430} />
              <h4 className="orange">Passion</h4>
              <p className="">Passion drives everything we do. From hand-selecting the finest ingredients to crafting each batch with care, our dedication shines through in every sip.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="action flex palms section">
        <Image src={action} alt="Chili B." width={700} />
        <div className="copy-block">
          <h2 className="uppercase red">Harmony in&nbsp;Action</h2>
          <p className="">It&apos;s time to embrace the science-backed benefits of our ingredients, carefully selected to support stress reduction, promote mental clarity, and nourish your body from within. A beverage that not only tastes great but also contributes to your health.</p>
          <Link href="/info" className="">Learn More</Link>
        </div>
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
  );
}

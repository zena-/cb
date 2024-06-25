'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from 'react'

import Image from "next/image";
import logo from '/public/topNavLogo.png'
import logoFooter from '/public/logoFooter.png'
import tagFooter from '/public/tag-footer.png'
import dbo from '/public/discover-bloodorange.png'
import boc from '/public/bo-cocktail.png'
import twolimes from '/public/twolimes.png'
import limecoc from '/public/lime-cocktail.png'
import twoteas from '/public/two-teas.png'
import teac from '/public/tea-cocktail.png'
import mail from '/public/mail-icon.png'
import instIcon from '/public/insta-icon.png'

export default function Ashwagandha() {
  const [isDrop, setIsDrop] = useState(false)
  const showClick = event => setIsDrop(current => !current)
	return (
    <main className="ash discover">
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

    	<section className="hero hero-ash hero-white section">
        <div className="hero-inner">
          <div className="see-text">
            <h1>Ashwagandha</h1>
            <p className="center">Herb known for helping the body manage <br/>stress and maintain balance.</p>
          </div>
        </div>
      </section>

      <section className="section" id="orange">
        <h2 className="cartier center">Blood Orange</h2>
        <div className="flex row img-left section">
          <Image src={dbo} alt="Chili B." width={420} />
          <div className="copy-block">
            <h2 className="med-text">Blood Orange Sparkling&nbsp;Mocktail</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can (12 oz) of Chili&nbsp;B. blood orange sparkling water</li>
              <li>2-3 tablespoons of freshly squeezed orange juice</li>
              <li>1 tablespoon of honey (adjust to taste)</li>
              <li>Blood orange slices, for garnish</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>Fill a glass half way with ice cubes.</li>
              <li>In a separate small bowl, mix together the freshly squeezed orange juice and honey until well combined.</li>
              <li>Pour the sweetened orange juice mixture into the glass over the ice.</li>
              <li>Pour Chili&nbsp;B. blood orange sparkling water over the juice&nbsp;mixture.</li>
              <li>Gently stir to combine the ingredients.</li>
              <li>Garnish with a slice of blood orange.</li>
            </ul>
            <p className="med-text title">Knock back that Blood Orange Sparkling Mocktail!</p>
          </div>
        </div>

        <div className="flex row img-right section">
          <div className="copy-block">
            <h2 className="med-text">Blood Orange Spritz</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>12 oz Chili&nbsp;B. blood orange sparkling water</li>
              <li>4 oz prosecco or sparkling wine</li>
              <li>Ice cubes</li>
              <li>Blood orange slice, for garnish</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>Fill a glass with ice cubes.</li>
              <li>Pour the blood orange sparkling water into the glass.</li>
              <li>Top with prosecco or sparkling wine.</li>
              <li>Stir gently to combine.</li>
              <li>Garnish with a slice of blood orange.</li>
            </ul>
            <p className="med-text title">Loving the Blood Orange Spritz!</p>
          </div>
          <Image src={boc} alt="Chili B." width={420} />
        </div>
      </section>

      <section className="section" id="lime">
        <h2 className="cartier center">Lime & Mint</h2>
        <div className="flex row img-left section">
          <Image src={twolimes} alt="Chili B." width={420} />
          <div className="copy-block">
            <h2 className="med-text">Mojito Mocktail</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can (12 oz) of Chili&nbsp;B. lime and mint sparkling water</li>
              <li>2-3 fresh mint leaves</li>
              <li>1 tablespoon of freshly squeezed lime juice</li>
              <li>1 tablespoon of honey </li>
              <li>Lime slices and additional mint leaves, for garnish</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>In a glass, muddle the fresh mint leaves with the freshly squeezed lime juice and honey until the mint releases its&nbsp;aroma.</li>
              <li>Fill the glass with ice cubes.</li>
              <li>Pour CB lime and mint sparkling water over the ice.</li>
              <li>Stir gently to combine.</li>
              <li>Garnish with lime slices and additional mint leaves.</li>
            </ul>
            <p className="med-text title">Enjoy your Mojito Mocktail!</p>
          </div>
        </div>

        <div className="flex row img-right section">
          <div className="copy-block">
            <h2 className="med-text">Lime Mint Sparkler</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can (12 oz) of Chili&nbsp;B. lime and mint sparkling water</li>
              <li>1-2 oz vodka or gin (optional)</li>
              <li>Fresh lime slices</li>
              <li>Fresh mint leaves</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>Fill a glass with ice cubes.</li>
              <li>If using, add 1-2 ounces of vodka or gin to the glass for an alcoholic version.</li>
              <li>Pour CB lime and mint sparkling water over the ice.</li>
              <li>Stir gently to mix the ingredients together.</li>
              <li>Garnish with fresh lime slices and mint leaves.</li>
            </ul>
            <p className="med-text title">Lime Mint Sparkler for days!</p>
          </div>
          <Image src={limecoc} alt="Chili B." width={420} />
        </div>
      </section>

      <section className="section" id="hibiscus">
        <h2 className="cartier center">Hibiscus Tea</h2>
        <div className="flex row img-left section">
          <Image src={twoteas} alt="Chili B." width={420} />
          <div className="copy-block">
            <h2 className="med-text">Hibiscus Citrus Refresher:</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can (12 oz) of Chili&nbsp;B. hibiscus tea sparkling water</li>
              <li>Juice of 1/2 a lime</li>
              <li>Juice of 1/2 a lemon</li>
              <li>1 tablespoon of honey (adjust to taste)</li>
              <li>Fresh orange slices</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>Fill a glass with ice cubes.</li>
              <li>In a separate container, mix together the lime juice, lemon juice, and honey until well combined.</li>
              <li>Pour the mixture into the glass over the ice.</li>
              <li>Top off with the hibiscus tea sparkling water.</li>
              <li>Stir gently to combine.</li>
              <li>Garnish with fresh orange slices.</li>
            </ul>
            <p className="med-text title">Refresh it up with you Hibiscus Citrus Refresher!</p>
          </div>
        </div>

        <div className="flex row img-right section">
          <div className="copy-block">
            <h2 className="med-text">Hibiscus Sparkling Sangria:</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can (12 oz) of Chili&nbsp;B. hibiscus sparkling water</li>
              <li>4 oz red wine (such as a fruity red wine like Merlot or Cabernet Sauvignon)</li>
              <li>1 oz brandy</li>
              <li>1/2 oz orange liqueur (such as triple sec or Cointreau)</li>
              <li>1 tablespoon of honey (adjust to taste)</li>
              <li>Fresh fruit slices (such as oranges, lemons, and berries)</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>In a pitcher, combine the red wine, brandy, orange liqueur, and honey or agave syrup. Stir until the honey is dissolved.</li>
              <li>Add the fresh fruit slices to the pitcher and gently muddle them to release their juices.</li>
              <li>Refrigerate the sangria mixture for at least 1 hour to allow the flavors to meld.</li>
              <li>To serve, fill glasses with ice cubes.</li>
              <li>Pour the sangria mixture into each glass, filling them about&nbsp;halfway.</li>
              <li>Top off each glass with hibiscus sparkling water.</li>
              <li>Stir gently to combine.</li>
              <li>Garnish with additional fresh fruit slices, if desired.</li>
            </ul>
            <p className="med-text title">I want to chill with you and this Hibiscus Sparkling Sangria!</p>
          </div>
          <Image src={teac} alt="Chili B." width={420} />
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
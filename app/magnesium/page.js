'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import {useState} from 'react'

import Image from "next/image";
import logo from '/public/topNavLogo.png'
import logoFooter from '/public/logoFooter.png'
import tagFooter from '/public/tag-footer.png'
import twoapples from '/public/two-apples.png'
import twopin from '/public/two-pin.png'
import tworose from '/public/two-rose.png'
import rosecocktail from '/public/rose-cocktail.png'
import pinecocktail from '/public/pine-cocktail.png'
import applecocktail from '/public/apple-cocktail.png'
import instIcon from '/public/insta-icon.svg'

export default function Magnesium() {
  const [isDrop, setIsDrop] = useState(false)
  const showClick = event => setIsDrop(current => !current)
	return (
    <main className="mag discover">
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
    	<section className="hero hero-mag black section">
        <div className="hero-inner">

          <div className="">
            <h1>Magnesium</h1>
            <p className="center">An essential mineral that plays a crucial <br/>role in numerous bodily functions.</p>
          </div>
        </div>
      </section>

      <section className="section" id="cranberry">
        <h2 className="bold center">Cranberry & Rose&nbsp;Hips</h2>
        <div className="flex row img-left section">
          <Image src={tworose} alt="Chili B." width={580} />
          <div className="copy-block">
            <h2 className="med-text">Cranberry Sparkler (Non&#8209;Alcoholic):</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1/2 cup Chili&nbsp;B. Cranberry & Rose Hips sparkling water</li>
              <li>1/2 cup cranberry juice</li>
              <li>1/4 cup orange juice</li>
              <li>1 tablespoon fresh lime juice</li>
              <li>1 tablespoon honey (optional, adjust to taste)</li>
              <li>Orange slices and cranberries for garnish</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>In a glass or pitcher, combine Chili Beverage&apos;s Cranberry & Rose Hips sparkling water, cranberry juice, orange juice, fresh lime juice, and honey (if using). Stir until well mixed.</li>
              <li>Fill glasses with ice cubes.</li>
              <li>Pour the Cranberry Sparkler over the ice.</li>
              <li>Garnish each glass with orange slices and cranberries.</li>
            </ul>
            <p className="med-text title greytext">Sparkling Sparkler!</p>
          </div>
        </div>

        <div className="flex row greybacked section">
          <Image src={rosecocktail} alt="Chili B." width={634} />
          <div className="copy-block">
            <h2 className="med-text">Cranberry Fizz Bizz</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>12 oz Chili&nbsp;B. Cranberry & Rose Hips sparkling water</li>
              <li>1 1/2 oz vodka</li>
              <li>1/2 oz triple sec or orange liqueur</li>
              <li>1 tablespoon cranberry juice</li>
              <li>1 tablespoon fresh lime juice</li>
              <li>Lime wedges and cranberries for garnish</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>In a cocktail shaker, combine Chili Beverage&apos;s Cranberry & Rose Hips sparkling water, vodka, triple sec or orange liqueur, cranberry juice, and fresh lime juice.</li>
              <li>Add ice cubes to the shaker and shake well until chilled.</li>
              <li>Fill a glass with ice cubes.</li>
              <li>Strain the cocktail into the prepared glass.</li>
              <li>Garnish with a lime wedge and a few cranberries.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="pineapple">
        <h2 className="bold center">Lemon & Ginger</h2>
        <div className="flex row img-left section">
          <Image src={twopin} alt="Chili B." width={580} />
          <div className="copy-block">
            <h2 className="med-text"> Pineapple Ginger Citrus Lemonade</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 cup Chili&nbsp;B. Lemon & Ginger sparkling water</li>
              <li>1/2 cup pineapple juice</li>
              <li>1 tablespoon fresh lemon juice</li>
              <li>1 tablespoon honey or agave syrup (adjust to taste)</li>
              <li>Sliced lemon and pineapple for garnish</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>In a pitcher, combine Chili Beverage&apos;s Lemon & Ginger sparkling water, pineapple juice, fresh lemon juice, and honey or agave syrup. Stir until well mixed.</li>
              <li>Fill glasses with ice cubes.</li>
              <li>Pour the pineapple ginger lemonade over the ice.</li>
              <li>Garnish each glass with a slice of lemon and pineapple.</li>
            </ul>
            <p className="med-text title greytext">Pineapple Ginger Lemonade just made my day!</p>
          </div>
        </div>

        <div className="flex row greybacked section">
          <Image src={pinecocktail} alt="Chili B." width={420} />
          <div className="copy-block">
            <h2 className="med-text">Tropical Ginger Spritzer</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can Chili&nbsp;B. Lemon & Ginger sparkling water</li>
              <li>2 oz white rum</li>
              <li>1 oz pineapple juice</li>
              <li>1 tablespoon fresh lemon juice</li>
              <li>1/2 tablespoon ginger syrup or ginger liqueur</li>
              <li>Sliced lemon and pineapple for garnish</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>In a cocktail shaker, combine Chili Beverage&apos;s Lemon & Ginger sparkling water, white rum, pineapple juice, fresh lemon juice, and ginger syrup or ginger liqueur. Add ice cubes to the shaker.</li>
              <li>Shake well until chilled.</li>
              <li>Fill a glass with ice cubes.</li>
              <li>Strain the cocktail into the prepared glass.</li>
              <li>Garnish with a slice of lemon and pineapple.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="apple">
        <h2 className="bold center">Apple & Guava</h2>
        <div className="flex row img-left section">
          <Image src={twoapples} alt="Chili B." width={580} />
          <div className="copy-block">
            <h2 className="med-text">Apple & Guava Refresher:</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can (12 oz) of Chili&nbsp;B. Apple & Guava sparkling water</li>
              <li>1 tablespoon fresh lime juice</li>
              <li>1 teaspoon honey (optional)</li>
              <li>Thinly sliced apple and guava for garnish</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>In a glass, combine Chili Beverage&apos;s Apple & Guava sparkling water, fresh lime juice, and honey (if using). Stir gently to mix.</li>
              <li>Add ice cubes to the glass.</li>
              <li>Garnish with thinly sliced apple and guava.</li>
              <li>Garnish with fresh orange slices.</li>
            </ul>
            <p className="med-text title greytext">All day, any day with this Apple & Guava!</p>
          </div>
        </div>

        <div className="flex row greybacked section">
          <Image src={applecocktail} alt="Chili B." width={634} />
          <div className="copy-block">
            <h2 className="med-text">Guava-Apple Sparkling Margarita:</h2>
            <p className="med-text title">Ingredients:</p>
            <ul>
              <li>1 can (12 oz) of Chili&nbsp;B. Apple & Guava sparkling water</li>
              <li>2 oz tequila</li>
              <li>1 oz triple sec or orange liqueur</li>
              <li>1 tablespoon fresh lime juice</li>
              <li>Agave syrup or honey to rim the glass (optional)</li>
              <li>Salt or sugar for rimming the glass (optional)</li>
              <li>Lime wedges for garnish</li>
              <li>Ice cubes</li>
            </ul>

            <p className="med-text title">Instructions:</p>
            <ul>
              <li>If desired, rim the glass with salt or sugar: Rub the rim of a glass with a lime wedge, then dip the rim into a shallow plate of salt or sugar to coat.</li>
              <li>In a cocktail shaker, combine the Apple & Guava drink, tequila, triple sec or orange liqueur, and fresh lime juice.</li>
              <li>Add ice to the shaker and shake well until chilled.</li>
              <li>Strain the mixture into the prepared glass.</li>
              <li>Garnish with additional fresh fruit slices, if desired.</li>
            </ul>
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
  )
}
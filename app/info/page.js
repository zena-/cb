'use client'
import React from "react";
import Link from "next/link";
import {useState} from 'react'

import Image from "next/image";
import logo from '/public/logo.png'
import logoFooter from '/public/logo-footer.png'
import tagFooter from '/public/tag-footer.png'
import mag from '/public/mag.png'
import ash from '/public/ash.png'
import lemonbalm from '/public/lemonbalm.png'
import rosehips from '/public/rosehips.png'
import mint from '/public/mint.png'
import mail from '/public/mail-icon.png'
import instIcon from '/public/insta-icon.png'

export default function Info() {
  const [isDrop, setIsDrop] = useState(false)
  const showClick = event => setIsDrop(current => !current)
	return (
    <main className="info ">
    	<section className="hero hero-info section">
        <div className="hero-inner">
          <nav className="flex white-text">
            <div className="linkOne flex">
              <div className="drop" onClick={showClick}>Discover
                <ul className={isDrop ? "show dropdown" : "dropdown"}>
                  <li className="pink drop-li"><Link href="/magnesium">Magnesium</Link></li>
                  <li className="purple drop-li"><Link href="/ashwagandha">Ashwagandha</Link></li>
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
          <h1 className="bold white-copy uppercase">where wellness <br/>meets refreshment</h1>
        </div>
      </section>

      <section className="section">
        <p><span className="med-text">Immerse yourself in the essence of indulgence</span> as you discover our meticulously formulated functional beverage. Blending the purest real fruit juice with exquisite ingredients like magnesium or ashwagandha, our beverage is a symphony of flavor and wellness. Complemented by botanical treasures such as rose hips and lemon balm, each bottle offers a journey of sensory delight and rejuvenation.</p>
        <p>Our ingredients are carefully chosen for their proven benefits, from promoting relaxation to enhancing cognitive function and supporting overall well-being. With Chili B. you&apos;re not just savoring a drink; you&apos;re embracing a lifestyle of opulent wellness.</p>
      </section>

      <section className="flex row img-left section">
        <Image src={mag} alt="Chili B." width={420} />
      	<div className="copy-block">
          <h2 className="med-text">Magnesium</h2>
          <p>An essential mineral that plays a crucial role in numerous bodily functions. Some of the known benefits of adding magnesium to your diet include:</p>
          <p><span className="med-text">Supporting Heart Health:</span> Magnesium helps regulate blood pressure and maintain a steady heartbeat, thus reducing the risk of cardiovascular diseases like hypertension and heart arrhythmias.</p>
          <p><span className="med-text">Regulating Blood Sugar Levels:</span> Magnesium is involved in insulin metabolism, aiding in the regulation of blood sugar levels.</p>
          <p><span className="med-text">Relieving Muscle Cramps and Spasms:</span> Magnesium plays a role in muscle function and relaxation.</p>
          <p><span className="med-text">Reducing Stress and Anxiety:</span> Magnesium has calming effects on the nervous system and may help reduce stress and anxiety levels. It modulates neurotransmitters and hormones involved in mood regulation, promoting a sense of relaxation and well-being.</p>
          <p><span className="med-text">Enhancing Exercise Performance:</span> Magnesium plays a role in energy metabolism and muscle function, making it important for physical performance. Supplementing with magnesium may improve exercise performance and recovery.</p>
        </div>
      </section>

      <section className="flex row img-right section">
        <div className="copy-block">
          <h2 className="med-text">Ashwagandha</h2>
          <p>An ancient medicinal herb known for its adaptogenic properties, meaning it helps the body manage stress and maintain balance. Here are some of the known benefits of adding ashwagandha to your diet:</p>
          <p><span className="med-text">Stress Reduction:</span> Ashwagandha has been shown to reduce levels of cortisol, the stress hormone, thereby mitigating the body&apos;s stress response.</p>
          <p><span className="med-text">Improved Mood:</span> May help reduce symptoms of depression and anxiety by regulating neurotransmitters like serotonin and dopamine, which play key roles in mood regulation.</p>
          <p><span className="med-text">Enhanced Cognitive Function:</span> Studies suggest that ashwagandha may improve cognitive function, including memory, focus, and attention span.</p>
          <p><span className="med-text">Increased Energy Levels:</span> While not a stimulant like caffeine, it may help improve energy levels and combat fatigue by supporting adrenal gland function.</p>
          <p><span className="med-text">Enhanced Physical Performance:</span> Some research suggests that ashwagandha may improve physical performance and strength, making it popular among athletes and fitness enthusiasts looking to boost their workouts and recovery.</p>
        </div>
        <Image src={ash} alt="Chili B." width={420} />
      </section>

      <section className="flex row img-left section">
        <Image src={lemonbalm} alt="Chili B." width={420} />
        <div className="copy-block">
          <h2 className="med-text">Lemon Balm</h2>
          <p>Lemon balm is a herb from the mint family with a long history of medicinal use. Some of the known benefits of adding lemon balm to your diet include:</p>
          <p><span className="med-text">Stress Reduction:</span> Renowned for its calming properties and ability to reduce anxiety and promote relaxation. It contains compounds that interact with neurotransmitters in the brain, helping to alleviate stress and improve mood.</p>
          <p><span className="med-text">Immune Support:</span> Some studies suggest that lemon balm may have immune-boosting properties, helping to strengthen the body&apos;s defenses against infections and illnesses.</p>
          <p><span className="med-text">Cognitive Support:</span> Research suggests that lemon balm may have cognitive-enhancing effects, including improved memory and concentration.</p>
          <p><span className="med-text">Antioxidant Properties:</span> Contains antioxidants that help protect cells from oxidative stress and damage caused by free radicals.</p>
          <p><span className="med-text">Skin Health:</span> Lemon balm has been used topically to soothe skin irritations and promote healing. Consuming lemon balm internally may also support skin health by reducing inflammation and oxidative damage.</p>
        </div>
      </section>

      <section className="flex row img-right section">
        <div className="copy-block">
          <h2 className="med-text">Rose Hips</h2>
          <p>Rose hips, the fruit of the rose plant, are rich in vitamins, antioxidants, and other beneficial compounds. Some of the known benefits of adding rose hips to your diet include:</p>
          <p><span className="med-text">High in Vitamin C:</span> Rose hips are one of the richest plant sources of vitamin C, which is essential for immune function, collagen synthesis, and skin health. Consuming rose hips can help boost immunity and protect against infections.</p>
          <p><span className="med-text">Antioxidant Powerhouse:</span> Contain a variety of antioxidants, including flavonoids, polyphenols, and carotenoids, which help neutralize free radicals and reduce oxidative stress.</p>
          <p><span className="med-text">Skin Benefits:</span> The high vitamin C content and antioxidant properties can help improve skin tone, texture, and elasticity, while also reducing the appearance of wrinkles and fine lines.</p>
          <p><span className="med-text">Boosted Immunity:</span> Alongside vitamin C, rose hips contain other immune-supportive nutrients like vitamin A, vitamin E, and zinc. These nutrients help strengthen the immune system and enhance the body&apos;s ability to fight off infections and illnesses.</p>
        </div>
        <Image src={rosehips} alt="Chili B." width={420} />
      </section>

      <section className="flex row img-left section">
        <Image src={mint} alt="Chili B." width={420} />
        <div className="copy-block">
          <h2 className="med-text">Mint</h2>
          <p>A versatile herb that offers several health benefits when added to your diet. Some of the known benefits of incorporating mint into your diet include:</p>
          <p><span className="med-text">Stress Reduction:</span> Mint has a calming effect on the nervous system and may help reduce stress and anxiety.</p>
          <p><span className="med-text">Antioxidant Properties:</span> Mint contains potent antioxidants, including rosmarinic acid, that help protect cells from damage caused by free radicals.</p>
          <p><span className="med-text">Improved Digestion:</span> Mint is known for its ability to soothe digestive issues such as indigestion, bloating, and gas. It helps relax the muscles of the digestive tract, promoting the flow of bile and aiding in the digestion of fats.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="flex">
          <Link href="/"><Image src={logoFooter} alt="Chili B." width={230} /></Link>
          <Image src={tagFooter} alt="Chili B." className="tag" width={350} />
        </div>
        <div className="flex border footerMid white-copy">
          <div className="flex row">
            <Link href="mailto:zena@chilibeverage.com" className="flex mail">
              <Image src={mail} alt="Chili B." />
            </Link>
            <Link href="https://instagram.com/chili_beverage" target="_blank" className="flex mail instLink">
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
'use client'
import styles from './page.module.scss';
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';
import './globals.css';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
        <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
          17 year old student with a passion for design and gaming.
        </p>
      </motion.div>

      <div className={styles.title}>
        <h1>Daniel Game</h1>
          {/* <a href="#" className="button">
          <div className="button__content">
            <span className="button__text">About Me</span>
            <div className="button__reflection-1"></div>
            <div className="button__reflection-2"></div>
          </div>

          <img src="VSC_Repo/Portfolio_Website/Index_Page/Works/public/img/star.png" alt="" className="button__star-1" />
          <img src="VSC_Repo/Portfolio_Website/Index_Page/Works/public/img/star.png" alt="" className="button__star-2" />
          <img src="VSC_Repo/Portfolio_Website/Index_Page/Works/public/img/circle.png" alt="" className="button__circle-1" />
          <img src="VSC_Repo/Portfolio_Website/Index_Page/Works/public/img/circle.png" alt="" className="button__circle-2" />
          <img src="VSC_Repo/Portfolio_Website/Index_Page/Works/public/img/diamond.png" alt="" className="button__diamond" />
          <img src="VSC_Repo/Portfolio_Website/Index_Page/Works/public/img/triangle.png" alt="" className="button__triangle" />

          <div className="button__shadow"></div>
        </a> */}
      </div>

      <div class="sizing">
        <div class="container">
        <a href="#" class="button">
          <div class="button__content">
            <span class="button__text">About Me</span>
            <div class="button__reflection-1"></div>
            <div class="button__reflection-2"></div>
          </div>

          <img src="./img/star.png" alt="" class="button__star-1" />
          <img src="./img/star.png" alt="" class="button__star-2" />
          <img src="./img/circle.png" alt="" class="button__circle-1" />
          <img src="./img/circle.png" alt="" class="button__circle-2" />
          <img src="./img/diamond.png" alt="" class="button__diamond" />
          <img src="./img/triangle.png" alt="" class="button__triangle" />

          <div className="button__shadow"></div>
        </a>
        </div>
        </div>

    </main>
  )
}

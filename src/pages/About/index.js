import React from "react";
import clsx from "clsx";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import ScrollToMiddle from '../../components/GlobalFunctions/ScrollToMiddle'

const cx = classNames.bind(styles);
export default function About() {
  return (
    <section className={styles.main}>
      <ScrollToMiddle />
      <div className={styles.firstScrip}>
        <div className={styles.headline}>
          <h2 className={styles.title}>Welcome!</h2>
          <p>
              Find all the information you need about Innersloth, our games,
              assets, and everything else.
          </p>
        </div>

        <div className={styles.press}>
          <div className={styles.pressBlock}>
            <h2 className={clsx(styles.title, styles.headline)}>
              About Innersloth
            </h2>
            <p>
              Innersloth is a small independent game studio most notable for
              creating Among Us and The Henry Stickmin Collection. Founded by
              Forest Willard and Marcus Bromander in 2015, they made the games
              they wanted to and hoped people would want to play them. After
              numerous awards, global press coverage, and millions of downloads,
              Innersloth can now confirm at least 4 people have played their
              games. Nice.
            </p>
            <p>
              Innersloth is mainly based around Seattle, USA, but has employees
              and partners all across the globe.
            </p>
          </div>

          <div className={styles.pressBlock}>
            <h2 className={clsx(styles.title, styles.headline)}>History</h2>
            <p>
              After meeting in college, Forest Willard and Marcus Bromander
              created Innersloth as a partnership in 2015 to release Dig2China.
              They worked part time on several unreleased games (T_T) until
              finally going full-time indie in late 2018 for Among Us. Marcus,
              best known online as PuffballsUnited, is also the creator of the
              Henry Stickmin series on Newgrounds, which started in 2008.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.secondScript}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nha-trang-nature-elite.appspot.com/o/Images%20For%20Logo%20-%20Sliders%20-%20Other%2FLogo%20-%20Banner%20-%20Cover%20Image%2Fbackground.png?alt=media&token=1b455e43-a143-47d2-a864-0a71c76d08a8&_gl=1*1yc29x1*_ga*ODIxNzI4MDkuMTY4NDA3OTMxMQ..*_ga_CW55HF8NVT*MTY4NjI0OTE3OC4xNS4xLjE2ODYyNDkyMDUuMC4wLjA."
          alt=""
        />
      </div>
    </section>
  );
}

import React from "react";
import clsx from "clsx";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import ScrollToMiddle from '../../components/GlobalFunctions/ScrollToMiddle'

const cx = classNames.bind(styles);
export default function About() {
  return (
    <section className={styles.main}>
      <ScrollToMiddle />
      <div className={styles.firstScript}>
        <div className={styles.headline}>
          <h1 className={clsx(styles.title)}>Contact</h1>
        </div>

        <div className={clsx(styles.formInput)}>
          <div className="form-group">
            <label for="Name">
              Full name
            </label>
            <input className={clsx(styles.formControl)} />
            <span className="text-danger field-validation-valid"></span>
          </div>

          <div className="form-group">
            <label for="Email">Email</label>
            <input className={clsx(styles.formControl)} />
            <span className="text-danger field-validation-valid"></span>
          </div>

          <div className="form-group">
            <label for="PhoneNumber">
              Phone
            </label>
            <input className={clsx(styles.formControl)} />
            <span className="text-danger field-validation-valid"></span>
          </div>

          <div className="form-group">
            <label for="Content">
              Contribute ideas for MovieNHK
            </label>
            <textarea className={clsx(styles.formTextArea)}></textarea>
            <span className="text-danger field-validation-valid"></span>
          </div>

          <button type="submit" className="btn btn-pink btn-submit">
            Submit
          </button>
        </div>
      </div>

      <div className={styles.secondScript}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/movie-nhk.appspot.com/o/Blue%20and%20White%20Modern%20Minimalistic%20About%20Us%20Instagram%20Story.svg?alt=media&token=a0ee3e4c-72a9-4e3f-a37b-624f355e1e04"
          alt=""
        />
      </div>
    </section>
  );
}

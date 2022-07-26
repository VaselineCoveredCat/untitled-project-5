import React from "react";
import Head from "next/head";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Us - Untitled Project 5</title>
      </Head>

      <main className={styles.main}>
        <article className={styles.article}>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={8}></textarea>
            </div>

            <button
              onClick={(event) => {
                event.preventDefault();
              }}
              type="submit"
            >
              Send
            </button>
          </form>
        </article>
      </main>
    </React.Fragment>
  );
}

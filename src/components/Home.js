import React from 'react';
import Header from './Header';
import styles from '../components/css/Home.css';

export default function Home() {
  return (
    <>
    <Header />
    <main className={styles.main}>
      <article>
        <h1>Hi, I'm Carmen. </h1>
        <p>I am a Developer who enjoys being at the intersection of consumers and technology, while creating applications that fit both business and consumer needs. </p>
      </article>
    </main>
    </>
  );
}

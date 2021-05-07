import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Head from "next/head";
import styles from "../styles/Home.module.css";

const languages = [ 'python', 'node', 'java', 'c', 'c++' ]
const messages = [ 'connect to server', 'swap two variables', 'print hello world', 'save files', 'debug a current file' ]
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState({
    loading: false,
    text: ''
  });

  const { register, handleSubmit } = useForm();

  useEffect(()=>{
    let index = 0
    setInterval(()=>{
      setIndex(++index % languages.length)
    }, 2000);
  }, []);

  const onSubmit = (data) => {
    setResult({
      loading: true,
      text: ''
    });
    axios.post(`/api/search`, data)
    .then(res=>res.data)
    .then(data=>setResult({
      loading: false,
      text: data
    }));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>하우두아이</title>
        <meta name="description" content="코딩 질문 봇" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>하우두아이</h1>

        <p className={styles.description}>
          <code className={styles.code}>{ languages[index].capitalize() }</code> 에 관해 물어보세요!
        </p>

        <p>How do i ..</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input placeholder={ messages[index] } {...register('text')} className={styles.input} name="text"></input>
          <select {...register('lang')} className={styles.input} name="lang">
            {languages.map((lang, index)=><option key={index} value={lang}>{lang.capitalize()}</option>)}
          </select>
        </form>

        <pre className={styles.result}>
          {result.loading?'loading...':result.text}
        </pre>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <a target="_blank" href="https://github.com/gleitz/howdoi">howdoi</a>
          </span>
        </a>
      </footer>
    </div>
  );
}

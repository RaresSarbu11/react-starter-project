/*import Image from "next/image" ;
import styles from "./page.module.css";

export default function Home() {
  return (
   <div className="container">
          <div className="column">

            <h2>Coloana 1</h2>
            <ol>
          <li>
             <code>src/app/page.tsx</code>.
          </li>
             <li>Save and see your changes instantly.</li>
             <li>Save and see your changes instantly.</li>
             <li>Save and see your changes instantly.</li>
             <li>Save and see your changes instantly.</li>
             <li>Save and see your changes instantly.</li>
          </ol>
          </div>
          <div className="column">

            <h2>Coloana 2</h2>
            <ol>
          <li>
             <code>src/app/page.tsx</code>.
          </li>
             <li>Save </li>
             <li>Save </li>
             <li>Save </li>
             <li>Save </li>
             <li>Save and see your changes instantly.</li>
          </ol>
          </div>
    </div>
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />  
        <div className={styles.ctas}>
        
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/car.jpeg"
            alt="File icon"
            width={128}  
            height={64}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={32}
            height={32}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={32}
            height={32}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Adăugăm layout-ul cu două coloane */}
        <div className={styles.container}>
          <div className={styles.column}>
            <h2>Coloana 1</h2>
            <ol>
              <li>
                <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
              <li>Save and see your changes instantly.</li>
              <li>Save and see your changes instantly.</li>
              <li>Save and see your changes instantly.</li>
              <li>Save and see your changes instantly.</li>
            </ol>
          </div>
          <div className={styles.column}>
            <h2>Coloana 2</h2>
            <ol>
              <li>
                <code>src/app/page.tsx</code>.
              </li>
              <li>Save </li>
              <li>Save </li>
              <li>Save </li>
              <li>Save </li>
              <li>Save and see your changes instantly.</li>
            </ol>
          </div>
        </div>

        {/* CTA - Call to Action */}
        <div className={styles.ctas}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/car.jpeg"
            alt="File icon"
            width={128}
            height={64}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={32}
            height={32}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={32}
            height={32}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

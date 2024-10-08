

import Navbar from "../page";

import styles from './about.module.css';
import Image from 'next/image';

 function Aboutpage() {
  return (
    <div>
        <Navbar/>
        
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/girl.jpeg" 
            alt="About Us Image"
            width={300}
            height={200}
            className={styles.image}
          />
        </div>
        <h2 className={styles.abc}>About Us</h2>
        <p className={styles.des}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aspernatur libero porro voluptatem quia necessitatibus similique laudantium vel, possimus nostrum eos est a illo eum ut velit! Modi, porro velit!
        </p>
      </div>
    </section>
    </div>
  );
}
export default Aboutpage;
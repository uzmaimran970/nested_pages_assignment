// pages/services.js
import styles from "./services.module.css"
import Navbar from "../page";

const Services = () => {
  return (

    <div>
        <Navbar/>
    <div className={styles.container}>
      <div className={styles.serviceItem}>
        <img src="/digi.jpeg" alt="Service 1" className={styles.image} />
        <h2 className={styles.title}>Degital marketing</h2>

        <p className={styles.abc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque animi aperiam eos officia dolorum iusto non quidem consequuntur, saepe at nobis blanditiis temporibus molestiae repellat quod culpa corporis expedita? Repellendus!</p>
        <a href="/services/degi-marketing">Click here</a>



        
      </div>
      <div className={styles.serviceItem}>
        <img src="./web.jpeg" alt="Service 2" className={styles.image} />
        <h2 className={styles.title}>Web development</h2>

        <p className={styles.abc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus animi, accusantium earum libero quas incidunt, excepturi autem impedit sequi beatae quibusdam obcaecati quaerat necessitatibus ducimus quo minus saepe voluptatem velit?</p>
      </div>
      <div className={styles.serviceItem}>
        <img src="/edit.jpeg" alt="Service 3" className={styles.image} />
        <h2 className={styles.title}>Video editing</h2>

        <p className={styles.abc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem excepturi illum quidem assumenda in facilis reiciendis quos vero dolor voluptatibus natus, aliquid aut quisquam unde? Culpa laboriosam officia dolorem!</p>
      </div>
    </div>
    </div>
  );
};

export default Services;

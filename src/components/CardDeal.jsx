import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Buttons";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit laoreet finibus. Quisque placerat accumsan ligula, quis
        eleifend nisi fringilla eu.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;

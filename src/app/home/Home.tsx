import { HomeOurEntity } from "../../entities/homeOurEntity";
import { PortfolioCard } from "../../features/portfolioCard";
import CustomButton from "../../shared/components/myButton/CustomButton";
import MyInput from "../../shared/components/myInput/MyInput";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_wrap}>
      <div className={styles.home_background}>
        <img src="/img/bg-image.jpg" alt="home_bg" />
      </div>
      <div className={styles.home_title}>
        <h1>
          Create<b>X</b>
        </h1>
        <h1>Constraction</h1>
        <div className={styles.home_text_content}>
          Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
          dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
          pellentesque integer ipsum elementum felis.
        </div>
        <div className={styles.home_action_wrap}>
          <CustomButton classes={styles.home_action_transparent_btn}>
            LEARN MORE ABOUT US
          </CustomButton>
          <CustomButton>SUBMIT REQUEST</CustomButton>
        </div>
      </div>
      <div className={styles.home_video}>
        <h3 className={styles.home_video_title}>
          We are Createx Construction Bureau{" "}
        </h3>
        <p className={styles.home_video_text}>
          We are rightfully considered to be the best construction company in
          the USA.
        </p>
        <img src="/img/video.jpg" alt="video" />
      </div>
      <div className={styles.home_values}>
        <h3 className={styles.home_values_title}>Our core values</h3>
        <p className={styles.home_values_text}>
          Our mission is to set the highest standards for construction sphere.
        </p>
        <div className={styles.home_values_content}>
          <HomeOurEntity
            icon="/img/ic-like.png"
            title="Quality"
            content="Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."
          />
          <HomeOurEntity
            icon="/img/ic-hand.png"
            title="Safety"
            content="Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."
          />
          <HomeOurEntity
            icon="/img/ic-slippers.png"
            title="Comfort"
            content="Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."
          />
        </div>
      </div>
      <div className={styles.home_request_form_wrap}>
        <h3>Want to know more? Ask us a question:</h3>
        <form>
          <MyInput
            type="text"
            name="name"
            labelText="Name"
            classes=""
            onChange={() => {}}
            placeholder="Your name"
            value=""
          />
          <MyInput
            type="number"
            name="phone"
            labelText="Phone"
            classes=""
            onChange={() => {}}
            placeholder="Your phone"
            value=""
          />
          <MyInput
            type="textarea"
            name="message"
            labelText="Message"
            classes=""
            onChange={() => {}}
            placeholder="Your message"
            value=""
          />
          <CustomButton classes={styles.form_btn} children="SEND" />
        </form>
      </div>
      <div className={styles.home_srvices_wrap}>
        <h2>Our services</h2>
        <p>
          Createx Construction Bureau is a construction giant with a full range
          of construction services.
        </p>
        <div className={styles.home_srvices_works}>
          <HomeOurEntity
            icon="/img/ic-construction.png"
            title="Construction"
            classes={styles.home_srvices_work}
          />
          <HomeOurEntity
            icon="/img/ic-plan.png"
            title="Project Development"
            classes={styles.home_srvices_work}
          />
          <HomeOurEntity
            icon="/img/ic-pantone.png"
            title="Interior Design"
            classes={`${styles.home_srvices_work} ${styles.home_srvices_work_dark}`}
          />
          <HomeOurEntity
            icon="/img/ic-painting.png"
            title="Repairs"
            classes={styles.home_srvices_work}
          />
        </div>
        <div className={styles.home_services_info}>
          <h3>Learn more about our services</h3>
          <CustomButton classes={styles.home_services_btn}>
            VIEW SERVICES
          </CustomButton>
        </div>
      </div>
      <div className={styles.home_portfolio_wrap}>
        <h2>Browse our selected projects and learn more about our work</h2>
        <div className={styles.home_portfolio_projects_wrap}>
          <PortfolioCard
            image="/img/por_img.jpg"
            title="Red Finger Building"
            text="Business Centers"
            path=""
          />
          <PortfolioCard
            image="/img/por_img2.jpg"
            title="Red Finger Building"
            text="Business Centers"
            path=""
          />
          <PortfolioCard
            image="/img/por_img3.jpg"
            title="Red Finger Building"
            text="Business Centers"
            path=""
          />
        </div>
        <div className={styles.home_portfolio_info}>
          <h3>Explore all our works</h3>
          <CustomButton>VIEW PORTFOLIO</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Home;

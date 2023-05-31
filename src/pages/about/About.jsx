import React from "react";
import CommonSection from "../../components/commonSection/CommonSection";
import Helmet from "../../components/helmet/Helmet";
import "./about.scss";
import logo from "../../assets/images/logo.png";
import bulb from "../../assets/images/bulb.png";
import circle from "../../assets/images/circle.png";
import profile from "../../assets/images/profile.png";
import circleOutline from "../../assets/images/circle-outline.png";

const About = () => {
  const cards = [
    {
      img: bulb,
      title: "Strategic Approach",
      desc: "Our work process involves having everything on paper(digitally) before we start",
    },
    {
      img: circle,
      title: "Prompt Service",
      desc: "No matter your deadline, we’re pros at completing projects well within time",
    },
    {
      img: profile,
      title: "Rapid Response",
      desc: "Our rapid response team ensures you’re in the loop about your project’s updates",
    },
    {
      img: circleOutline,
      title: "Value For Money",
      desc: "We make sure every buck you spend is well-spent",
    },
  ];

  return (
    <div>
      <Helmet title={"About-Us"} />
      <CommonSection title={"About Us"} />

      <section className="about">
        <div className="head">
          <h3>Revolutionize Brands</h3>
          <h2>With Our Digital Push, Igniting Limitless Possibilities</h2>
          <p>All your IT solutions in one place</p>
        </div>

        <div className="content">
          <div className="info">
            <img src={logo} alt="logo" />
            <h3>Who We Are?</h3>
            <p>
              Welcome to Code and Design Group, where innovation meets
              excellence in the world of IT solutions and services. We are a
              passionate team dedicated to transforming your ideas into powerful
              digital experiences that drive your success. With a firm belief in
              the power of technology, we strive to be your trusted partner in
              navigating the rapidly evolving digital landscape. Our mission is
              to empower businesses, small or large, to leverage the full
              potential of IT solutions for growth, efficiency, and enhanced
              customer experiences.
              <br />
              <br />
              At Code and Design Group, we bring together a diverse team of
              highly skilled professionals who are experts in their respective
              fields. From software development and web design to digital
              marketing and cloud solutions, our team has the expertise and
              creativity to tackle any challenge.
              <br />
              <br />
              We take pride in our client-centric approach, placing your unique
              needs and goals at the forefront of everything we do. We
              collaborate closely with you, ensuring that our solutions are
              tailored to your specific requirements and aligned with your
              business objectives. Your success is our success, and we go above
              and beyond to exceed your expectations.
              <br />
              <br />
              Join hands with Code and Design Group and embark on a journey of
              innovation, growth, and digital transformation. Let us be the
              catalyst that propels your business to new heights, delivering
              cutting-edge solutions and unmatched customer service every step
              of the way.
              <br />
              <br />
              Together, we can shape a future where technology becomes your
              competitive advantage. Get in touch with us today and experience
              the Code and Design Group difference.
            </p>
          </div>

          <hr
            style={{
              width: "80%",
              backgroundColor: "rgba(0, 0, 0, 0.288)",
              margin: "0 auto 50px auto",
            }}
          />

          <div className="cards-section">
            <h3>Why Choose Us?</h3>
            <h2>We Connect Ideas with Creativity</h2>
            <p>
              Passion and purpose are the key factors driving us forward. The
              surpassing customer support certainly proves that
            </p>

            <div className="about-cards">
              {cards.map((item, index) => (
                <div className="about-card" key={index}>
                  <img src={item.img} alt="icon" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import Helmet from "../../components/helmet/Helmet";
import Hero from "../../components/hero/Hero";
import "./home.scss";
import vision from "../../assets/images/vision.png";
import PortfolioGallery from "../../components/portfolioGallery/PortfolioGallery";
import ServiceCard from "../../components/service-card/ServiceCard";
import Carousel from "react-elastic-carousel";
import { serviceCardsData } from "../../assets/data/serviceCardsData";
import ContactModal from "../../components/contact-modal/ContactModal";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1650, itemsToShow: 4 },
  ];

  const [modal, setModal] = useState(false);
  return (
    <div className="home">
      <Helmet title={"Home"} />
      <Hero />

      {/* SERVICES */}
      <section>
        <div className="text">
          <h3>Services</h3>
          <h2>
            The One-stop digital marketing agency that meets all your online
            needs
          </h2>
          <p>
            Worried about the online performance of your business? Don’t be. We
            know how to increase your brand’s awareness resulting in
            unparalleled success.
          </p>
        </div>
        <div className="service-list">
          <Carousel breakPoints={breakPoints} showArrows={false}>
            {serviceCardsData.map((service, index) => (
              <ServiceCard
                title={service.title}
                desc={service.desc}
                mainImg={service.mainImg}
                index={index}
                id={service.id}
              />
            ))}
          </Carousel>
        </div>
      </section>

      {/* projects */}
      <section className="portfolio">
        <div className="text">
          <h3>Projects</h3>
          <h2>Have A Look at Some of Our Exceptional Projects</h2>
          <p>Your Satisfaction Is What Encourages Us to Do Even Better</p>
        </div>
        <PortfolioGallery />
      </section>

      {/* VISION */}
      <section className="vision">
        <div className="left">
          <h2>We Bring Your Vision to Life</h2>
          <p>
            Starting a new business may seem effortless, but sustaining it is
            where many organizations stumble. The key often lies in prioritizing
            digital marketing. That's where our expertise comes into play. At
            Design Genious, we take pride in guiding businesses from inception
            to success. Our unwavering commitment to delivering comprehensive
            solutions sets you apart from competitors. With a range of digital
            marketing services and exceptional customer support, Design Genious
            understands your unique needs and converts them into exceptional
            results
          </p>
          <button onClick={() => setModal(true)}>Get an Instant Quote</button>
        </div>
        <div className="right">
          <img src={vision} alt="vision" />
        </div>
      </section>

      {modal && <ContactModal setModal={setModal} />}

      {/* YOUTUBE-VIDEO */}
      {/* <section>
        <div className="video">
          <iframe
            width="760"
            height="428"
            src="https://www.youtube.com/embed/04yRY4QZj6s"
            title="All-In-One Creative Digital Agency For Brands That Mean Business"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}
    </div>
  );
};

export default Home;

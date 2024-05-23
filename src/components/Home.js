import React from "react";

import Pin from "../img/pin.png";
import Zanibar from "../img/zanzibar.jpeg";
import Serengeti from "../img/serengeti.jpeg";
import Victoria from "../img/victoriaFalls.webp";
import Beaches from "../img/beaches.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <h2>SAFARI QUEST</h2>
        <h1>
          WHERE TASTE <br />
          MEETS <br />
          ADVENTURE
        </h1>
        <p>Taste the World, Explore the Flavours of Travel</p>
      </div>

      <div className="content">
        <h4>Welcome to Food and Travel Adventures!</h4>

        <p>
          Embark on a culinary journey around the globe and discover the
          mouthwatering flavors of different cuisines.
        </p>
        <p>
          Explore our collection of delicious recipes inspired by diverse
          cultures and regions. From Italian pasta dishes to spicy Indian
          curries, there's something for every plate.
        </p>
        <p>
          Additionally, dive into our travel guides and experience the beauty of
          breathtaking destinations. Whether you're craving a culinary adventure
          or seeking wanderlust inspiration, you'll find it here at Safari Quest
        </p>

        <p className="blog">
          Don't forget to check out our
          <a href="/blog" title="blog">
            blog
          </a>
          page to share your travel and food experiences with others!{" "}
        </p>
      </div>

      <div className="popular">
        <h3>Popular Destinations</h3>
        <div className="pDests">
          <div className="destDetails">
            <h2>Victoria Falls </h2>
            <img src={Victoria} alt="Victoria falls" />
          </div>

          <div className="destDetails">
            <p>
              Victoria Falls straddles the border between Zambia and Zimbabwe.
              Known locally as "Mosi-oa-Tunya" or "The Smoke That Thunders,"
              <br />
              The falls create a mesmerizing spray that can be seen from miles
              away.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card__header">
            <div className="card__picture">
              <div className="card__picture-overlay">&nbsp;</div>
              <img src={Zanibar} alt="food" className="card__picture-img" />
            </div>
          </div>

          <div className="card__details">
            <h4 className="card__sub-heading">World Cuisine</h4>
            <p className="card__text">
              Experience a diverse array of culinary traditions and practices
              from various cultures around the globe.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Zanibar</p>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <div className="card__picture">
              <div className="card__picture-overlay">&nbsp;</div>
              <img
                src={Serengeti}
                alt="wild life"
                className="card__picture-img"
              />
            </div>
          </div>

          <div className="card__details">
            <h4 className="card__sub-heading">Wild Life</h4>
            <p className="card__text">
              An immersive and unforgettable experience for nature lovers and
              wildlife enthusiasts, appreciate the beauty and diversity of our
              planet's ecosystems.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Tanzania</p>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <div className="card__picture">
              <div className="card__picture-overlay">&nbsp;</div>
              <img
                src={Beaches}
                alt="Beach Hotels"
                className="card__picture-img"
              />
            </div>
          </div>

          <div className="card__details">
            <h4 className="card__sub-heading">Beach Hotels</h4>
            <p className="card__text">
              Accommodations located along coastlines, offering guests easy
              access to the beach and scenic ocean views. These often feature
              amenities designed to enhance the seaside experience.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">USA</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;

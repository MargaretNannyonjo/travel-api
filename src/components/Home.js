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
        <h1>SAFARI QUEST</h1>
        <h6>
          WHERE TASTE <br />
          MEETS <br />
          ADVENTURE
        </h6>
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
          Don't forget to check out our <a href="/blog">blog</a> page to share
          your travel and food experiences with others!{" "}
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
        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img src={Zanibar} alt="Beach Hotel" class="card__picture-img" />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">World Cuisine</h4>
            <p class="card__text">
              Experience a diverse array of culinary traditions and practices
              from various cultures around the globe.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Zanibar</p>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                src={Serengeti}
                alt="Yellowstone National Park"
                class="card__picture-img"
              />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">Wild Life</h4>
            <p class="card__text">
              An immersive and unforgettable experience for nature lovers and
              wildlife enthusiasts, appreciate the beauty and diversity of our
              planet's ecosystems.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Tanzania</p>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                src={Beaches}
                alt="Yellowstone National Park"
                class="card__picture-img"
              />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">Beach Hotels</h4>
            <p class="card__text">
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

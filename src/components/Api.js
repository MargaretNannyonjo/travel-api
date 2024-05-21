import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./img/image.jpeg";

function Api() {
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState("");
  const [photos, setPhotos] = useState({});

  const apiKey = "fsq3LVsxz++UHYxrZwLbFD+Q0VVyo41nrxXPSVO0dNv4l4k=";

  function handleSubmit(event) {
    event.preventDefault();
    // No need to setLocation here, as it is already handled in updateLocation
  }

  function updateLocation(event) {
    setLocation(event.target.value);
  }

  useEffect(() => {
    if (location.trim() === "") return;

    const searchPlaces = async () => {
      const options = {
        method: "GET",
        url: "https://api.foursquare.com/v3/places/search",
        params: { query: location, near: location },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`, // Corrected authorization format
        },
      };

      try {
        const response = await axios.request(options);
        console.log("Fetching data:", response.data);
        setPlaces(response.data.results); // Adjust according to API response structure
      } catch (error) {
        console.error("Error:", error);
      }
    };

    searchPlaces();
  }, [location]); // Add location as a dependency

  useEffect(() => {
    const fetchPhotos = async (fsqId) => {
      const options = {
        method: "GET",
        url: `https://api.foursquare.com/v3/places/${fsqId}/photos`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`, // Corrected authorization format
        },
      };

      try {
        const response = await axios.request(options);
        console.log(`Fetching photos for ${fsqId}:`, response.data);
        setPhotos((prevPhotos) => ({
          ...prevPhotos,
          [fsqId]: response.data,
        }));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    places.forEach((place) => {
      if (!photos[place.fsq_id]) {
        fetchPhotos(place.fsq_id);
      }
    });
  }, [places, apiKey, photos]);

  return (
    <div className="App">
      <div className>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search Places"
            value={location} // Add value to control the input
            onChange={updateLocation}
          />
          <input type="submit" value="Search" />
        </form>
      </div>

      <h1>Travel Api</h1>

      <div className="placeSearch">
        <div className="placesDiv">
          <h2>resources in Uganda</h2>

          <div className="placeDetails">
            <img src={Image} alt="" className="placesImg" />

            <p>
              Country: Uganda <br />
              uganda has more natural mineral resources than any other country
              in the world
            </p>
          </div>
        </div>

        <div className="placesDiv">
          <h2>resources in Uganda</h2>

          <div className="placeDetails">
            <img src={Image} alt="" className="placesImg" />

            <p>
              Country: Uganda <br />
              uganda has more natural mineral resources than any other country
              in the world
            </p>
          </div>
        </div>

        <div className="placesDiv">
          <h2>resources in Uganda</h2>
          <div className="placeDetails">
            <img src={Image} alt="" className="placesImg" />

            <p>
              Country: Uganda <br />
              uganda has more natural mineral resources than any other country
              in the world
            </p>
          </div>
        </div>
      </div>

      {/* 
      <div className="placeSearch">
        {places &&
          places.map((place) => (
            <div key={place.fsq_id}>
              <div className="placesDiv">
                <h2>{place.name}</h2>
                
                <div className="placeDetails">
                  <div className="placeLocation">
                    {place.categories && place.categories[0] && (
                      <img
                        className="placesImg"
                        src={`${place.categories[0].icon.prefix}32${place.categories[0].icon.suffix}`}
                        alt={place.categories[0].name}
                      />
                    )}
                    {photos[place.fsq_id] &&
                      photos[place.fsq_id].length > 0 && (
                        <img
                          className="placesImg"
                          src={`${photos[place.fsq_id][0].prefix}original${
                            photos[place.fsq_id][0].suffix
                          }`}
                          alt={place.name}
                        />
                      )}

                    
                  </div>

                  <div className="placeLocation">
                    
                    <p>Country: {place.location.country}</p>
                    <p>Distance: {place.distance} meters</p>
                    <p>Time Zone: {place.timezone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default Api;

import React, { useState, useEffect } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";

const Destination = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);

  // Set Mapbox access token
  mapboxgl.accessToken =
    "pk.eyJ1Ijoibi1tYWdnaWUiLCJhIjoiY2x2aHV6YjN2MTg0cjJpcGVvZmFjbXBocCJ9.eBPnNnvcBMWVb113kkroXw";

  // Initialize Mapbox map
  useEffect(() => {
    const mapInstance = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 1,
    });
    setMap(mapInstance);

    // Clean up function to remove map instance
    return () => {
      mapInstance.remove();
    };
  }, []);

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Search for places
  const searchPlaces = async () => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchTerm
        )}.json`,
        {
          params: {
            access_token: mapboxgl.accessToken,
          },
        }
      );

      // Extract coordinates and update map center
      const [longitude, latitude] = response.data.features[0].center;
      map.setCenter([longitude, latitude]);
      map.setZoom(10);

      // Set places data (optional)
      setPlaces(response.data.features);
    } catch (error) {
      console.error("Error searching places:", error);
    }
  };

  return (
    <div className="destination-page">
      <h1>Let's Travel</h1>

      <div className="places-search-container">
        <div className="search-places">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Search for places anywhere in the world..."
          />
          <button onClick={searchPlaces}>Search</button>
        </div>
      </div>

      <div id="map" style={{ width: "100%", height: "400px" }}></div>

      <div>
        {places.map((place) => (
          <div key={place.id}>
            <h3>{place.place_name}</h3>
            <span>{place.properties.address}</span>
            {/* Add other details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;

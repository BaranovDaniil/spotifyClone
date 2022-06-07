import axios from "axios";

export async function getShows(token) {
  /**
   * @return spotify shows - array of objects
   */
  const response = await axios.get(
    "https://api.spotify.com/v1/shows?market=ES&ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.shows;
}

/**
 * @return spotify albums - array of objects
 */
export async function getAlbums(token) {
  const response = await axios.get(
    "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.albums;
}

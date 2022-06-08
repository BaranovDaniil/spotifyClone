/**
 * @return spotify shows - array of objects
 */
export async function getShows(token) {
  const response = await fetch(
    "https://api.spotify.com/v1/shows?market=ES&ids=5CfCWKI5pZ28U0uOzXkDHe%2C5as3aKmN2k11yfDDDSrvaZ",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const responseData = await response.json();

  return responseData.shows;
}

/**
 * @return spotify albums - array of objects
 */
export async function getAlbums(token) {
  const response = await fetch(
    "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const responseData = await response.json();

  return responseData.albums;
}

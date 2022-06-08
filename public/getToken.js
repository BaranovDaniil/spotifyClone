const ClientId = "e14d450651814335ab621a03ae567fe4";
const ClientSecret = "306febff998a4014bccc7de1cb2cbda2";
/**
 * fetch spotify api token
 * @returns Spotify API token
 */
export async function token() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(ClientId + ":" + ClientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const responseData = await response.json();

  return responseData.access_token;
}

import axios from "axios";
import { Buffer } from "buffer";

const qs = require("qs");
const ClientId = "e14d450651814335ab621a03ae567fe4";
const ClientSecret = "306febff998a4014bccc7de1cb2cbda2";
const AuthToken = Buffer.from(`${ClientId}:${ClientSecret}`, "utf-8").toString(
  "base64"
);
/**
 *
 * @returns Spotify API token
 */
export async function token() {
  const data = qs.stringify({ grant_type: "client_credentials" });
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    data,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + AuthToken,
      },
    }
  );

  const token = response.data.access_token;
  return token;
}

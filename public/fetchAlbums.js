import { getAlbums } from "./apiRequests.js";
import { token } from "./getToken.js";

/**
 * Fetch albums and display it on the website
 */
async function fetchAlbums() {
  let target = document.body.getElementsByClassName(
    "main-view__recently-played-playlists"
  )[0];
  const apiToken = await token();
  const albums = await getAlbums(apiToken);
  for (let i = 0; i < albums.length; i++) {
    target.insertAdjacentHTML(
      "beforeend",
      `<div class="main-view__recently-played-item">
          <img loading="lazy" src=${albums[i].images[0].url} alt=""
            class="recently-played__item-img">
          <div class="recently-played-item__not-image-part playlist-item-primary-text">
            <p>${albums[i].name}</p>
          </div>
      </div>`
    );
  }
}

fetchAlbums();

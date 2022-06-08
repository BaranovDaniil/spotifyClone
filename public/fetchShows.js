import { getShows } from "./apiRequests.js";
import { token } from "./getToken.js";

/**
 * Fetch shows and display it on the website
 */
async function fetchShows() {
  try {
    let target = document.body.getElementsByClassName("main-view__my-shows")[0];
    const apiToken = await token();
    const shows = await getShows(apiToken);
    for (let i = 0; i < shows.length; i++) {
      target.insertAdjacentHTML(
        "beforeend",
        `<div class="my-shows__card">
        <div class="card__image-container">
        <img
          loading="lazy"
          src=${shows[i].images[0].url}
          alt=""
          class="card__image"
        />
        </div>
        <div class="card__title-container">
            <div class="title-container__name-of-song">
                ${shows[i].name}
            </div>
            <span class="title-container__name-of-author">${shows[i].publisher}</span>
        </div>
       </div>`
      );
    }
  } catch (error) {
    alert(error);
  }
}

fetchShows();

import { useState, useEffect } from "react";

import { getAlbums, getShows } from "../utils/apiRequests";
import ShowItem from "./ShowItem/ShowItem";
import AlbumItem from "./AlbumItem/AlbumItem";

interface IImage {
  url: string;
}
interface IShow {
  images: Array<IImage>;
  name: string;
  publisher: string;
  id: string;
}

interface IAlbum {
  images: Array<IImage>;
  name: string;
  id: string;
}

export default function MainContent() {
  const [shows, setShows] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchShowsAndAlbums() {
      try {
        const showsResponse = await getShows(localStorage.token);
        setShows(showsResponse);
        const albumsResponse = await getAlbums(localStorage.token);
        setAlbums(albumsResponse);
      } catch (error) {
        alert(error);
      }
    }

    fetchShowsAndAlbums();
  }, []);

  return (
    <>
      <div className='root__main-view'>
        <div className='root__main-spacer'></div>
        <main className='main-view__sections'>
          <section>
            <h2 className='h2-text'>Альбомы</h2>
            <div className='main-view__recently-played-playlists'>
              {albums.map((album: IAlbum) => {
                return (
                  <AlbumItem
                    imageUrl={album.images[0].url}
                    name={album.name}
                    key={album.id}
                  />
                );
              })}
            </div>
          </section>
          <section>
            <h3 className='h3-text'>Твои шоу</h3>
            <div className='main-view__my-shows'>
              {shows.map((show: IShow) => {
                return (
                  <ShowItem
                    imageUrl={show.images[0].url}
                    name={show.name}
                    author={show.publisher}
                    key={show.id}
                  />
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

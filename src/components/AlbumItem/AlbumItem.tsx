interface IAlbumItem {
  imageUrl: string;
  name: string;
}

export default function AlbumItem({ imageUrl, name }: IAlbumItem) {
  return (
    <>
      <div className='main-view__recently-played-item'>
        <img
          loading='lazy'
          src={imageUrl}
          alt=''
          className='recently-played__item-img'
        />
        <div className='recently-played-item__not-image-part playlist-item-primary-text'>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}

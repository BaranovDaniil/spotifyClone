interface IShowItem {
  imageUrl: string;
  name: string;
  author: string;
}

export default function ShowItem({ imageUrl, name, author }: IShowItem) {
  return (
    <>
      <div className='my-shows__card'>
        <div className='card__image-container'>
          <img loading='lazy' src={imageUrl} alt='' className='card__image' />
        </div>
        <div className='card__title-container'>
          <div className='title-container__name-of-song'>{name}</div>
          <span className='title-container__name-of-author'>{author}</span>
        </div>
      </div>
    </>
  );
}

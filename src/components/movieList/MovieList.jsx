import { useState } from 'react';
import './movieList.scss';

const MovieList = ({ movieList, title, active }) => {
  const [slider, setSlider] = useState(0);
  const width = Math.floor(window.innerWidth / 320);

  console.log('width ', window.innerWidth / 320);
  const handleSlider = (way) => {
    way === 'right'
      ? setSlider(
          movieList.length - 4 - slider + (4 - width) > 0 ? slider + 1 : 0
        )
      : setSlider(slider > 0 ? slider - 1 : 0);
  };

  return (
    <div className={active ? 'movieList active' : 'movieList'}>
      <div className="title">{title}</div>
      <div className="movies-container">
        <div
          className="movies"
          style={{ transform: `translateX(-${slider * 302}px)` }}
        >
          {movieList.map((dt) => (
            <div className="movie">
              <img src={dt.url} alt="" />
              <div className="movie-title">Catch Me if you can</div>
              <div className="movie-details">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
              <button>watch</button>
            </div>
          ))}
        </div>
        <i
          className="fas fa-chevron-left"
          onClick={() => handleSlider('left')}
        ></i>
        <i
          className="fas fa-chevron-right"
          onClick={() => handleSlider('right')}
        ></i>
      </div>
    </div>
  );
};

export default MovieList;

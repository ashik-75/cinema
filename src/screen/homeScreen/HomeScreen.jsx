import Feature from '../../components/feature/Feature';
import MovieList from '../../components/movieList/MovieList';
import './homeScreen.scss';

const movieList1 = [
  {
    id: 1,
    url: 'img/1.jpeg',
  },
  {
    id: 2,
    url: 'img/2.jpeg',
  },
  {
    id: 3,
    url: 'img/3.jpg',
  },
  {
    id: 4,
    url: 'img/4.jpg',
  },
  {
    id: 5,
    url: 'img/5.jpg',
  },
  {
    id: 6,
    url: 'img/6.jpg',
  },
];
const movieList2 = [
  {
    id: 1,
    url: 'img/7.jpg',
  },
  {
    id: 2,
    url: 'img/8.jpg',
  },
  {
    id: 3,
    url: 'img/9.jpg',
  },
  {
    id: 4,
    url: 'img/10.jpg',
  },
  {
    id: 5,
    url: 'img/11.jpg',
  },
  {
    id: 6,
    url: 'img/12.jpg',
  },
];

const movieList3 = [
  {
    id: 1,
    url: 'img/13.jpg',
  },
  {
    id: 2,
    url: 'img/14.jpg',
  },
  {
    id: 3,
    url: 'img/15.jpg',
  },
  {
    id: 4,
    url: 'img/16.jpg',
  },
  {
    id: 5,
    url: 'img/17.jpg',
  },
  {
    id: 6,
    url: 'img/18.jpg',
  },
];
const movieList4 = [
  {
    id: 1,
    url: 'img/19.jpg',
  },
  {
    id: 2,
    url: 'img/4.jpg',
  },
  {
    id: 3,
    url: 'img/15.jpg',
  },
  {
    id: 4,
    url: 'img/16.jpg',
  },
  {
    id: 5,
    url: 'img/17.jpg',
  },
  {
    id: 6,
    url: 'img/18.jpg',
  },
];

const HomeScreen = ({ active }) => {
  return (
    <div className={active ? 'homeScreen active' : 'homeScreen'}>
      <Feature backUrl={'img/f-2.jpg'} frontUrl={'img/f-t-2.png'} />
      <MovieList
        active={active}
        title="All time blockbaster"
        movieList={movieList1}
      />
      <Feature backUrl={'img/f-1.jpg'} frontUrl={'img/f-t-1.png'} />
      <MovieList
        active={active}
        title="trending this year"
        movieList={movieList2}
      />
      <MovieList
        active={active}
        title="trending this week"
        movieList={movieList3}
      />
      <MovieList
        active={active}
        title="popular foreign this week"
        movieList={movieList4}
      />
    </div>
  );
};

export default HomeScreen;

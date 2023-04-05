import GenreSelect from '../components/GenreSelect';
import genreData from '../data/genres.json';

export default {
  title: 'GenreSelect',
  component: GenreSelect,
};

export const Default = {
  args: {
    genres: genreData.genres,
    selectedGenre: 'Thriller',
    onSelect: (genre) => console.log(`Selected genre: ${genre}`),
  },
};

import SearchForm from '../components/SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm,
};

export const Default = {
  args: {
    initialQuery: 'query',
    onSearch: (query) => console.log(`Search query: ${query}`),
  },
};

import SortControl from '../components/SortControl';

export default {
  title: 'SortControl',
  component: SortControl,
};

export const Title = {
  args: {
    handleSelection: ()=>{console.log("selected")},
    currentSelection: "title"
  },
};

export const ReleaseDate = {
    args: {
      handleSelection: ()=>{console.log("selected")},
      currentSelection: "release-date"
    },
  };
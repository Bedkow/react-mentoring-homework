import Dialog from '../components/Dialog';
import MovieForm from '../components/MovieForm';

export default {
	title: 'Dialog',
	component: Dialog,
};

const handleClick = () => {
	console.log(click);
};

const handleSubmit = (e) => {
    e.preventDefault();
	console.log(submit);
};

export const AddMovie = {
	args: {
		dialogTitle: 'title',
		handleClick: handleClick,
        children: <MovieForm handleSubmitForm={handleSubmit}/>
	},
};

export const EditMovie = {
	args: {
		dialogTitle: 'title',
		handleClick: handleClick,
        children: <MovieForm movieInfo="title" handleSubmitForm={handleSubmit}/>
	},
};

export const DeleteMovie = {
    args: {
		dialogTitle: 'delete movie',
		handleClick: handleClick,
        children: <MovieForm movieInfo="title" handleSubmitForm={handleSubmit}/>
	},
};

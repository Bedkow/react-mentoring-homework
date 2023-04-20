function MovieForm(movieInfo, handleSubmitForm) {
    return ( 
        <form onSubmit={handleSubmitForm}>
            <input type="text">{movieInfo && {movieInfo}}</input>
            <button type="submit"></button>
        </form>
     );
}

export default MovieForm;
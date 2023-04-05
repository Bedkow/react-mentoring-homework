
export default function SortControl({currentSelection, handleSelection}) {

    return (
        <div>
            <label htmlFor="select">Sort By</label>
            <select id="select" value={currentSelection} onChange={handleSelection}>
                <option key="r-d" value="release-date">Release Date</option>
                <option key="t" value="title">Title</option>
            </select>
        </div>
    )
}
import "./filter-panel.css";

export const FiltersPanel = () => {
    return(
        <div className="fp-wr">
            <header className="fp-header fx-r">
                <h1 className="fp-head">Filters</h1>
                <button className="clear-btn">Clear All</button>
            </header>
        </div>
    );
}
const initialFilterValues = {
    sortBy: ""
}

const filterReducerFunction = (state, { type, payload }) => {
    switch (type) {
        case "SORT_BY":
            return({
                ...state,
                sortBy: payload
            });

        default:
            return initialFilterValues;
    }
} 

export { initialFilterValues, filterReducerFunction };
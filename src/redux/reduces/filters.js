const initState = {
    sortBy: 'popular',
    category: null
}

const filters = (state = initState, action) => {
    switch (action.type) {
        case ('SET_SORT_BY'):
            return { ...state, sortBy: action.payload }
        case ('SET_CATEGORY'):
            return { ...state, category: action.payload }
        default: return state;
    }
}

export default filters;
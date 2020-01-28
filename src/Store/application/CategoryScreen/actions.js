export const selectCategory = (state, { current }) => {
    let { category } = state
    category[current.id] = current
    return { ...state, category }
}
export function filterOut(searchTxt, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
}
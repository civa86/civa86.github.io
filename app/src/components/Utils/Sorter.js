function asc (a, b) {
    return a < b ? -1 : (b < a) ? 1 : 0;
}

function doSortingByDirection (a, b, direction) {
    if (direction === 'desc') {
        return -1 * asc(a, b);
    } else {
        return asc(a, b);
    }
}

function sortObjectCollectionByProp (collection, prop, direction = 'asc') {
    return [...collection.sort((a, b) => doSortingByDirection(
        a[prop],
        b[prop],
        direction
    ))];
}

export {
    sortObjectCollectionByProp
};

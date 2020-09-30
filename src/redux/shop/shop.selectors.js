import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectShopCollectionForPreview = createSelector(
    [selectShopCollection],
    (collectionsObj) => collectionsObj ? Object.keys(collectionsObj).map(key => ({...collectionsObj[key]})) : null
)

export const selectCollectionsCategory = (categoryParam) => {
    return createSelector(
        [selectShopCollection],
        categories => categories[categoryParam]
    )
}
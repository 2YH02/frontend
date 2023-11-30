export type CategoryFilterParams = {
  region: number;
  type: number;
  categoryParking: number;
  categoryCooking: number;
  categoryPickup: number;
};

export const checkCategoryQueryUrl = ({
  region,
  type,
  categoryParking,
  categoryCooking,
  categoryPickup,
}: CategoryFilterParams) => {
  const queryObjects = {
    regionUrl: region !== 99 && region !== null ? `&region01=${region}` : "",
    typeUrl: type !== 99 && type !== null ? `&type=${type}` : "",
    categoryParkingUrl:
      categoryParking !== 2 && categoryParking !== null
        ? `&category-parking=${categoryParking}`
        : "",
    categoryCookingUrl:
      categoryCooking !== 2 && categoryCooking !== null
        ? `&category-cooking=${categoryCooking}`
        : "",
    categoryPickupUrl:
      categoryPickup !== 2 && categoryPickup !== null
        ? `&category-pickup=${categoryPickup}`
        : "",
  };

  return queryObjects;
};

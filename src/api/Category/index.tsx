import { fetchCatgoryProps } from "../../pages/Category/Category.types";
import { baseInstance, authInstance } from "../../hooks/useAxios";
import { isLogined } from "../../utils/isLogined";

export const fetchCatgory = async ({
  pageParam,
  regionUrl,
  typeUrl,
  categoryParkingUrl,
  categoryCookingUrl,
  categoryPickupUrl,
}: fetchCatgoryProps) => {
  if (isLogined()) {
    const data = await authInstance.get(
      `accommodations?page=${pageParam}${regionUrl}${typeUrl}${categoryParkingUrl}${categoryCookingUrl}${categoryPickupUrl}`,
    );
    return data.data;
  }

  const data = await baseInstance.get(
    `accommodations?page=${pageParam}${regionUrl}${typeUrl}${categoryParkingUrl}${categoryCookingUrl}${categoryPickupUrl}`,
  );
  return data.data;
};

export const postClickHeart = async (accommodationId: string) => {
  const data = await authInstance.post(`wish/${accommodationId}`);
  return data.data;
};

export const deleteClickHeart = async (accommodationId: string) => {
  const data = await authInstance.delete(`wish/${accommodationId}`);
  return data.data;
};

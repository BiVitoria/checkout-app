import { db } from "@/lib/prisma";

export const getAllRestaurants = async () => {
  const restaurants = await db.restaurant.findMany();
  return restaurants;
};

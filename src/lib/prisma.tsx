import {
  RestaurantMenuPageProps,
  isConsumptionMethodValid,
} from "@/app/[slug]/menu/page";
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

// vou usar para chamar meu banco de dados
export const db = prisma;
export const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }
  const restaurant = await db.restaurant.findFirst({ where: { slug } });
  return (
    <h1>
      <div>
        <div className="relative h-[250px] w-full">
          <Image
            src={restaurant?.coverImageUrl}
            alt={restaurant.name}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </h1>
  );
};

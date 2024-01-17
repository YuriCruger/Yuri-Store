import { prismaClient } from "@/lib/prisma";
import { CategoryItem } from "./categoryItem";

export async function Categories() {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <div key={category.id}>
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
}

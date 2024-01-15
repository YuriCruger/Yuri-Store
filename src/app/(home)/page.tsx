import Image from "next/image";
import { Categories } from "./components/Categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "./components/ProductList";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <Image
        src="/banner_home_01.png"
        height={0}
        width={0}
        className="h-auto w-full px-5 pt-5"
        sizes="100vw"
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>
    </div>
  );
}

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { cartContext } from "@/providers/cart";
import { CartItem } from "./CartItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

export default function Cart() {
  const { products, total, subtotal, totalDiscount } = useContext(cartContext);
  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="h-full overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={{
                    ...product,
                    totalPrice: computeProductTotalPrice(product),
                  }}
                />
              ))
            ) : (
              <p>Carrinho vazio. Vamos fazer compras?</p>
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-3">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Descontos</p>
          <p>R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>

        <Button className="mt-7 font-bold uppercase">Finalizar compra</Button>
      </div>
    </div>
  );
}

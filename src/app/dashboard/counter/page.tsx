import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter value={100} />
    </div>
  );
}

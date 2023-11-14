import { NextResponse } from "next/server";

export function GET(request: Request, { params }: { params: { id: number } }) {
  const id = params.id;

  const productArray = [
    { productID: 1, name: "Mango", price: 45.4 },
    { productID: 2, name: "Orange", price: 45.4 },
  ];

  const product = productArray.find((p) => p.productID == id);
  return NextResponse.json(product);
}

import { NextResponse } from "next/server";

export function GET(req: any) {
  const productArray = [
    { productID: 1, name: "Mango", price: 45.4 },
    { productID: 1, name: "Orange", price: 45.4 },
  ];
  return NextResponse.json(productArray);
}


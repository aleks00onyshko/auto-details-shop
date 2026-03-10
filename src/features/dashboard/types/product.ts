export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
}

export interface IProductForm {
  title: string;
  description: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string[];
}
export interface IProduct extends IProductForm {
  _id: string;
}

export interface ProductResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

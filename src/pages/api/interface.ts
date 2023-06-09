
export interface IProduct {
  category_id: number;
  category_name: string;
  id: number;
  name: string;
  price: number;
  image: string;
  active: string;
  ingredients: string[];
  time: string;
}

export interface IOrder {
  id: number;
  order: number;
  place: string;
  cliente: string;
  products: IProduct[];
  amount: number;
  price: number;
}

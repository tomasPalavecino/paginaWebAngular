export interface IProduct{
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
}

export enum Category{
    Electronics = 'electronics',
    Jewelery = 'jewelery',
    MenSClothing = "Men's clothing",
    WomenSClothing = "Women's clothing",
}

export interface Rating{
    rate: number;
    count: number;
}
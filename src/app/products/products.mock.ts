export const productsList :Product[] = [
    {id: 1, name: "Lavandina", price: 10, description: "Botella de 1 litro"},
    {id: 2, name: "Detergente", price: 5, description: "Dura 120 lavados"},
    {id: 3, name: "Limpia vidrios", price: 7, description: "Tus vidrios transparentes"},
    {id: 4, name: "Quita grasa", price: 8, description: "Cocina tranquilo"},
    {id: 5, name: "Perfumina", price: 2, description: "El olor a campo mas realista"},
    {id: 6, name: "Esponja", price: 4, description: ""},
]

export interface Product{
    id: number | string;
    name: string;
    price: number;
    description: string;
}
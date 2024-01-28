export class Food{
    [x: string]: any;
    id!:string;
    name!:string;
    price!:number;
    tags?:string[];
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}
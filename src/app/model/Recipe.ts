
import { Step } from "./Step"
import { Use } from "./Use";

export class Recipe{
    public id?:number;
    public name?:String;
    public description?:String;
    public instructions?:String;
    public steps?:Step[];
    public ingredients?:Use[];

}
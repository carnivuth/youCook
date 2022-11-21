import { Recipe } from "./Recipe";
import { User } from "./User";

export class FamilyGroup{
    public name?:String;
    public description?:String;
    public dayMeal?:Recipe;
    public owner?:User;
    public members?:User[];
}
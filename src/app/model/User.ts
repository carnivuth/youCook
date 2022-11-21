import { FamilyGroup } from "./FamilyGroup";
import { Recipe } from "./Recipe";

export class User{
    public password?:String;
    public username?:String;
    public email?:String;
    public recipies?:Recipe[];
    public family?:FamilyGroup;
    

}
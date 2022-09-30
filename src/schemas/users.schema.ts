import { Prop, Schema } from "@nestjs/mongoose";

enum Role {
    User, 
    Admin,
  }

@Schema()
export class Users{
    @Prop()
    name: String;

    @Prop()
    email:String;

    @Prop()
    Role:Role

    @Prop()
    password:String;

}
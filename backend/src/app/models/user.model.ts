import { db } from "../config/db.config";
import { Model, DataTypes } from "sequelize";
import RefreshToken from "./refreshToken.model";
import { UserAttributes } from "../types/auth.types";

interface UserInstance extends Model<UserAttributes>, UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

/*
  We initialize the creation of the tables inside of the selected databse
  
  WARNING - IF A TABLE OF THE NAME USER ALREADY EXIST, ALL THE FOLLOWING FIELD WON'T BE CREATED

  Will be add a s after the name of table giveb ==> user2

  Go to Servers > PostregreSQL 15 > Databases (X) > testdb > Clic-droit > Query Tool

  SQL QUERY ==> SELECT * FROM public.user2s
*/

const User = db.define<UserInstance>("user2", {
  fullname: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});
export default User;

User.hasOne(RefreshToken, {
  foreignKey: "userId",
});
RefreshToken.belongsTo(User, {
  foreignKey: "userId",
});

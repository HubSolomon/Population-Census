
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth : Number,
  fathersName: String,
  mothersName: String,
  mothersNationality: String,
  fathersNationality: String,
  Nationality: String,
  gender : String,
  contactNumber : Number,
  city :String,
  address :String,
  email: String,
  password: String,
  registrationDate: {
    type: Date,
    default: Date.now(),
  },
  
});

const User = model("User", UserSchema);
export default User;

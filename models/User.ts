import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      validate: (password: string) => {
        if (!password?.length || password.length < 6) {
          throw new Error("Password must be at least 6 characters");
        }
      },
    },
  },
  { timestamps: true }
);

// UserSchema.post("validate", function (user) {
//   const pass = user.password;
//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync(pass, salt);
//   user.password = hash;
// });

export const User = models.User || model("User", UserSchema);

import { User } from "@/models/User";
import mongoose from "mongoose";

export async function POST(request: Request) {
  const body = await request.json();
  mongoose.connect(process.env.MONGO_URL!);
  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error("password must be at least 5 characters");
  }

  const createdUser = await User.create(body);

  return Response.json(createdUser);
}

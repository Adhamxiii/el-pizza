import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions } from "next-auth";
import clientPromise from "@/libs/mongoConnect";
import type { Adapter } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import mongoose from "mongoose";
import { User } from "@/models/User";


interface Credentials {
    email: string;
    password: string;
}

interface User {
    email: string;
    password: string;
}

export const authOptions: AuthOptions = {
    secret: process.env.SECRET!,
    adapter: MongoDBAdapter(clientPromise) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "test@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Credentials | undefined, req): Promise<any> {
                const email = credentials?.email;
                const password = credentials?.password;

                if (!email || !password) {
                    return null;
                }

                await mongoose.connect(process.env.MONGO_URL!);
                const user: User | null = await User.findOne({ email });
                // const passwordOk = user && bcrypt.compareSync(password, user.password);
                const passwordOk = user && password === user.password;

                console.log("passwordOk", passwordOk);

                if (passwordOk) {
                    return user;
                }

                return null;
            },
        }),
    ],
};

// export async function isAdmin(): Promise<boolean> {
//   const session = await getServerSession(authOptions);
//   const userEmail = session?.user?.email;
//   if (!userEmail) {
//     return false;
//   }
//   const userInfo = await UserInfo.findOne({ email: userEmail }) as UserInfoDocument | null;
//   if (!userInfo) {
//     return false;
//   }
//   return userInfo.admin;
// }
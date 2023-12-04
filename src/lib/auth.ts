import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { db } from "./db";

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined, req) {
                if (!credentials?.email || !credentials?.password) {
                   return null 
                }

                const existingUser = await db.user.findUnique({
                    where: { email: credentials?.email }
                });
                if (!existingUser) return null
                
                const passwordMatch = await compare(credentials.password, existingUser.password)

                if (!passwordMatch) return null
                

                return {
                    id: `${existingUser.id}`,
                    email: existingUser.email,
                    username: existingUser.username,
                    job: existingUser.job
                } as any
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, session, trigger }) {
            if (trigger === "update" && session?.username) {
                token.username = session.username
            }

            if (trigger === "update" && session?.job) {
                token.job = session.job
            }

            if (user) {
                return {
                    ...token,
                    username: user.username,
                    job: user.job
                }
            }

            // update User in database 
            const updateUser = await db.user.update({
                where: {
                    id: Number(token.sub),
                },
                data: {
                    username: token.username as string,
                    job: token.job as string,
                }
            });

            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username,
                    job: token.job
                }
            }
        }
    }
    
}
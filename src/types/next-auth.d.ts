import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface User {
        username: string,
        job: string
    }

    interface Session {
        user: User & {
            username: string,
            job: string,
        }
        token: {
            username: string,
            job: string,
        }
    }
}
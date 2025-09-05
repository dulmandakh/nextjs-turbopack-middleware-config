import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: ({ auth }) => !!auth,
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: { type: "password" },
      },
      authorize: ({ username, password }) => {
        console.log(username, password);
        if (username === "admin" && password === "admin") {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
});

import { NuxtAuthHandler } from "#auth";
import GoogleProvider from "next-auth/providers/google";

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

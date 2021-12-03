import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "1087075559603-0u73b12vkc68vt8blu2jc4tmk9ev5vlp.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})
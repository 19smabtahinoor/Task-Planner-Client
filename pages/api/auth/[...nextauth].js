import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "1087075559603-e4d5sklrsa06nqqotu09uq32t1uikq7g.apps.googleusercontent.com",
            clientSecret: "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",
            scope:
                "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
            authorizationURL:
                "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
            accessTokenUrl: "https://oauth2.googleapis.com/token",
        })
    ],
    theme:{
        logo: "/assets/logo.png",
        brandColor:"#f4f4f4",
        colorScheme:"auto"
    }
})


 
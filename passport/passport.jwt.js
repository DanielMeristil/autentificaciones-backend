import passport from "passport";
import Strategy  from "passport-jwt";
import  usersDAO from "../daos/users.dao.js";


passport.use("jwt", new Strategy({
    jwtFromRequest: (req) => {
        var token = null;
        if (req && req.cookies) {
            token = req.signedCookies['jwt'];
        }
        return token;
    
    },
    secretOrKey: "secret_jwt"
},function(jwt_payload, done){
    let userId = jwt_payload.id;
    let user = usersDAO.getUserById(userId);

    if(user){
        return done(null, user);
    }else {
        return done(null, false);
    }
}));

export default passport;
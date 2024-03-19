import Router  from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import UsersDao from "../daos/users.dao.js";


const router = Router();

/*
router.post("/register", async (req, res)=>{
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let age = parseInt(req.body.age);
    let password = req.body.password;

    if(first_name || !last_name || !email || !age ||password){
        res.redirect("/register");
    }

    let emailUsed = await UsersDao.getUserByEmail(email);
    if(emailUsed){
        res.redirect("/register");
    }else{
        await UsersDao.insert(first_name,last_name,email,age,password);
            res.redirect("/login");
    }
});
*/




router.post("/login", async (req, res)=> {

    let email = req.body.email;
    let password = req.body.password;

    if(!email || !password){
        res.redirect("/login");
    }

    let user = await UsersDao.getUserByCreds(email, password);

    if(!user){
        res.redirect("/login");
    }else{
        let jwt = jwt.sing({id: user._id}, 'secret_jwt', { expiresIn: '1h' });
        res.cookie("jwt", jwt).redirect("/profile");

    }
})

router.get("/current", passport.authenticate("jwt") ,(req, res) => {
    console.log(req);
    res.send(req.user);
})

router.get("/logout", (req, res)=> {
    req.session.destroy((err) =>{
        res.redirect("/home");
    })
})
export default router;

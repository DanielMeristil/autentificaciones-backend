import Users from "../schemas/users.schema.js";

var users = [{
    id:1,
    firs_name: "Daniel",
    last_name: "Meristil",
    age: 33,
    email: "mdshady@gmail.com",
    password: "password",
    role: "user"
},
{
    id:2,
    firs_name: "Fabu",
    last_name: "andyu",
    age: 37,
    email: "fafabuandyu@gmail.com",
    password: "password2",
    role: "user"
},
{
    id:3,
    firs_name: "Daan",
    last_name: "Meristil Andyu",
    age: 17,
    email: "mdshady@gmail.com",
    password: "password3",
    role: "user"
},
{
    id:4,
    firs_name: "admin",
    last_name: "admin",
    age: 30,
    email: "mdadmin@gmail.com",
    password: "password4",
    role: "user"
}]
class UsersDao {

    static async getUserByEmail(email){
        return await Users.findOne({email}).lean();
    }

    static async getUserByCreds(email, password){
    //    return _users.find(x => x.email == email && x.password === password);
        return await Users.findOne({email, password}, {_id:1, firs_name:1, last_name:1, age:1, email:1}).lean();
    }

    static async insert(firs_name, last_name, age, email, role, password){
    return await new Users.findOne({firs_name, last_name, age, email, role, password}).save();
    }
    static async getUserById(id){
    //    return _users.find(x => x.id == id);
        return await Users.findOne({id:id},{firs_name:1, last_name:1, age:1, email:1}).lean();
    }
}

export default UsersDao;
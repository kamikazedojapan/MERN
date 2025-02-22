import bcrypt from "bcrypt";
import {loginService, generateToken} from "../services/auth.service.js";

const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await loginService(email);

        const passwordIsValid = bcrypt.compareSync(String(password), (user.password));
    
        if (!passwordIsValid || !user) {
            return res.status(400).send({message: "User or Password not found !"})
        }

        const token = generateToken(user.id)

        res.send({token});
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export { login }
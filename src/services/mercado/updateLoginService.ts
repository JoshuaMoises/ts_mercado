import loginModelInterface from "../../model/login/interface/loginModelInterface"
import LoginRepository from "../../model/login/LoginRepository"

const updateLogin = async (login: Partial<loginModelInterface>, id: number) => {
    try {
        return await LoginRepository.update(login,id)
    } catch (error: any) {
        throw new Error (error);
    }
}

export default {
    updateLogin
}
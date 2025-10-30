import Login from "./Login";
import loginModelInterface from "./interface/loginModelInterface";


const create = async (login: Partial<loginModelInterface>): Promise<loginModelInterface> => {
    try {
        const newLogin = await Login.create(login)
        return newLogin
    } catch (error: any) {
        throw new Error(error);
    }
}

const findByEmail = async (email: string): Promise<loginModelInterface | null> => {
    try {
       const login = await Login.findOne ({
        where: {
            email
        }
       }) 
       return login
    } catch (error: any) {
        throw new Error(error);
    }
}
const destroyLogin = async (id: number) => {
    try {
        const login = await Login.destroy({
        where: {
            id: id
        }
    })

    if (!login) {
        return false
    }
    return true;
    } catch (error: any) {
        throw new Error(error);
    }
}

const update = async (login: Partial<loginModelInterface>,id: number) => {
    try {
        const updateLogin = await Login.update(login,{
        where: {
            id
        }
    })

    if (updateLogin[0] == 0){
        return false
    }

    return true;
    } catch (error: any) {
        throw new Error(error);
    }
}

const findAll = async ():Promise<loginModelInterface[]> => {
    try {
        const logins = await Login.findAll();
        return logins
    } catch (error: any) {
        throw new Error(error);
    }
}

export default {
    create,
    findByEmail,
    destroyLogin,
    update,
    findAll
}
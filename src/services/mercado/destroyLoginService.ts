import LoginRepository from "../../model/login/LoginRepository"

const destroy = async (id: number): Promise<boolean> => {
    try {
        const retorno = await LoginRepository.destroyLogin(id)
        return retorno
    } catch (error: any) {
        throw new Error(error);
    }
}

export default {
    destroy
}
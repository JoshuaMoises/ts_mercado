import Order from "./order";
import OrderModelInterface from "./interface/OrderModelInterface";


const create = async (order: Partial<OrderModelInterface>): Promise<OrderModelInterface> => {
    try {
        const newOrder = await Order.create(order)
        return newOrder
    } catch (error: any) {
        throw new Error(error);
    }
}

const destroyOrder = async (id: number) => {
    try {
        const order = await Order.destroy({
        where: {
            id: id
        }
    })

    if (!order) {
        return false
    }
    return true;
    } catch (error: any) {
        throw new Error(error);
    }
}

const update = async (product: Partial<OrderModelInterface>,id: number) => {
    try {
        const updateOrder = await Order.update(product,{
        where: {
            id
        }
    })

    if (updateOrder[0] == 0){
        return false
    }

    return true;
    } catch (error: any) {
        throw new Error(error);
    }
}

const findAll = async (where: object = {}):Promise<OrderModelInterface[]> => {
    try {
        const orders = await Order.findAll({
            where: {
                ...where
            },
            attributes: ['name']
        });
        return orders
    } catch (error: any) {
        throw new Error(error);
    }
}

export default {
    create,
    destroyOrder,
    update,
    findAll
}
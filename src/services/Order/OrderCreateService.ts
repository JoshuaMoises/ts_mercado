import OrderValidPayLoadInterface from "../../model/orders/interface/OrderValidPayLoadInterface";
import OrderModelInterface from "../../model/orders/interface/OrderModelInterface";
import orderRepository from "../../model/orders/orderRepository";

const validPayload = (body: OrderValidPayLoadInterface): boolean => {
    if (!body.id || body.sku || body.quantity) {
        return false
    }
    return true;
}

const create = async (order: Partial<OrderModelInterface>): Promise<OrderModelInterface> => {
    try {
        const newOrder = await orderRepository.create(order)

        return newOrder

    } catch (error: any) {
        throw new Error(error);
        
    }
}

export default {
    create,
    validPayload
}
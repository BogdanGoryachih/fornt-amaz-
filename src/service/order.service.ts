import { instanse } from "../api/api.interseptor"
import { IOrder } from "../types/order.interface"
const ORDERS = 'orders'
export const OrderSevice ={
    async getAll(){
        return instanse<IOrder> ({
            url :ORDERS,
            method:'GET'
        })
    }
}
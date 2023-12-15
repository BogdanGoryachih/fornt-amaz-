import { ICartItem } from "@/src/types/cart.interface";

export interface ICartInitialState{
    items:ICartItem[]
}
export type TypeSize = "SHORT"| "TALL" | "GRANDE" | "VENTI"

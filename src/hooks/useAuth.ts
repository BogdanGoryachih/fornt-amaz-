import { useTypeDSelector } from "./useTypeSelector";

export const useAuth = ()=> useTypeDSelector((state)=> state.user)
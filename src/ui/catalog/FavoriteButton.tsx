import { useProfile } from "@/src/hooks/useProfile";
import { UserService } from "@/src/service/user.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaShoppingCart } from "react-icons/fa";
import { FC } from "react";


const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
    const {profile} = useProfile()  
    const queryClient = useQueryClient()

    const {mutate} = useMutation(['toggle favorite'], ()=>UserService.toggleFavorite(productId),

    {onSuccess(){queryClient.invalidateQueries(['get profile'])}})

      if(!profile) return null
      const iExist = profile.favorites.some(favorite => favorite.id === productId)
    return (
      
      <div className="">
        <button onClick={()=> mutate()}>
        {iExist? <FaShoppingCart/> : <AiOutlineShoppingCart/>}
        </button>
      </div>
    )
};
export default FavoriteButton
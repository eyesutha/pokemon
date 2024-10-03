import axios from "axios"
import { POKEMON_BASE_URL } from "../utils/constant"
import { IPokemonDetailResponse } from "../interface/pokemonDetails"
import { handleResponse, IResponse } from "../utils/handleRespose"


interface IGetPokemonDetailResponse extends IResponse{
    status:number|undefined,
    data?:IPokemonDetailResponse
}

export const pokemonDetailServices = {
    getPokemonDetail : async (
        name: string, 
    ):Promise <IGetPokemonDetailResponse> => {
        try {
            const response = await axios.get(
                `${POKEMON_BASE_URL}/pokemon/${name}`)
            
            return handleResponse.succes(response)
        } catch (error: any) {
            return handleResponse.error(error)
        }
      
    },
}

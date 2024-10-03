import axios from "axios"
import { POKEMON_BASE_URL } from "../utils/constant"
import { IPokemonListResponse } from "../interface/pokemonLists"
import { handleResponse, IResponse } from "../utils/handleRespose"

interface IGetPokemonListResponse extends IResponse{
    status:number|undefined,
    data?:IPokemonListResponse
}

export const pokemonListServices = {
    getPokemonList : async (limit?: number, offset?: number)
    :Promise <IGetPokemonListResponse> => {
        try {
            const response = await axios.get(
                `${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`
            )
            return handleResponse.succes(response)
        } catch (error: any) {
            return handleResponse.error(error)
        }
      
    },
}
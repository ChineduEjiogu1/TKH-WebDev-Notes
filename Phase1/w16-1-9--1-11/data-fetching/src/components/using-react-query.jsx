import { QueryClientProvider, QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

function ApiCallComponent()
{
    const {data, isLoading, error} = useQuery({
        queryKey: ["fetchDittoFromApi"],
        queryFn: () => axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(response => response.data)
    })

    if(isLoading && !error)
    {
        return(
            <div>Data is loading...</div>
        )
    }   

    if(!isLoading && error)
    {
        return(
            <div>Error afoot</div>
        )
    }

    return(
        <div>{JSON.stringify(data, null, 2)}</div>
    )
}



export default function UsingUseReactQuery()
{
    return (
        <QueryClientProvider client={queryClient}>
            <ApiCallComponent/>
        </QueryClientProvider>
    )
}
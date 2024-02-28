import { Link, useParams} from "react-router-dom";
import {useFetch} from "../hooks/UseFetch"

const VlogDetails = () => {
    const params = useParams()

    const {data, loading, error} = useFetch( `https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading) return <p>Loading data....</p>
    if(error) return <p>Error</p>
    
    return (<>
    
    <h1>{data.id} = {data.title}</h1>
    <p>{data.body}</p>
    <Link to={"/vlog"}> Volver </Link>
    
    </>
    )
};

    
 export default VlogDetails;
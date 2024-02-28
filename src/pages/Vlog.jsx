import { Link , useSearchParams  } from "react-router-dom";
import {useFetch} from "../hooks/UseFetch"
import { useEffect } from "react";

const Vlog = () => {  
 const [SearchParams, setSearchParams] = useSearchParams();

/*  useEffect(() =>{
   setSearchParams({filter: "joaquin"});
 },[SearchParams]); */
 
   
   
    const { data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts")

    if(loading) return <p>Loading data....</p>
    if(error) return <p>Error</p>

    const handelChange = (e) =>{
        let filter = e.target.value
        if(filter){
            setSearchParams({filter});
        }else{
            setSearchParams({});
        }
    };

    return (
    <>
        <h1>Vlog</h1>
        <input type="text" 
        onChange={handelChange}
        value={SearchParams.get("filter") || ""}
        className="form-control mb-3"
        > 
        </input>
  
        <ul className="list-group">
        {data
        .filter((item) => {
            let filter = SearchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })

        .map(item =>(
                <Link to={`/vlog/${item.id}`} 
                key={item.id} 
                className="list-group-item">
                 {item.id} = {item.title}
                </Link>
            ))
        }
        </ul>
    </>
    );
};

export default Vlog;
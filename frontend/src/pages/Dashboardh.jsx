import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router";

export function DashBoard() {
    const [data, setData] = useState([]);
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                // fetch('/api/dashboard/')
                fetch(`${import.meta.env.VITE_API_URL}/api/dashboard/`)
                    .then(res => res.json())
                    .then(data => {
                        setData(data.books)
                        setStats(data.stats)
                        setLoading(false);
                    })
    }, []);

    if(loading){
        return(
     <p className="font-bold text-3xl">Loading....</p>
     )}
     
    return (
        <>
            <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Total books</p>
                        <p className="text-3xl font-medium text-gray-800">{stats.totalBook}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Total authors</p>
                        <p className="text-3xl font-medium text-gray-800">{stats.totalAuthor}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Total categories</p>
                        <p className="text-3xl font-medium text-gray-800">{stats.totalCategories}</p>
                    </div>
                </div>

                {data.map((data, index) => (
                    <NavLink  to={`edit/${data.id}`} key={index}>
                        <div className="flex flex-col bg-gray-100 gap-2 p-3 m-3 rounded-2xl">

                            <h2 className="font-semibold">{data.title}</h2>
                            <p>{data.description}</p>
                            <div className="flex gap-3">
                                <p className="text-green-700"> Price: {data.price}</p>
                                <p>Stock: <span className="text-green-800">{data.stock} </span></p>
                            </div>
                        </div>  
                    </NavLink>
                ))}
            </div>
        </>
    )
}
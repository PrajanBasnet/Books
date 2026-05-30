import { useEffect } from "react";
import { useState } from "react"
import { NavLink } from "react-router";

export function BooksTable({ books }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3 font-medium">Title</th>
                        <th className="px-4 py-3 font-medium">Author</th>
                        <th className="px-4 py-3 font-medium">Category</th>
                        <th className="px-4 py-3 font-medium">Price</th>
                        <th className="px-4 py-3 font-medium">Description</th>
                        <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {books.map((book, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-gray-800">{book.title}</td>
                            <td className="px-4 py-3 text-gray-600">{book.authorname}</td>
                            <td className="px-4 py-3">
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                    {book.category}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-600">${book.bookprice}</td>
                            <td className="px-4 py-3 text-gray-500 max-w-xs truncate">{book.description}</td>
                            <td className="px-4 py-3">
                                <div className="flex gap-2">
                                    <NavLink  to={`/edit/${book.id}`}  className="text-xs px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                                        Edit
                                    </NavLink> 
                                    <button className="text-xs px-3 py-1 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export function BookPage(){
    const [book,setBooks] = useState([]);
    const [loading, setLoading] =useState(true);
    useEffect(()=>{
               fetch(`${import.meta.env.VITE_API_URL}/api/books/`)
                .then(data => data.json())
                .then(response =>{
                    setBooks(response.books);
                    setLoading(false);
                })
    },[])   

    if(loading) return <p>Loading...</p>
    return(
        <>
            <BooksTable books={book}></BooksTable>
        </>
    )
}
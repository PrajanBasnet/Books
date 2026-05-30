import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export function EditPage() {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/books/edit/${id}`)
            .then(data => data.json())
            .then(response => {
                setBook(response.books[0])
            })
    }, [id])

    if (!book) return <p>Loading...</p>

    function handleChange(e) {
        const { name, value } = e.target;
        setBook(prev => ({ ...prev, [name]: value }));
    }

function handleUpdate(e) {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/api/books/edit/${id}`, {  // ✅
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
    })
    .then(res => res.json())    
    .then(() => navigate("/"))
}

    return (
        <form onSubmit={handleUpdate}>  
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-lg font-medium">Edit book</h2>
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-500">Title</label>
                <input name="title" value={book.title} onChange={handleChange}  
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-500">Description</label>
                <textarea name="description" value={book.description} onChange={handleChange}  
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-500">Price</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                        <input name="price" value={book.price} onChange={handleChange}  
                            className="border border-gray-200 rounded-lg pl-6 pr-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-500">Stock</label>
                    <input name="stock" value={book.stock} onChange={handleChange}  
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500" />
                </div>
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-500">Published date</label>
                <input type="date" name="published_at" value={book.published_at?.slice(0, 10)} onChange={handleChange}  
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="flex gap-2 mt-2">
                <button type="button" onClick={() => navigate("/books")}
                    className="flex-1 py-2 rounded-lg border border-gray-200 text-sm">Cancel</button>
                <button type="submit"
                    className="flex-[2] py-2 rounded-lg bg-green-600 text-white text-sm font-medium">Update book</button>
            </div>
        </form>
    )
}
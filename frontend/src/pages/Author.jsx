import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export function AuthorTable({ authors }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3 font-medium">ID</th>
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {authors.map((author) => (
                        <tr key={author.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-gray-400">{author.authorname}</td>
                            <td className="px-4 py-3 font-medium text-gray-800">{author.booktitle}</td>
                            <td className="px-4 py-3">
                                <div className="flex gap-2">
                                    <NavLink to={`/edit/author/${author.id}`}
                                        className="text-xs px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
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

export function AuthorPage() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/authors`)
            .then(res => res.json())
            .then(response => {
                setAuthors(response.result)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <>
            <p>Authors</p>
            <AuthorTable authors={authors} />
        </>
    )
}
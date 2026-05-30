import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react'
import { SideBar } from './pages/SideBar'
import './App.css'
import { Layout } from "./pages/Layout";
import { DashBoard } from "./pages/Dashboardh";
import { EditPage } from "./pages/EditPage";
import { BookPage } from "./pages/Books";
import { AuthorPage } from "./pages/Author";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<Layout></Layout>}>
           <Route path="edit/:id" element={<EditPage></EditPage>}></Route>
           <Route path="/books" element={<BookPage></BookPage>}> </Route>
           <Route path="/authors" element={<AuthorPage></AuthorPage>}> </Route>

           {/* Default route */}
           <Route index element={<DashBoard></DashBoard>} />

           <Route path="*" element={<p className="bg-black">Page not found</p>} />

          </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App

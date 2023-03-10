import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Main from "./pages/MainPage";
import Footer from "./components/footer/Footer";
import BoardDetail from "./pages/detail/BoardDetail";
import BoardWrite from "./pages/write/BoardWrite";

function App() {
    // @ts-ignore
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/detail/:id" element={<BoardDetail />}/>
                    <Route path="/write" element={<BoardWrite />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    );
}

export default App;

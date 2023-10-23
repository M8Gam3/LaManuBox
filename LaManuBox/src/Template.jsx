import { Outlet } from 'react-router-dom'
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import './Styles/main.scss';

export default function Template() {
    return (
        <>
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

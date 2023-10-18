import { Outlet } from 'react-router-dom'
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";

export default function Template() {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

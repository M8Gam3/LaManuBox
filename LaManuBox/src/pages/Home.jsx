import About from "../components/About/About";
import Calltoaction from '../components/Calltoaction/Calltoaction';
import Boxs from '../components/Boxs/Boxs';
import Header from "../components/Header";
import Reinsurance from "../components/Reinsurance/Reinsurance";
import Calculator from '../components/Calculator/Calculator';
import '../styles/responsive.scss';

export default function Home() {
    return (
        <>
            
            <About/>
            <Calltoaction/>
            <Boxs/>
            <Reinsurance/>
            <Calculator/>
        </>
    )
}
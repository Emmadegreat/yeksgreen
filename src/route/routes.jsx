import Navigation from "../components/navigation"
import { useState } from "react"

const NavRouter = () => {

    const [dropdown, setDropdown] = useState(false);
    const [show, setShow] = useState(false);

    const Showbtn = () => setShow(true);
    const Closebtn = () => setShow(false);
    const Showdropdown = () => setDropdown(!dropdown);
    const Hidedropdown = () => setDropdown(false);

    return (
        <>
            <Navigation
                show={show}
                dropdown={dropdown}
                Showbtn={Showbtn}
                Closebtn={Closebtn}
                Showdropdown={Showdropdown}
                Hidedropdown={Hidedropdown}
            />
        </>
    )
}
export default NavRouter


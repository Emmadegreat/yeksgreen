import Navigation1 from "../components/navigation1"
import { useState } from "react"

const NavRouter1 = () => {

    const [dropdown, setDropdown] = useState(false);
    const [show, setShow] = useState(false);

    const Showbtn = () => setShow(true);
    const Closebtn = () => setShow(false);
    const Showdropdown = () => setDropdown(!dropdown);
    const Hidedropdown = () => setDropdown(false);

    return (
        <>
            <Navigation1
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
export default NavRouter1


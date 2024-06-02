import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'

/*const Navigation = ({show, dropdown, Showbtn, Closebtn, Showdropdown, Hidedropdown}) => {

    /*const [dropdown, setDropdown] = useState(false);
    const [show, setShow] = useState(false);

    const Showbtn = () => setShow(true);
    const Closebtn = () => setShow(false);

    const Showdropdown = () => setDropdown(!dropdown);
    const Hidedropdown = () => setDropdown(false);

    return (
        <>
            <nav
                className='flex flex-row justify-between items-center px-6
                    md:flex md:justify-between fixed w-full h-[80px] md:px-10 bg-white-100 md:items-center z-[2000] text-[#000]
                    border-red-500 border-2 bg-white'
            >
                <div className='flex items-center'>
                    <div className="hamburger block md:hidden mr-4" onClick={Showbtn}>
                        <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 16H28" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 8H21.3333" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 24H16" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <div>
                        <Link to="/">
                            <img src={logo} alt=""  className='cursor-pointer h-[50px] w-[80px]'/>
                        </Link>
                    </div>
                </div>

                <ul className="hidden md:flex items-center space-around  font-[bold]">
                    <li className="px-2 text-[1.3rem]"><Link to="/about">About us</Link></li>
                    <li className="px-2 text-[1.3rem] cursor-pointer" onClick={Showdropdown} >Recipes</li>
                    <li className="px-2 text-[1.3rem] font-[work-sans]"><Link to="/blog">Blog</Link></li>

                    {dropdown &&
                        <div className='w-[130px] absolute top-[65px] left-[40%] h-[110px] p-2 rounded bg-white
                        text-[#000] transition-all duration-1000 ease-in-out overflow-hidden shadow-md'
                            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                            onMouseLeave={Hidedropdown}
                        >
                            <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1"><Link onClick={Hidedropdown} className="px-2" to="/breakfast">Breakfast</Link></li>
                            <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1"><Link onClick={Hidedropdown} className="px-2" to="/lunch">Lunch</Link></li>
                            <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1"><Link onClick={Hidedropdown} className="px-2" to="/dinner">Dinner</Link></li>

                        </div>
                    }
                </ul>

                <div className="flex items-center space-between md:bg-[#fff] bg-[#058b42] rounded md:px-0 px-2">
                    <div className="md:px-2 flex items-center md:mr-4">
                        <Link
                            to="/login"
                            className='md:text-[#000] text-[#fff] text-[0.9rem]'
                        >Login
                        </Link>
                        <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1716315313/hyggex/log-in_eqxh9l.svg" alt=""
                            className='hidden md:block cursor-pointer'
                        />

                    </div>
                    <span className='md:hidden block text-[#fff] mx-1'>/</span>
                    <div>
                        <Link to='/register' className="bg-[#058b42] text-[#fff] text-[0.9rem] flex items-center h-[40px] md:px-4 rounded"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className='hidden md:block mr-1'>
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Register
                        </Link>
                    </div>
                </div>
                    {/*=======mobile============}
                {show &&
                    <div
                        className={`absolute top-0 left-0 right-0 flex flex-col w-full h-[100vh]
                        bg-white pt-4 text-[#000] transition-all duration-1000 ease-in-out overflow-hidden
                        ${show ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className='flex justify-between items-center px-6'>
                            <Link to="/">
                                <img src={logo} alt="logo"
                                    className='cursor-pointer h-[40px] w-[60px]'
                                    onClick={Closebtn}
                                />
                            </Link>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                                onClick={Closebtn}
                                className='font-[700] text-[2rem]'
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <ul className="flex flex-col items-start space-around  px-6 mt-12 font-[bold]">
                            <li className="mb-5 text-[1.3rem]"><Link to="/about" onClick={Closebtn}>About us</Link></li>
                            <li className="mb-5 text-[1.3rem] cursor-pointer" onClick={Showdropdown}>Recipes</li>
                            <li className="mb-5 text-[1.3rem] font-[work-sans]"><Link to="/blog" onClick={Closebtn}>Blog</Link></li>

                            {dropdown &&
                                <div className='block w-[140px] fixed top-[200px] left-[5%] h-[110px] p-2 rounded bg-white
                                text-[#000] transition-all duration-1000 ease-in-out overflow-hidden shadow-md'
                                    style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                                    onMouseLeave={Hidedropdown}
                                >
                                    <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1" onClick={Closebtn}><Link onClick={Hidedropdown} className="px-2" to="/breakfast">Breakfast</Link></li>
                                    <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1" onClick={Closebtn}><Link onClick={Hidedropdown} className="px-2" to="/lunch">Lunch</Link></li>
                                    <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1" onClick={Closebtn}><Link onClick={Hidedropdown} className="px-2" to="/dinner">Dinner</Link></li>

                                </div>
                            }
                        </ul>

                    </div>
                }
            </nav>

            <div className='h-[70px]'></div>
        </>
    )
}

export default Navigation*/



const Navigation = ({show, dropdown, Showbtn, Closebtn, Showdropdown, Hidedropdown}) => {

    /*const [dropdown, setDropdown] = useState(false);
    const [show, setShow] = useState(false);

    const Showbtn = () => setShow(true);
    const Closebtn = () => setShow(false);

    const Showdropdown = () => setDropdown(!dropdown);
    const Hidedropdown = () => setDropdown(false);*/

    return (
        <>
            <nav
                className='navbar flex flex-row justify-between items-center px-6
                    md:flex md:justify-between fixed w-full h-[80px] md:px-10 bg-white-100 md:items-center z-[2000] text-[#000]
                    bg-white'
            >
                <div className='flex items-center'>
                    <div className="hamburger block md:hidden mr-4" onClick={Showbtn}>
                        <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 16H28" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 8H21.3333" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 24H16" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <div>
                        <Link to="/">
                            <img src={logo} alt=""  className='cursor-pointer h-[50px] w-[80px]'/>
                        </Link>
                    </div>
                </div>

                <ul className={show ? "nav-menu active" : "nav-menu"}>
                    <div className='toggler'>
                        <div className='basis-[95%]'>
                            <Link to="/" className=''>
                                <img src={logo} alt="logo"
                                    className='cursor-pointer h-[60px] w-[30%]'
                                    onClick={Closebtn}
                                />
                            </Link>
                        </div>
                        <div className='basis-[5%]'>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                            onClick={Closebtn}
                            className='w-[2.5rem] h-[2.5rem] '
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6L18 18" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                    </div>


                    <li className="nav-item"><Link to="/about" onClick={Closebtn}>About us</Link></li>
                    <li className="nav-item cursor-pointer" onClick={Showdropdown} >Recipes</li>
                    <li className="nav-item font-[work-sans]"><Link to="/blog" onClick={Closebtn}>Blog</Link></li>

                    {dropdown &&
                        <div className='md:absolute md:top-[60px] md:z-[1000] md:left-[40%] w-[130px] absolute top-[200px] left-[0] h-[110px] p-2 rounded bg-[#fff]
                        text-[#000] shadow-md'
                            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                            onMouseLeave={Hidedropdown}
                        >
                            <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1" onClick={Closebtn}><Link onClick={Hidedropdown} className="px-2" to="/breakfast">Breakfast</Link></li>
                            <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1" onClick={Closebtn}><Link onClick={Hidedropdown} className="px-2" to="/lunch">Lunch</Link></li>
                            <li className="mb-0 hover:bg-[#f2f2f2] opacity-[0.9] py-1" onClick={Closebtn}><Link onClick={Hidedropdown} className="px-2" to="/dinner">Dinner</Link></li>

                        </div>
                    }

                </ul>

                <div className="flex items-center space-between md:bg-[#fff] bg-[#058b42] rounded md:px-0 px-2">
                    <div className="md:px-2 flex items-center md:mr-4">
                        <Link
                            to="/login"
                            className='md:text-[#000] text-[#fff] text-[0.9rem]'
                        >Login
                        </Link>
                        <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1716315313/hyggex/log-in_eqxh9l.svg" alt=""
                            className='hidden md:block cursor-pointer'
                        />

                    </div>
                    <span className='md:hidden block text-[#fff] mx-1'>/</span>
                    <div>
                        <Link to='/register' className="bg-[#058b42] text-[#fff] text-[0.9rem] flex items-center h-[40px] md:px-4 rounded"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className='hidden md:block mr-1'>
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Register
                        </Link>
                    </div>
                </div>
                    {/*=======mobile============*/}

            </nav>

            <div className='h-[70px]'></div>
        </>
    )
}

export default Navigation
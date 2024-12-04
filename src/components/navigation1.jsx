import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../assets/images/logo.png'

const Navigation1 = ({show, dropdown, Showbtn, Closebtn, Showdropdown, Hidedropdown}) => {


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

                <div className="flex items-center space-between md:bg-[#fff] rounded md:px-0 px-2">
                    <div className="px-2 flex items-center mr-4">

                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                            className=''
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6666 2.66666H7.99998C7.29274 2.66666 6.61446 2.94761 6.11436 3.4477C5.61426 3.9478 5.33331 4.62608 5.33331 5.33332V26.6667C5.33331 27.3739 5.61426 28.0522 6.11436 28.5523C6.61446 29.0524 7.29274 29.3333 7.99998 29.3333H24C24.7072 29.3333 25.3855 29.0524 25.8856 28.5523C26.3857 28.0522 26.6666 27.3739 26.6666 26.6667V10.6667L18.6666 2.66666Z" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.6667 2.66666V10.6667H26.6667" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.3334 17.3333H10.6667" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.3334 22.6667H10.6667" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.3334 12H12H10.6667" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <span className='hidden text-[#fff] mx-1'>/</span>
                    <div>

                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                            className='mr-1'
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="28" fill="#FAFAFA"/>
                            <path d="M38.6666 40V37.3333C38.6666 35.9188 38.1047 34.5623 37.1045 33.5621C36.1044 32.5619 34.7478 32 33.3333 32H22.6666C21.2522 32 19.8956 32.5619 18.8954 33.5621C17.8952 34.5623 17.3333 35.9188 17.3333 37.3333V40" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28 26.6667C30.9455 26.6667 33.3334 24.2789 33.3334 21.3333C33.3334 18.3878 30.9455 16 28 16C25.0545 16 22.6667 18.3878 22.6667 21.3333C22.6667 24.2789 25.0545 26.6667 28 26.6667Z" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                </div>

            </nav>

            <div className='h-[70px]'></div>
        </>
    )
}

Navigation1.propTypes = {
    show: PropTypes.bool.isRequired,
    dropdown: PropTypes.bool.isRequired,
    Showbtn: PropTypes.func.isRequired,
    Closebtn: PropTypes.func.isRequired,
    Showdropdown: PropTypes.func.isRequired,
    Hidedropdown: PropTypes.func.isRequired,
}

export default Navigation1
import { Link } from "react-router-dom"
import { authimg } from "../assets/images/imagelinks"

const Login = () => {
    return (
        <section className="md:flex md:flex-row items-center justify-between md:px-10 px-6">
            <div className="basis-[40%] md:block hidden">
                <img src={authimg} alt="authentication image"  className="h-full w-full"/>
            </div>
            <div className="flex flex-col basis-[53%] md:mt-0 mt-[2rem]">
                <h1 className="hidden md:block font-bold text-[#020202] text-[48px] mb-8">Login to do more</h1>
                <h3 className="font-semibold text-[#020202] text-[22px] md:hidden mb-8 py-8">Login to continue where you left off</h3>
                <form action="" onSubmit={(e)=>e.preventDefault()}>
                    <div className="relative">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                            className='absolute inset-y-0 left-2 top-2 pl-1 flex items-center text-[#BABABA]'
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6E6E6E" strokeWidth="1.56522" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 6L12 13L2 6" stroke="#6E6E6E" strokeWidth="1.56522" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className='w-full h-[42px] bg-[#fff] text-[1rem] pl-10 pr-3 py-1 mb-5 rounded-lg border-[1px] border-[#6E6E6E] focus:border-solid focus:border-[1px] focus:border-gray-500'
                        />

                    </div>
                    <div className="relative">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                            className='absolute inset-y-0 left-2 top-[0.4rem] pl-1 flex items-center text-[#BABABA]'
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#6E6E6E" strokeWidth="1.56522" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#6E6E6E" strokeWidth="1.56522" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className='w-full h-[42px] bg-[#fff] text-[1rem] pl-10 pr-3 py-1 mb-5 rounded-lg border-[1px] border-[#6E6E6E] focus:border-solid focus:border-[1px] focus:border-gray-500'
                    />
                    </div>

                    <button
                        type="submit"
                        className='w-full h-[44px] bg-[#058B42] text-[1rem] px-3 py-2 mb-5 rounded-lg border-[1px] border-[#6E6E6E]
                            focus:border-solid focus:border-[1px] focus:border-gray-500 text-white my-6'
                    >
                        Sign up with Email

                    </button>
                </form>

                <div className='flex justify-center mt-6 mb-4'>
                    <hr className='md:w-[30%] w-[20%] mt-4 border-[#6E6E6E] border-[0.01rem]' />
                    <span className='text-[1.3rem] text-[#3A3A3C]'>or with</span>
                    <hr className='md:w-[30%] w-[20%] mt-4 border-[#6E6E6E] border-[0.01rem]' />

                </div>

                <div className='md:flex hidden flex-row justify-center'>
                    <a href="https://www.apple.com"
                        className='flex justify-center text-sm text-center items-center mb-3 pl-3 pr-1 py-2 border-[1px] border-[#d8d7d7]
                         text-[#5f5f5f] bg-slate-50 rounded-lg font-semibold'
                    >
                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none"
                            className='w-[28px] mr-2 h-[28px]'
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3423_7220)">
                            <path d="M15.8476 12.5151C15.8801 15.971 18.9197 17.121 18.9534 17.1357C18.9277 17.2168 18.4677 18.7746 17.352 20.3837C16.3875 21.7748 15.3865 23.1609 13.8095 23.1896C12.2601 23.2177 11.7618 22.2828 9.99036 22.2828C8.21941 22.2828 7.66584 23.1609 6.1991 23.2177C4.67698 23.2746 3.51791 21.7134 2.5454 20.3274C0.558183 17.4922 -0.960461 12.3157 1.07869 8.82157C2.0917 7.08636 3.90202 5.98754 5.86697 5.95937C7.36164 5.93123 8.77244 6.95171 9.68616 6.95171C10.5993 6.95171 12.3137 5.72449 14.116 5.90473C14.8705 5.93572 16.9884 6.2055 18.3484 8.16996C18.2388 8.237 15.8213 9.62585 15.8476 12.5151V12.5151ZM12.9355 4.02899C13.7436 3.06368 14.2875 1.71988 14.1392 0.382812C12.9743 0.429012 11.5658 1.14881 10.7303 2.11358C9.98155 2.96794 9.3258 4.33539 9.50273 5.646C10.8011 5.74513 12.1274 4.99491 12.9355 4.02899" fill="#020202"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3423_7220">
                            <rect width="18.8424" height="22.88" fill="white" transform="translate(0.111023 0.382812)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com"
                        className='flex justify-center text-sm text-center items-center mx-4 mb-3 pl-3 pr-1 py-2 border-[1px] border-[#d8d7d7]
                         text-[#5f5f5f] bg-slate-50 rounded-lg font-semibold'
                    >
                        <svg width="11" height="24" viewBox="0 0 11 24" fill="none"
                            className='w-[28px] mr-2 h-[28px]'
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.3984 23.235H7.19912V11.6162H10.4013L10.8254 7.61278H7.19912L7.20434 5.60845C7.20434 4.56454 7.30352 4.00473 8.80154 4.00473H10.8033V0H7.59973C3.75158 0 2.3984 1.94299 2.3984 5.20916V7.61278H0V11.6175H2.3984V23.235Z" fill="#1777F2"/>
                        </svg>
                    </a>
                    <a href="https://www.google.com"
                        className='flex justify-center items-center mb-3 pl-3 pr-1 py-2 border-[1px] border-[#d8d7d7]
                         text-[#5f5f5f] bg-slate-50 rounded-lg font-semibold'
                    >
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                            className='w-[30px] mr-2 h-[30px]'
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3423_7328)">
                            <path d="M4.60972 12.5697L3.8857 15.2726L1.23943 15.3286C0.448581 13.8617 0 12.1835 0 10.4001C0 8.67548 0.419413 7.04918 1.16285 5.61719H1.16342L3.51934 6.04911L4.55138 8.3909C4.33538 9.02063 4.21765 9.69663 4.21765 10.4001C4.21773 11.1635 4.35602 11.8949 4.60972 12.5697Z" fill="#FBBB00"/>
                            <path d="M20.6184 8.45703C20.7379 9.08615 20.8001 9.73587 20.8001 10.3999C20.8001 11.1445 20.7219 11.8708 20.5727 12.5713C20.0665 14.9553 18.7436 17.037 16.911 18.5102L16.9105 18.5096L13.9431 18.3582L13.5231 15.7365C14.7391 15.0233 15.6894 13.9073 16.1899 12.5713H10.6288V8.45703H16.2711H20.6184Z" fill="#518EF8"/>
                            <path d="M16.9101 18.5093L16.9107 18.5099C15.1284 19.9424 12.8644 20.7996 10.3998 20.7996C6.43926 20.7996 2.99584 18.5859 1.23926 15.3282L4.60955 12.5693C5.48782 14.9133 7.74897 16.5819 10.3998 16.5819C11.5392 16.5819 12.6067 16.2739 13.5227 15.7362L16.9101 18.5093Z" fill="#28B446"/>
                            <path d="M17.0383 2.39428L13.6691 5.15255C12.7211 4.55999 11.6005 4.21769 10.4 4.21769C7.68913 4.21769 5.38569 5.96282 4.55141 8.39085L1.16341 5.61714H1.16284C2.89371 2.28 6.38055 0 10.4 0C12.9234 0 15.2371 0.898869 17.0383 2.39428Z" fill="#F14336"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3423_7328">
                            <rect width="20.8" height="20.8" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>

                {/*======mobile====*/}
                <div className='flex flex-row justify-center md:hidden'>
                    <a href="https://www.apple.com"
                        className='flex justify-center text-sm text-center items-center mb-3 pl-3 pr-1 py-2
                         text-[#5f5f5f]'
                    >
                        <svg width="19" height="24" viewBox="0 0 19 24" fill="black"
                            className='w-[28px] mr-2 h-[28px]'
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3423_7220)">
                            <path d="M15.8476 12.5151C15.8801 15.971 18.9197 17.121 18.9534 17.1357C18.9277 17.2168 18.4677 18.7746 17.352 20.3837C16.3875 21.7748 15.3865 23.1609 13.8095 23.1896C12.2601 23.2177 11.7618 22.2828 9.99036 22.2828C8.21941 22.2828 7.66584 23.1609 6.1991 23.2177C4.67698 23.2746 3.51791 21.7134 2.5454 20.3274C0.558183 17.4922 -0.960461 12.3157 1.07869 8.82157C2.0917 7.08636 3.90202 5.98754 5.86697 5.95937C7.36164 5.93123 8.77244 6.95171 9.68616 6.95171C10.5993 6.95171 12.3137 5.72449 14.116 5.90473C14.8705 5.93572 16.9884 6.2055 18.3484 8.16996C18.2388 8.237 15.8213 9.62585 15.8476 12.5151V12.5151ZM12.9355 4.02899C13.7436 3.06368 14.2875 1.71988 14.1392 0.382812C12.9743 0.429012 11.5658 1.14881 10.7303 2.11358C9.98155 2.96794 9.3258 4.33539 9.50273 5.646C10.8011 5.74513 12.1274 4.99491 12.9355 4.02899" fill="#020202"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3423_7220">
                            <rect width="18.8424" height="22.88" fill="white" transform="translate(0.111023 0.382812)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com"
                        className='flex justify-center text-sm text-center items-center mx-4 mb-3 pl-3 pr-1 py-2
                        '
                    >
                        <svg width="12" height="24" viewBox="0 0 12 24" fill="none"
                            className='w-[28px] mr-2 h-[28px]'
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.06558 23.6178H7.8663V11.999H11.0685L11.4926 7.99559H7.8663L7.87152 5.99127C7.87152 4.94735 7.97069 4.38755 9.46872 4.38755H11.4704V0.382812H8.2669C4.41876 0.382812 3.06558 2.32581 3.06558 5.59197V7.99559H0.667175V12.0003H3.06558V23.6178Z" fill="#3A3A3C"/>
                        </svg>
                    </a>
                    <a href="https://www.google.com"
                        className='flex justify-center items-center mb-3 pl-3 pr-1 py-2'
                    >

                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                            className='w-[30px] mr-2 h-[30px]'
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3361_7294)">
                            <path d="M5.54166 13.059L4.81765 15.7619L2.17137 15.8179C1.38053 14.351 0.931946 12.6727 0.931946 10.8893C0.931946 9.16474 1.35136 7.53844 2.0948 6.10645H2.09536L4.45129 6.53837L5.48333 8.88016C5.26732 9.50989 5.14959 10.1859 5.14959 10.8893C5.14967 11.6527 5.28796 12.3842 5.54166 13.059Z" fill="#ADADAD"/>
                            <path d="M21.5504 8.94629C21.6698 9.57541 21.7321 10.2251 21.7321 10.8891C21.7321 11.6337 21.6538 12.36 21.5047 13.0606C20.9984 15.4446 19.6755 17.5263 17.843 18.9994L17.8424 18.9989L14.875 18.8475L14.455 16.2257C15.671 15.5126 16.6213 14.3966 17.1219 13.0606H11.5607V8.94629H17.203H21.5504Z" fill="#3A3A3C"/>
                            <path d="M17.8421 18.9991L17.8427 18.9996C16.0604 20.4322 13.7964 21.2893 11.3318 21.2893C7.37123 21.2893 3.92782 19.0756 2.17123 15.8179L5.54152 13.0591C6.4198 15.4031 8.68094 17.0717 11.3318 17.0717C12.4712 17.0717 13.5387 16.7636 14.4546 16.2259L17.8421 18.9991Z" fill="#6E6E6E"/>
                            <path d="M17.9703 2.88353L14.6011 5.64181C13.6531 5.04925 12.5325 4.70695 11.332 4.70695C8.6211 4.70695 6.31767 6.45207 5.48339 8.88011L2.09539 6.1064H2.09482C3.82569 2.76926 7.31253 0.489258 11.332 0.489258C13.8554 0.489258 16.1691 1.38813 17.9703 2.88353Z" fill="#3A3A3C"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3361_7294">
                            <rect width="20.8" height="20.8" fill="white" transform="translate(0.931946 0.489258)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>


                <hr className="md:mx-10 mx-6 my-4 w-[] md:block hidden text-[#000]" />

                <div className='mt-2 text-center'>
                    <p
                        className='md:text-[1.1rem] text-[1rem] mb-6 font-[500] text-[#3A3A3C]'
                    >Don&#39;t have an account? &nbsp;
                        <Link to="/register" className='text-[#058B42]'>Register here</Link>
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Login
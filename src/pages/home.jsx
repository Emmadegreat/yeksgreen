import { breakfast, dinner, dinner1, lunch, porridge } from "../assets/images/imagelinks"

import DesktopHero from "../components/hero/desktophero"
import FeaturedDesktop from "../components/featuredrecipe/featureddesktop"
import FeaturedMobile from "../components/featuredrecipe/featuredmobile"
import Footer from "../components/footer"
import MobileHero from "../components/hero/mobilehero"
import MobileSlider from "../components/mobileslider/mobileslider"
import NavRouter from '../route/routes';
import Newsletter from "../components/newsletter/newsletter"

const Home = () => {


    return (
        <section className="z-[1000]">

            <NavRouter />

            <div className="md:hidden hero px-6 md:px-10">
                <MobileHero/>
            </div>
            <MobileSlider/>
            <DesktopHero />

            <div className="my-6 relative md:bg-[#fff] bg-[#FAFAFA] pt-4">
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1716421298/hyggex/yeksgreen/Onion_go9f84.svg" alt="onion"
                    className="absolute hidden md:block w-[40px] h-[40px] bottom-[13rem]"
                />
                <div className="flex justify-between items-center md:px-10 px-6 mb-6">
                    <h2 className="md:text-[40px] text-[30px] font-bold">Suggestions</h2>
                    <svg width="80" height="80" viewBox="0 0 124 124" fill="none"
                        className="mr-4 md:block hidden"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_3401_5486)">
                        <path d="M92.0958 27.9578C93.228 24.8469 91.6202 21.3964 88.5108 20.2647C85.4027 19.1334 81.9556 20.7409 80.8201 23.8474C80.8196 23.8488 80.8196 23.8488 80.8196 23.8488L74.5966 40.9465C74.3128 41.726 74.7136 42.5854 75.4931 42.8691C76.2725 43.1528 77.1319 42.752 77.4156 41.9726L77.4649 41.8372C77.7059 41.9074 77.9446 41.9751 78.1829 42.0618C78.4197 42.148 78.647 42.2515 78.8758 42.3508L78.8338 42.4664C78.5501 43.2458 78.9508 44.1052 79.7303 44.3889C80.5097 44.6726 81.3691 44.2719 81.6528 43.4924L85.8879 31.8567C88.543 32.1095 91.1426 30.5767 92.0958 27.9578Z" fill="#A0D468"/>
                        <path d="M89.349 31.1275L90.6901 27.443C90.9738 26.6635 90.573 25.8041 89.7936 25.5204C89.0141 25.2367 88.1547 25.6374 87.871 26.4169L85.8912 31.8563C87.1085 31.9722 88.3071 31.6965 89.349 31.1275Z" fill="#8CC152"/>
                        <path d="M87.2199 58.897C89.9071 51.5138 86.0862 43.3198 78.703 40.6326C71.3199 37.9453 63.1259 41.7662 60.4386 49.1494C60.434 49.1621 60.4375 49.1745 60.4329 49.1872C60.4293 49.1971 60.4205 49.2035 60.417 49.2133L46.8417 86.5111C43.7445 95.0205 34.3318 99.4355 25.8149 96.4074C25.7754 96.393 25.7335 96.381 25.694 96.3666C24.9146 96.0829 24.0552 96.4836 23.7715 97.2631C23.5586 97.8481 23.7311 98.4791 24.1611 98.8767C24.3041 99.0101 24.4753 99.1187 24.6726 99.1905C24.7107 99.2044 24.7508 99.2126 24.7888 99.2265C48.0746 107.627 73.871 95.5684 82.3426 72.2927L87.2159 58.9035C87.2169 58.9007 87.2188 58.8998 87.2199 58.897Z" fill="#ED5565"/>
                        <path d="M78.7031 40.6326C77.9814 40.3699 77.2514 40.1872 76.5187 40.0467C82.5274 43.3878 85.4117 50.6949 82.9871 57.3564C82.986 57.3592 82.9841 57.3601 82.9831 57.3629L78.1098 70.7521C70.0645 92.8565 46.3948 104.83 24.0886 98.7865C24.1135 98.8147 24.1324 98.8503 24.1611 98.8767C24.3041 99.0102 24.4753 99.1188 24.6726 99.1906C24.7107 99.2044 24.7508 99.2126 24.7889 99.2265C48.0746 107.627 73.871 95.5685 82.3427 72.2928L87.2159 58.9035C87.217 58.9007 87.2189 58.8998 87.2199 58.897C89.9072 51.5138 86.0862 43.3199 78.7031 40.6326Z" fill="#DA4453"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_3401_5486">
                        <rect width="96" height="96" fill="white" transform="translate(32.834) rotate(20)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:px-10 px-6 pb-[3rem]">
                    <div className="basis-[32%]">
                        <img src={breakfast} alt="breakfast" className="rounded h-auto w-full" />
                        <span className="absolute text-[#fff] inset-0 top-[290px] left-5 font-[400] text-[1.5rem] hidden">Breakfast</span>
                    </div>
                    <div className="basis-[32%] my-6 md:my-0 relative">
                        <img src={lunch} alt="lunch" className="hidden md:block rounded h-auto w-full" />
                        <img src={porridge} alt="lunch" className="block md:hidden rounded h-auto w-full" />
                        <div className="absolute inset-0 bg-black opacity-30 rounded md:hidden"></div>
                        <span className="absolute block md:hidden bottom-[5px] left-4 font-light text-[23px] text-[#fff]">Lunch</span>
                    </div>
                    <div className="basis-[32%]">
                        <img src={dinner} alt="dinner" className="hidden md:block rounded h-auto w-full" />
                        <img src={dinner1} alt="dinner" className="block md:hidden rounded h-auto w-full" />
                        <span className="block md:hidden absolute bottom-[56px] font-light left-10 text-[23px] text-[#fff]">Dinner</span>
                    </div>
                </div>
            </div>
            <hr className="hidden md:block mx-12 text-[#ADADAD] h-3 my-[3rem]"/>


            <div className="relative">
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none"
                    className="absolute bottom-[-20px] left-[5px] w-[30px] h-[30px] md:block hidden"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 86.114C32.9846 86.114 21.1949 79.8961 14.8022 68.6055C8.8704 58.1281 8.48352 43.9911 13.8835 34.9921C18.5338 27.2411 26.5181 21.4868 33.5626 16.4094C39.4099 12.194 44.9338 8.2129 46.681 4.2241C46.7931 3.96766 46.9775 3.74943 47.2116 3.59612C47.4457 3.4428 47.7195 3.36104 47.9994 3.36084C48.2793 3.36064 48.5531 3.442 48.7875 3.59497C49.0219 3.74794 49.2066 3.9659 49.319 4.22218C51.0662 8.21098 56.5901 12.1931 62.4374 16.4075C69.4819 21.4849 77.4662 27.2401 82.1165 34.9911C87.5165 43.9902 87.1296 58.1271 81.1978 68.6046C74.8051 79.8961 63.0154 86.114 48 86.114ZM48 7.69258C45.3667 11.45 40.6118 14.8772 35.2464 18.7451C28.4275 23.6603 20.6986 29.2311 16.3526 36.4734C12.1517 43.4756 11.1302 56.2743 17.3088 67.1867C23.1677 77.5345 34.0675 83.234 48 83.234C61.9325 83.234 72.8323 77.5345 78.6912 67.1867C84.8698 56.2743 83.8483 43.4766 79.6474 36.4743C75.3014 29.2311 67.5725 23.6603 60.7536 18.7451C55.3882 14.8772 50.6333 11.45 48 7.69258Z" fill="black"/>
                    <path d="M48 86.1138C47.8589 86.1138 47.7168 86.0936 47.5766 86.0504C18.4003 77.0773 20.1571 53.2156 22.2653 43.3727C24.4877 32.9999 30.6211 26.662 36.0307 21.07C40.8451 16.0943 45.3926 11.3941 46.5802 4.55316C46.6346 4.17871 46.8343 3.84076 47.136 3.61248C47.4378 3.38419 47.8173 3.28393 48.1924 3.33341C48.5676 3.38289 48.9081 3.57812 49.1403 3.87684C49.3726 4.17556 49.4778 4.55373 49.4333 4.92948C48.9456 10.3237 46.8922 16.2517 44.7178 22.5292C38.9846 39.0824 31.8499 59.6831 49.1683 83.8348C49.3225 84.0498 49.4145 84.3032 49.4341 84.5671C49.4537 84.831 49.4002 85.0952 49.2795 85.3307C49.1587 85.5662 48.9755 85.7639 48.7498 85.902C48.524 86.0402 48.2646 86.1134 48 86.1138ZM43.512 17.1608C41.855 19.1922 39.9984 21.1122 38.1014 23.0725C32.7091 28.6463 27.1325 34.4092 25.0819 43.9756C22.801 54.6181 22.5158 73.1384 44.376 81.8735C29.3501 58.0962 36.3341 37.9391 41.9971 21.5855C42.5111 20.1137 43.016 18.6388 43.512 17.1608Z" fill="black"/>
                    <path d="M48 86.114C47.7352 86.114 47.4755 86.041 47.2496 85.903C47.0236 85.765 46.84 85.5673 46.7191 85.3318C46.5981 85.0962 46.5444 84.8319 46.564 84.5678C46.5835 84.3037 46.6755 84.0502 46.8297 83.835C64.1491 59.6833 57.0134 39.0827 51.2803 22.5294C49.1059 16.2519 47.0525 10.3239 46.5648 4.9297C46.5305 4.55905 46.641 4.18951 46.8732 3.89859C47.1055 3.60767 47.4413 3.41798 47.8104 3.3693C48.1794 3.32063 48.553 3.41675 48.8527 3.63751C49.1524 3.85827 49.355 4.18651 49.4179 4.55338C50.6054 11.3943 55.153 16.0935 59.9674 21.0702C65.3779 26.6622 71.5104 33.0001 73.7328 43.3729C75.8419 53.2158 77.5978 77.0775 48.4214 86.0507C48.2849 86.0925 48.1428 86.1139 48 86.114ZM52.488 17.1611C52.9842 18.6388 53.4889 20.1137 54.0019 21.5857C59.6659 37.9393 66.649 58.0964 51.623 81.8737C73.4832 73.1387 73.1981 54.6183 70.9171 43.9758C68.8675 34.4094 63.2909 28.6455 57.8976 23.0727C56.0016 21.1124 54.1449 19.1924 52.488 17.1611Z" fill="black"/>
                    <path d="M43.3862 90.073C43.0921 90.073 42.8051 89.9829 42.5637 89.8149C42.3224 89.6468 42.1382 89.4089 42.0361 89.1331C41.9339 88.8573 41.9187 88.5569 41.9924 88.2722C42.0661 87.9875 42.2252 87.7321 42.4483 87.5405L47.063 83.5815C47.2064 83.4581 47.3727 83.3641 47.5525 83.3051C47.7322 83.2461 47.9219 83.2231 48.1105 83.2376C48.2992 83.252 48.4831 83.3036 48.6518 83.3893C48.8204 83.475 48.9705 83.5932 49.0934 83.737C49.342 84.0269 49.4653 84.4037 49.4361 84.7844C49.407 85.1652 49.2278 85.5188 48.9379 85.7674L44.3232 89.7265C44.0515 89.9588 43.7184 90.073 43.3862 90.073Z" fill="black"/>
                    <path d="M52.6138 90.073C52.2816 90.073 51.9485 89.9587 51.6768 89.7255L47.0621 85.7664C46.7769 85.5164 46.6019 85.1641 46.575 84.7858C46.5481 84.4076 46.6715 84.034 46.9184 83.7462C47.1652 83.4583 47.5157 83.2795 47.8936 83.2485C48.2715 83.2175 48.6465 83.3368 48.937 83.5805L53.5517 87.5395C53.7752 87.7311 53.9346 87.9865 54.0085 88.2713C54.0824 88.5562 54.0673 88.8569 53.9651 89.1329C53.8629 89.409 53.6786 89.647 53.437 89.8151C53.1954 89.9832 52.9081 90.0732 52.6138 90.073Z" fill="black"/>
                    <path d="M48 92.64C47.6181 92.64 47.2518 92.4883 46.9818 92.2182C46.7117 91.9481 46.56 91.5819 46.56 91.2V84.6739C46.56 84.292 46.7117 83.9257 46.9818 83.6557C47.2518 83.3856 47.6181 83.2339 48 83.2339C48.3819 83.2339 48.7482 83.3856 49.0182 83.6557C49.2883 83.9257 49.44 84.292 49.44 84.6739V91.2C49.44 91.5819 49.2883 91.9481 49.0182 92.2182C48.7482 92.4883 48.3819 92.64 48 92.64Z" fill="black"/>
                </svg>

                <div className="md:flex justify-start items-center md:px-10 px-6 mb-4">
                    <h2 className="hidden md:block md:text-[40px] text-[30px] font-bold">Featured Recipes</h2>
                    <h2 className="block md:hidden md:text-[40px] text-[30px] font-bold">Featured</h2>
                    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="w-[50px] ml-12 md:block hidden"
                    >
                        <path d="M24.75 29.5875C24.4125 29.55 16.275 28.8 9.26251 24L11.175 21.225C17.4375 25.5 24.975 26.2125 25.05 26.25L24.75 29.5875Z" fill="#7ABD4C"/>
                        <path d="M24.3375 28.9125C24.2625 28.8375 16.275 21.0375 8.77499 18.3375L9.89999 15.15C18.1125 18.075 26.3625 26.175 26.7 26.5125L24.3375 28.9125ZM27.4125 26.8875C27 26.475 17.1 17.1 13.2375 7.91248L16.35 6.59998C19.95 15.1125 29.625 24.3375 29.7375 24.4125L27.4125 26.8875Z" fill="#4FA812"/>
                        <path d="M26.6625 27.9375C26.5875 27.8625 19.05 20.925 13.65 16.9875L15.6375 14.25C21.225 18.3 28.65 25.1625 28.9875 25.4625L26.6625 27.9375Z" fill="#7ABD4C"/>
                        <path d="M24.45 24.3375C24.45 24.3375 14.25 33.7875 29.175 46.4625C29.175 46.4625 76.2 88.275 85.4625 85.8375C85.4625 85.8375 93.45 86.925 75.3 63.8625C75.3 63.8625 58.65 42.3 45.4125 28.6875C45.45 28.6875 33.8625 16.1625 24.45 24.3375Z" fill="#EB5900"/>
                        <path d="M61.7625 47.025C57.675 52.575 53.175 58.3125 49.125 63.3C50.3625 64.3125 51.6375 65.325 52.9125 66.3375C56.7375 61.6125 61.0125 56.175 64.95 50.8875C63.9 49.6125 62.85 48.3375 61.7625 47.025Z" fill="#DE4A00"/>
                        <path d="M33 46.7625C32.775 46.7625 32.5125 46.6875 32.325 46.5375C21 37.8375 23.475 30.225 23.5875 29.925C23.775 29.325 24.45 29.025 25.0125 29.2125C25.6125 29.4 25.9125 30.0375 25.725 30.6375C25.65 30.9 23.8125 37.125 33.7125 44.7375C34.2 45.1125 34.3125 45.825 33.9375 46.3125C33.675 46.6125 33.3375 46.7625 33 46.7625Z" fill="#F48435"/>
                        <path d="M61.0125 20.8876C60.975 20.5501 60.1125 12.4125 63.4125 4.61255L66.525 5.92505C63.5625 12.9375 64.35 20.4376 64.35 20.5126L61.0125 20.8876Z" fill="#7ABD4C"/>
                        <path d="M64.425 22.2L61.575 20.3625C61.65 20.25 67.725 10.875 68.85 3L72.1875 3.4875C70.95 12.1125 64.6875 21.7875 64.425 22.2ZM67.05 24.75L64.1625 22.95C64.4625 22.4625 71.7375 10.9125 79.95 5.325L81.8625 8.1375C74.25 13.35 67.125 24.6375 67.05 24.75Z" fill="#4FA812"/>
                        <path d="M65.8875 24.1875L63 22.425C63.0375 22.35 68.3625 13.575 71.175 7.5L74.25 8.8875C71.4 15.1875 66.1125 23.85 65.8875 24.1875Z" fill="#7ABD4C"/>
                        <path d="M66.075 19.5751C66.075 19.5751 54.7875 11.4376 45.3375 28.6126C45.3375 28.6126 13.65 82.9875 17.925 91.6125C17.925 91.6125 18.45 99.675 37.4625 77.2876C37.4625 77.2876 55.275 56.7001 66 41.0251C66 41.0251 75.9375 27.1876 66.075 19.5751Z" fill="#F47B1E"/>
                        <path d="M66 19.575C66 19.575 64.3125 18.375 61.6875 17.85C64.05 25.0125 59.3625 33.375 59.3625 33.375C50.25 50.475 34.275 73.275 34.275 73.275C24.6375 87.3 19.9125 90.7125 17.5875 91.0125C17.6625 91.2375 17.7 91.425 17.8125 91.6125C17.8125 91.6125 18.3375 99.675 37.35 77.2875C37.35 77.2875 55.1625 56.7 65.8875 41.025C65.8875 41.025 75.8625 27.1875 66 19.575Z" fill="#F3690B"/>
                        <path d="M45.225 36.6375C45.075 36.6375 44.8875 36.6 44.7375 36.525C44.175 36.2625 43.95 35.5875 44.2125 35.025C51.6 19.4625 59.1 19.9125 59.4 19.95C60.0375 19.9875 60.4875 20.55 60.4125 21.1875C60.375 21.7875 59.8125 22.275 59.2125 22.2C59.1 22.2 52.8375 22.125 46.2375 36C46.05 36.375 45.6375 36.6375 45.225 36.6375Z" fill="#F59653"/>
                    </svg>
                </div>

                <div className="md:px-10 px-6 featured-recipes mb-[4rem]">
                    <FeaturedDesktop />
                    <FeaturedMobile/>
                </div>
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none"
                    className="absolute w-[35px] h-[35px] right-[150px] bottom-[-50px] md:block hidden"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.8355 7.81659L55.5743 12.238C53.4985 11.4655 51.3751 10.9774 49.2734 10.7896C43.606 10.2831 38.0939 11.9387 34.0859 15.9469C32.0818 17.951 28.6414 22.3007 24.5687 27.9944C20.4961 33.6881 15.8563 40.6691 11.7119 47.7149C7.5676 54.7607 3.91705 61.8557 1.8253 67.8659C0.779438 70.8713 0.116498 73.6043 0.0132979 76.0051C-0.0898811 78.4058 0.383197 80.597 1.89265 82.1065C3.4021 83.6159 5.5933 84.089 7.99405 83.9858C10.3948 83.8827 13.1278 83.2197 16.1332 82.1738C22.144 80.0821 29.239 76.4315 36.2842 72.2872C43.3294 68.1428 50.3111 63.503 56.0047 59.4304C61.6982 55.3577 66.0481 51.9173 68.0522 49.9132C73.5475 44.4179 74.6174 36.1003 71.7611 28.4242L76.1825 29.163C80.1475 29.9568 83.9326 26.9535 83.9981 22.9742C84.0637 18.9948 80.7575 15.9512 76.9888 16.145C76.7938 16.155 76.5966 16.1819 76.3995 16.2095C76.3995 16.2095 79.7382 13.8104 79.7536 13.7994C82.9434 11.3186 83.23 6.53014 80.3488 3.64894C78.9063 2.20644 76.9602 1.53335 75.0742 1.6376C73.1883 1.74192 71.3644 2.62295 70.1661 4.29109L67.7883 7.59844C68.3513 3.59239 65.2033 -0.0658049 61.1238 -0.000104882C57.0442 0.0654796 54.0409 3.85054 54.8347 7.81549L54.8355 7.81659ZM64.81 7.2771L63.2443 16.6742C61.8537 15.5401 60.3859 14.5728 58.8699 13.7568C58.8699 13.7568 57.7854 7.2438 57.7821 7.2273C57.343 5.0343 58.9299 3.03885 61.2022 3.00345C63.4746 2.96812 65.1915 4.98825 64.81 7.2771H64.81ZM75.2802 4.6119C76.3173 4.56248 77.3994 4.94551 78.2268 5.77296C79.8855 7.43166 79.7151 10.0249 77.9101 11.4287L69.7152 17.3132L66.0795 17.9201L66.6864 14.2844L72.6032 6.04552C73.2507 5.14413 74.243 4.6612 75.2801 4.61178L75.2802 4.6119ZM47.2917 13.7069C47.8951 13.7051 48.5032 13.7322 49.1154 13.7889C54.013 14.2429 59.119 16.5653 63.2769 20.7231C71.5924 29.0387 72.57 41.1516 65.9304 47.7906C65.5001 48.221 64.8717 48.7853 64.1008 49.4414C56.2123 46.3922 50.731 39.848 50.731 39.848C50.4322 39.4834 49.9794 39.2804 49.5084 39.2997C49.1826 39.3123 48.8697 39.4307 48.6171 39.6369C47.9745 40.1621 47.8799 41.109 48.406 41.7509C48.406 41.7509 53.4967 48.0664 61.4357 51.6141C59.4511 53.1808 57.0104 55.0198 54.2582 56.9884C48.6317 61.0131 41.7091 65.6143 34.7612 69.7015C31.1123 71.8479 27.4648 73.8357 23.9891 75.5421C21.1036 73.7851 18.7849 71.5839 18.7849 71.5839C18.5143 71.3129 18.1503 71.1555 17.7675 71.1441C17.3542 71.1322 16.9543 71.2913 16.6621 71.5839C16.076 72.1701 16.076 73.1205 16.6621 73.7067C16.6621 73.7067 18.2824 75.3613 20.7199 77.0638C18.7738 77.9377 16.8846 78.7341 15.1462 79.3391C12.3084 80.3266 9.79751 80.9038 7.86611 80.9868C5.93471 81.0698 4.70531 80.673 4.01636 79.984C3.32744 79.2951 2.93062 78.0657 3.01363 76.1343C3.09663 74.2029 3.67384 71.692 4.66138 68.8542C6.63643 63.1785 10.2117 56.1877 14.2989 49.2387C16.0195 46.3135 17.8341 43.4136 19.6557 40.5923C22.1752 45.2748 25.156 48.2301 25.156 48.2301C25.7422 48.8162 26.6926 48.8162 27.2788 48.2301C27.8649 47.6439 27.8649 46.6935 27.2788 46.1073C27.2788 46.1073 23.9638 42.6825 21.5878 37.6398C23.443 34.8451 25.2831 32.1581 27.012 29.7411C31.0366 24.1146 34.5496 19.7288 36.2097 18.0688C39.1146 15.1639 43.0686 13.7181 47.2926 13.7061L47.2917 13.7069ZM77.5647 19.1427C79.485 19.2474 81.0345 20.8144 81.0508 22.8399C80.9615 25.0697 78.9661 26.6567 76.7731 26.2176C76.7566 26.2145 70.2436 25.1298 70.2436 25.1298C69.428 23.6139 68.46 22.1455 67.3263 20.7553L76.7233 19.1896C77.012 19.1277 77.3153 19.1567 77.5648 19.1428L77.5647 19.1427ZM32.6292 52.0362C32.2159 52.0243 31.816 52.1834 31.5238 52.476C30.9377 53.0622 30.9377 54.0126 31.5238 54.5988L33.6466 56.7216C34.2329 57.3077 35.1832 57.3077 35.7694 56.7216C36.3555 56.1354 36.3555 55.185 35.7694 54.5988L33.6466 52.476C33.376 52.205 33.0121 52.0476 32.6293 52.0362H32.6292Z" fill="#058B42"/>
                </svg>
                <svg width="80" height="80" viewBox="0 0 96 96" fill="none"
                    className="w-[30px] h-[30px] absolute right-[4px] top-[350px] md:block hidden"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.3831 59.6526C54.4899 59.6779 54.598 59.6899 54.7033 59.6899C55.3196 59.6899 55.8799 59.2697 56.0305 58.6428C57.3421 53.175 57.9328 47.5817 58.9492 42.1616C60.2192 35.3758 64.5639 30.7176 70.5708 29.7024C72.5197 29.366 74.7108 29.8112 77.0205 29.8959C77.7596 29.932 78.4079 29.3356 78.4358 28.582C78.4639 27.827 77.8755 27.1934 77.1219 27.1667C74.8195 27.0811 72.5039 26.6037 70.1146 27.008C62.9312 28.2233 57.7527 33.7006 56.2627 41.6603C55.2572 47.0334 54.6438 52.7134 53.3734 58.0053C53.1972 58.7388 53.6495 59.4764 54.3831 59.6526Z" fill="black"/>
                    <path d="M4.00874 82.7182C24.4764 96.0435 54.1415 95.2272 70.4147 76.2698C82.6818 61.9803 89.7344 50.8244 91.3779 43.1128C92.5119 37.7861 91.6884 32.8192 89.0578 28.6312C89.0729 28.5847 89.0973 28.5425 89.1075 28.4939C89.9012 24.6842 88.8047 21.548 85.7565 18.9054C85.2163 18.4372 85.2109 18.4039 85.5778 17.7329C87.2252 14.7182 89.5743 12.305 92.7584 10.3575C94.4966 9.29436 94.6114 7.96433 94.5245 7.26542C94.1664 4.40083 90.6828 3.41058 88.3776 5.0084C84.6185 7.60694 81.6825 10.7779 79.6522 14.4328C79.1673 15.3044 78.9071 15.4295 77.9194 15.2932C73.9536 14.7636 70.9575 16.0055 68.5577 19.1364C68.5433 19.1552 68.537 19.1776 68.5237 19.1968C67.3366 19.3645 66.1516 19.6256 64.9812 19.9968C54.3654 23.3694 51.0297 31.3678 49.8115 40.8999C48.9978 47.2669 47.9853 55.1907 41.1594 66.1652C33.8676 77.8915 19.8524 79.6513 6.16292 77.8214C5.50023 77.7328 2.42212 77.3735 1.86357 78.5844L1.53936 79.2848C0.954484 80.5569 3.56321 82.427 4.00874 82.7182ZM82.0403 15.7587C83.8652 12.4744 86.5197 9.61305 89.9306 7.25465C90.4943 6.86716 91.7989 6.85291 91.8141 7.5988C91.802 7.64011 91.6887 7.80956 91.3338 8.02702C87.7295 10.2307 85.0629 12.9774 83.1794 16.4229C80.8735 20.6496 85.5536 20.5511 86.4863 24.8563C82.6778 21.28 78.2183 19.2603 72.9786 18.7361C76.9081 16.4461 79.6073 20.1412 82.0403 15.7587ZM43.4807 67.6084C50.6201 56.1269 51.7193 47.5256 52.5223 41.2453C53.5362 33.3025 55.8956 25.7501 65.8086 22.6005C78.1532 18.6803 91.7068 28.4549 88.7047 42.5445C87.6416 47.5349 83.2461 57.1274 68.3418 74.4903C53.1471 92.1901 25.1658 93.1669 5.62285 80.509C20.9055 81.8676 35.129 81.0359 43.4807 67.6084Z" fill="black"/>
                </svg>

            </div>
            <hr className="hidden md:block mx-6 md:mx-10 text-[#ADADAD] my-[3rem]" />

            <Newsletter />

            <div className="bg-[#0D2819] md:bg-[#020202]">
                <Footer/>
            </div>
        </section>
    )
}

export default Home
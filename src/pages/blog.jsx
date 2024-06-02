import { blogimg, blogimg2, blogimg3 } from "../assets/images/imagelinks"

import { Directions } from "../components/api/feacturedrecipeapi"
import Footer from "../components/footer"
import NavRouter1 from "../route/route1"
import Newsletter from "../components/newsletter/newsletter"

const Blog = () => {
    return (
        <section>
            <NavRouter1/>
            <div className="bg-[#04471C] h-[80px] pt-2 text-[#fff] flex justify-between items-center md:px-10 px-6">
                <div className="flex flex-col text-start">
                    <h4 className="font-[600] text-[1rem] md:text-[1.2rem]"> Jollof Rice & Chicken</h4>
                    <p className="text-[14px]">Updated 19/08/2022</p>
                </div>
                <div className="flex justify-between">
                    <svg width="30" height="30" viewBox="0 0 48 48" fill="none"
                        className="mr-6"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.6802 9.22C40.6587 8.19801 39.4459 7.38729 38.1109 6.83416C36.776 6.28104 35.3452 5.99635 33.9002 5.99635C32.4553 5.99635 31.0244 6.28104 29.6895 6.83416C28.3546 7.38729 27.1418 8.19801 26.1202 9.22L24.0002 11.34L21.8802 9.22C19.8169 7.15661 17.0183 5.99742 14.1002 5.99742C11.1822 5.99742 8.38362 7.15661 6.32024 9.22C4.25685 11.2834 3.09766 14.0819 3.09766 17C3.09766 19.9181 4.25685 22.7166 6.32024 24.78L8.44024 26.9L24.0002 42.46L39.5602 26.9L41.6802 24.78C42.7022 23.7585 43.5129 22.5456 44.0661 21.2107C44.6192 19.8758 44.9039 18.445 44.9039 17C44.9039 15.555 44.6192 14.1242 44.0661 12.7893C43.5129 11.4544 42.7022 10.2415 41.6802 9.22V9.22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <button className="bg-[#058B42] rounded px-3">Print</button>
                </div>
            </div>

            <div className="flex md:flex-row flex-col md:justify-between md:px-10 px-6 md:mb-8">
                <article className="basis-[45%] md:py-12 py-8 md:order-1 order-2">
                    <p className="leading-8">
                        Jollof rice, is a rice dish from West Africa. The dish is typically
                        made with long-grain rice, tomatoes, onions, spices, vegetables and meat
                        in a single pot, although its ingredients and preparation methods vary
                        across different regions.
                    </p>
                    <p className="leading-8 md:block hidden">Tellus diam felis, vel, ut pulvinar est amet aliquam. Id id nunc, id
                        facilisis. Nec elementum, purus morbi consectetur iaculis gravida libero.
                        Non tellus suspendisse nulla metus morbi vulputate lectus eu. Aenean mauris
                        pharetra facilisi.
                    </p>
                    <button className="bg-[#058B42] text-[#fff] md:mt-12 mt-5 rounded py-2 px-3">Jumb to recipe</button>
                </article>
                <div className="basis-[45%] md:order-2 order-1">
                    <img src={blogimg} alt="jollof rice and chicken" className="md:block hidden" />
                    <img src={blogimg3} alt="jollof rice and chicken" className="md:hidden block w-full" />
                </div>
            </div>

            <div className="md:px-10 px-6 md:bg-[#FAFAFA] md:py-12">
                <div className="flex flex-col md:px-[10rem] px-0">
                    <div className="video-section rounded">


                    </div>
                    <article>
                        <p className="text-justify pt-8 text-[#3A3A3C] md:hidden block">
                            It is fair to say that this delicious rice dish is pretty
                            easy to make anywhere in the world because the ingredients
                            are easy to find.
                        </p>
                        <p className="text-justify text-[#3A3A3C] md:block hidden">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Porta nisi, condimentum fusce sed ut condimentum ac.
                            Volutpat ac, maecenas aliquam lectus eget consectetur ut tincidunt aenean.
                        </p>
                    </article>

                </div>
            </div>


            <div className="p-4 flex justify-between items-center md:mx-10 mx-6 bg-[#FAFAFA] rounded md:my-16 my-8 border-dotted border-2 border-gray">
                <div className="md:basis-[30%]">
                    <h4 className="font-[600] text-[1.1rem] text-[#6E6E6E] mb-4">Recipe Facts</h4>
                    <div className="flex items-center">
                        <svg width="25" height="25" viewBox="0 0 48 48" fill="none"
                            className="md:w-[25px] w-[18px] md:h-[25px] h-[18px]"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M24 12V24L32 28" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="ml-3 md:text-[1rem] text-[0.9rem] text-[#6E6E6E]">
                            <p>Active: 20mins</p>
                            <p>Total: 60mins</p>
                        </div>
                    </div>
                </div>

                <div className="md:basis-[70%] text-[#6E6E6E] flex items-center text-right">
                    <svg width="25" height="25" viewBox="0 0 48 48" fill="none"
                        className="md:w-[25px] w-[18px] md:h-[25px] h-[18px]"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 44H8C6.93913 44 5.92172 43.5786 5.17157 42.8284C4.42143 42.0783 4 41.0609 4 40V26C4 24.9391 4.42143 23.9217 5.17157 23.1716C5.92172 22.4214 6.93913 22 8 22H14M28 18V10C28 8.4087 27.3679 6.88258 26.2426 5.75736C25.1174 4.63214 23.5913 4 22 4L14 22V44H36.56C37.5247 44.0109 38.4608 43.6728 39.1958 43.048C39.9309 42.4232 40.4154 41.5538 40.56 40.6L43.32 22.6C43.407 22.0267 43.3683 21.4414 43.2067 20.8845C43.045 20.3276 42.7642 19.8126 42.3837 19.375C42.0032 18.9375 41.5322 18.5879 41.0031 18.3504C40.4741 18.113 39.8998 17.9934 39.32 18H28Z" stroke="#6E6E6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="p-3 text-[1rem]">4 - 6 Services</p>
                </div>

            </div>

            <div className="md:px-10 px-6 flex items-center justify-between pb-10">
                <div className="md:basis-[47%] flex flex-col items-start">
                    <h3 className="text-[#020202] md:text-[2rem] text-[1.5rem] font-bold">Ingredients</h3>
                    <ul className="text-[15px] text-[#6E6E6E] pt-4 list-disc list-inside">
                        <li className="mb-1">4 Cups of rice</li>
                        <li className="mb-1">Tomatoe puree</li>
                        <li className="mb-1">1 bulb of red onions</li>
                        <li className="mb-1">4 pcs of scotch bonnet pepper</li>
                        <li className="mb-1">Thyme</li>
                        <li className="mb-1">Carrot & Peas (optional)</li>
                    </ul>
                    <button className="bg-[#058B42] text-[#fff] text-[0.8rem] md:mt-12 mt-5 rounded py-2 px-4">+ Add to shopping list</button>
                </div>
                <div className="basis-[47%] md:block hidden">
                    <img src={blogimg2} alt="ingredient image" />
                </div>
            </div>

            <hr className="md:mx-10 mx-6 h-1 my-6 md:block hidden" />

            <div className="md:px-10 px-6 flex flex-col">
                <h3 className="text-[#020202] font-bold md:text-[2rem] text-[1.5rem]">Directions</h3>

                {
                    Directions.map((item) => {
                        return (
                            <div className="flex flex-col items-start my-2" key={item.id}>
                                <h4 className="text-[#058B42]">{ item.title }</h4>
                                <p className="py-3 text-[#3A3A3C] leading-8">{ item.content }</p>
                            </div>
                        )
                    })
                }
            </div>


            <div className="p-4 flex flex-col md:mx-10 mx-6 bg-[#FAFAFA] rounded md:my-16 my-6 border-dotted border-2 border-gray">
                <h4 className="font-[600] text-[1rem] text-[#6E6E6E] mb-4">Nutrition Facts (per serving)</h4>
                <div className="flex justify-between">

                    <div className="md:basis-[50%] basis-[90%] flex justify-between">
                        <div className="basis-[25%] text-[1rem] text-[#6E6E6E]">
                            <b className="text-[0.9rem]">445</b>
                            <p>Calories</p>
                        </div>
                        <div className="basis-[25%] text-[1rem] text-[#6E6E6E]">
                            <b className="text-[0.9rem]">10g</b>
                            <p>Fat</p>
                        </div>
                        <div className="basis-[25%] text-[1rem] text-[#6E6E6E]">
                            <b className="text-[0.9rem]">89g</b>
                            <p>Carbs</p>
                        </div>
                        <div className="basis-[25%] text-[1rem] text-[#6E6E6E]">
                            <b className="text-[0.9rem]">7g</b>
                            <p>Protein</p>
                        </div>
                    </div>
                    <div className="md:basis-[50%] basis-[5%]">


                    </div>
                </div>

            </div>


            <div className="md:px-10 px-6 flex flex-col md:mb-[6rem] mb-[3.5rem] mt-[3rem]">
                <h3 className="text-[#020202] md:text-[2rem] text-[1.5rem] font-bold mb-4">
                    Preserving leftover ingredients
                </h3>
                <ol className="list-decimal list-inside">
                    <li className="mb-5 leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam
                        ac tristique velit, justo, porttitor. Eget mattis a curabitur augue.
                        Pellentesque urna tristique.
                    </li>
                    <li className="mb-5 leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        aliquam ac tristique velit, justo, porttitor. Eget mattis a curabitur
                        augue. Pellentesque urna tristique.
                    </li>
                    <li className="mb-5 leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam
                        ac tristique velit, justo, porttitor. Eget mattis a curabitur augue.
                        Pellentesque urna tristique.
                    </li>
                    <li className="mb-5 leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam
                        ac tristique velit, justo, porttitor. Eget mattis a curabitur augue.
                        Pellentesque urna tristique.
                    </li>
                </ol>

            </div>

            <div className="hidden md:block">
                <Newsletter/>
            </div>

            <div className="bg-[#020202]">
                <Footer />
            </div>
        </section>
    )
}

export default Blog
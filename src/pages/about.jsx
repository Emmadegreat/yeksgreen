import Footer from "../components/footer"
import NavRouter1 from "../route/route1"
import { aboutimg } from "../assets/images/imagelinks"

const About = () => {
    return (
        <section>
            <NavRouter1/>
            <div className="bg-[#04471C] h-[80px] pt-2 text-[#fff] flex justify-start items-center md:px-10 px-6">

                <div className="flex items-center text-start">
                    <svg width="30" height="30" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34 42.5V38.5C34 36.3783 33.1571 34.3434 31.6569 32.8431C30.1566 31.3429 28.1217 30.5 26 30.5H10C7.87827 30.5 5.84344 31.3429 4.34315 32.8431C2.84285 34.3434 2 36.3783 2 38.5V42.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 22.5C22.4183 22.5 26 18.9183 26 14.5C26 10.0817 22.4183 6.5 18 6.5C13.5817 6.5 10 10.0817 10 14.5C10 18.9183 13.5817 22.5 18 22.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M46 42.5V38.5C45.9987 36.7275 45.4087 35.0055 44.3227 33.6046C43.2368 32.2037 41.7163 31.2031 40 30.76" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M32 6.76C33.7208 7.2006 35.2461 8.2014 36.3353 9.60462C37.4245 11.0078 38.0157 12.7337 38.0157 14.51C38.0157 16.2863 37.4245 18.0122 36.3353 19.4154C35.2461 20.8186 33.7208 21.8194 32 22.26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>


                    <h1 className="font-[200] text-[1.6rem]">About Us</h1>
                </div>
            </div>


            <article className="md:flex md:flex-col hidden md:px-10 py-12">
                <p className="leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eget aliquet feugiat
                    scelerisque senectus aliquet. Risus ante in elit suscipit nisi. Interdum et et iaculis
                    nibh etiam commodo mattis fermentum. Libero, ipsum egestas non tincidunt gravida
                    blandit vel semper mi. Amet, ac tristique purus interdum dictumst mollis dignissim
                    lacus. Etiam a, nisl ut eleifend ultricies. Scelerisque lacus sit pharetra,
                    et semper est curabitur aliquet cursus. Malesuada etiam egestas eu pharetra enim
                    nisi malesuada duis. Malesuada duis nullam mattis nunc. Magna sit consectetur v
                    itae id elementum aliquam mattis augue enim. Faucibus orci tellus est, maecenas
                    consectetur enim habitant id. Duis quam tellus laoreet libero, scelerisque donec a.
                </p>
                <p className="leading-8">
                    Eget integer tellus pretium vestibulum egestas tellus varius id. Netus sed penatibus at
                    sed augue amet arcu, blandit euismod. Tempus praesent quam enim risus lorem lorem id interdum.
                    Tellus mi vitae eget enim eget et. Aliquet sed donec odio sodales consectetur elementum.
                    Sed eleifend cursus ac convallis volutpat. Diam lacus, sed ut sit. Vitae felis posuere
                    maecenas fringilla sed nunc tortor. Suspendisse tempus, vitae cursus amet amet sed. Purus,
                    vel aliquet condimentum id justo, egestas dui nibh odio. Aliquet in nisl morbi tellus.
                    Quis ut parturient dolor dictum. Pellentesque lectus tortor vitae tempor et phasellus donec.
                </p>

            </article>


            <div className="flex flex-col md:flex-row justify-between items-center md:px-10 px-6 md:mb-8">
                <article className="basis-[47%] order-1 md:order-2">
                    <p className="leading-8 block md:hidden my-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas imperdiet
                        lobortis pulvinar vel ac, commodo dignissim ac tortor. Volutpat non convallis
                        odio quis in. Lorem velit id arcu ac turpis laoreet nulla egestas. Sit suspendisse
                        pellentesque posuere ligula. Fusce tristique risus ornare blandit pellentesque morbi.
                        Amet, diam sit arcu cursus consequat. Leo tellus semper quam etiam.
                    </p>

                    <p className="hidden md:block leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus sed sit leo a
                        nulla et lacinia quam. Habitant imperdiet eros, quisque amet. Posuere in
                        fermentum tellus pretium neque, sollicitudin nibh nullam. Leo volutpat
                        pellentesque tortor, massa diam amet, sit. Volutpat aenean id magna egestas
                        tristique. Rhoncus eget congue et ridiculus nisi.
                    </p>
                </article>
                <div className="basis-[47%] order-2 md:order-1 md:mb-12">
                    <img src={aboutimg} alt="jollof rice and chicken" className="w-full" />
                </div>
            </div>



            <div className="md:hidden block md:px-10 px-6 md:bg-[#FAFAFA] md:py-12 pt-8 pb-12">
                <article>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec amet, libero, mattis nullam egestas lacus at.
                        Magna tincidunt molestie quis nibh a. Eu nisl placerat pulvinar mi.
                    </p>
                </article>

            </div>

            <div className="bg-[#020202]">
                <Footer />
            </div>
        </section>
    )
}

export default About
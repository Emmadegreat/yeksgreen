import DinnerDesktop from "../components/dinner/dinnerdesktop"
import DinnerMobile from "../components/dinner/dinnermobile"
import Footer from "../components/footer"
import Newsletter from "../components/newsletter/newsletter"

const Dinner = () => {
    return (
        <section>
            <div className="bg-[#04471C] h-[80px] pt-2 text-[#fff] flex items-center text-[16px] md:px-10 px-6">
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 39.05V35.25C20 34.9167 19.8833 34.6333 19.65 34.4C19.4167 34.1667 19.1167 34.05 18.75 34.05H7V32.05H18.75C19.65 32.05 20.4167 32.3667 21.05 33C21.6833 33.6333 22 34.3833 22 35.25V39.05H20ZM26 39.05V35.25C26 34.3833 26.3167 33.6333 26.95 33C27.5833 32.3667 28.35 32.05 29.25 32.05H41V34.05H29.25C28.8833 34.05 28.5833 34.1667 28.35 34.4C28.1167 34.6333 28 34.9167 28 35.25V39.05H26ZM13 28.5C11.6 28.5 10.4167 28.0167 9.45 27.05C8.48333 26.0833 8 24.9 8 23.5V17.9H40V23.5C40 24.9 39.5167 26.0833 38.55 27.05C37.5833 28.0167 36.4 28.5 35 28.5H13ZM13 26.5H35C35.8333 26.5 36.5413 26.208 37.124 25.624C37.708 25.0413 38 24.3333 38 23.5V19.9H10V23.5C10 24.3333 10.292 25.0413 10.876 25.624C11.4587 26.208 12.1667 26.5 13 26.5ZM8 14.35V12.35H19V11.5C19 11.0333 19.15 10.65 19.45 10.35C19.75 10.05 20.15 9.9 20.65 9.9H27.35C27.85 9.9 28.25 10.05 28.55 10.35C28.85 10.65 29 11.0333 29 11.5V12.35H40V14.35H8Z" fill="white"/>
                </svg>
                <h1 className="font-[200] ml-2 text-[2rem]">Dinner recipes</h1>
            </div>
            <p className="hidden md:block my-10 md:px-10 px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in aliquam
                tristique lacinia tellus libero massa proin suspendisse. Ante tempus mauris
                nec neque ullamcorper tempor commodo. Nunc vitae velit non et. Nunc id tristique
                vestibulum enim tincidunt a tellus. Malesuada amet tincidunt sit id egestas libero.
                Praesent lectus est quis pretium velit, in. Mi nisi, velit egestas sapien quam mi netus.
            </p>
            <p className="block md:hidden mt-10 mb-4 md:px-10 px-6 leading-8">
                Dinner usually refers to what is in many Western cultures the largest and most formal
                meal of the day, which is eaten in the evening. Historically, the largest meal used
                to be eaten around midday, and called dinner.
            </p>

            <div className="featured-recipes md:px-10 px-6 my-10">
                <DinnerDesktop />
                <DinnerMobile/>
            </div>
            <hr className="hidden md:block md:mx-10 px-6 text-[#ADADAD] h-3 my-[3rem]"/>
            <div className="hidden md:block">
                <Newsletter/>
            </div>
            <div className="bg-[#020202]">
                <Footer />
            </div>
        </section>
    )
}

export default Dinner
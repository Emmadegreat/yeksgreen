import BreakfastCard from "../components/breakfast/breakfast"
import BreakfastMobileCard from "../components/breakfast/breakfastmobile"
import Footer from "../components/footer"
import NavRouter1 from "../route/route1"
import Newsletter from "../components/newsletter/newsletter"

const Breakfast = () => {
    return(
        <section>
            <NavRouter1/>
            <div className="bg-[#04471C] h-[80px] pt-2 text-[#fff] flex items-center text-[16px] md:px-10 px-6">
                <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 11.5C0.916667 11.5 0.625333 11.3747 0.376 11.124C0.125333 10.8747 0 10.5833 0 10.25C0 7.11667 1.392 4.66667 4.176 2.9C6.95867 1.13333 11.5667 0.25 18 0.25C24.4333 0.25 29.042 1.13333 31.826 2.9C34.6087 4.66667 36 7.11667 36 10.25C36 10.5833 35.8747 10.8747 35.624 11.124C35.3747 11.3747 35.0833 11.5 34.75 11.5H1.25ZM2.05 9.5H33.95C33.75 7.23333 32.342 5.45867 29.726 4.176C27.1087 2.892 23.2 2.25 18 2.25C12.8 2.25 8.89133 2.892 6.274 4.176C3.658 5.45867 2.25 7.23333 2.05 9.5ZM0 18.5C0 18.2667 0.0833333 18.0413 0.25 17.824C0.416667 17.608 0.65 17.45 0.95 17.35C1.78333 17.15 2.508 16.7913 3.124 16.274C3.74133 15.758 4.7 15.5 6 15.5C7.56667 15.5 8.66667 15.8333 9.3 16.5C9.93333 17.1667 10.8333 17.5 12 17.5C13.1667 17.5 14.0667 17.1667 14.7 16.5C15.3333 15.8333 16.4333 15.5 18 15.5C19.5667 15.5 20.6667 15.8333 21.3 16.5C21.9333 17.1667 22.8333 17.5 24 17.5C25.1667 17.5 26.058 17.1667 26.674 16.5C27.2913 15.8333 28.3667 15.5 29.9 15.5C31.2 15.5 32.1833 15.758 32.85 16.274C33.5167 16.7913 34.25 17.15 35.05 17.35C35.35 17.45 35.5833 17.608 35.75 17.824C35.9167 18.0413 36 18.2667 36 18.5C36 18.8 35.8913 19.0333 35.674 19.2C35.458 19.3667 35.2167 19.4333 34.95 19.4C33.8167 19.2 32.992 18.8333 32.476 18.3C31.9587 17.7667 31.1667 17.5 30.1 17.5C28.9333 17.5 28.0167 17.8333 27.35 18.5C26.6833 19.1667 25.5667 19.5 24 19.5C22.4333 19.5 21.3333 19.1667 20.7 18.5C20.0667 17.8333 19.1667 17.5 18 17.5C16.8333 17.5 15.9333 17.8333 15.3 18.5C14.6667 19.1667 13.5667 19.5 12 19.5C10.4333 19.5 9.33333 19.1667 8.7 18.5C8.06667 17.8333 7.16667 17.5 6 17.5C4.96667 17.5 4.16667 17.7667 3.6 18.3C3.03333 18.8333 2.18333 19.2 1.05 19.4C0.783334 19.4333 0.542 19.3667 0.326 19.2C0.108667 19.0333 0 18.8 0 18.5ZM3.25 31.5C2.31667 31.5 1.542 31.192 0.926 30.576C0.308667 29.9587 0 29.1833 0 28.25V26.75C0 25.85 0.316666 25.0833 0.95 24.45C1.58333 23.8167 2.35 23.5 3.25 23.5H32.75C33.65 23.5 34.4167 23.8167 35.05 24.45C35.6833 25.0833 36 25.85 36 26.75V28.25C36 29.1833 35.692 29.9587 35.076 30.576C34.4587 31.192 33.6833 31.5 32.75 31.5H3.25ZM3.25 29.5H32.75C33.1167 29.5 33.4167 29.3833 33.65 29.15C33.8833 28.9167 34 28.6167 34 28.25V26.75C34 26.3833 33.8833 26.0833 33.65 25.85C33.4167 25.6167 33.1167 25.5 32.75 25.5H3.25C2.88333 25.5 2.58333 25.6167 2.35 25.85C2.11667 26.0833 2 26.3833 2 26.75V28.25C2 28.6167 2.11667 28.9167 2.35 29.15C2.58333 29.3833 2.88333 29.5 3.25 29.5ZM2.05 9.5H33.95H2.05ZM3.25 25.5H2H34H32.75H3.25Z" fill="white"/>
                </svg>
                <h1 className="font-[200] ml-2 text-[2rem]">Breakfast recipes</h1>
            </div>
            <p className="hidden md:block my-10 md:px-10 px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in aliquam
                tristique lacinia tellus libero massa proin suspendisse. Ante tempus mauris
                nec neque ullamcorper tempor commodo. Nunc vitae velit non et. Nunc id tristique
                vestibulum enim tincidunt a tellus. Malesuada amet tincidunt sit id egestas libero.
                Praesent lectus est quis pretium velit, in. Mi nisi, velit egestas sapien quam mi netus.
            </p>
            <p className="block md:hidden mt-10 mb-4 md:px-10 px-6 leading-8">
                Among English speakers, &#34;breakfast&#34; can be used to refer to this meal or to refer
                to a meal composed of traditional breakfast foods (such as eggs, oatmeal), although
                it must be eaten in the morning. Breakfast foods are prepared with a multitude of
                ingredients, including oats, wheat, maize, barley, noodles, starches, eggs, meats,
                and other foods
            </p>

            <div className="featured-recipes md:px-10 px-6 my-10">
                <BreakfastCard />
                <BreakfastMobileCard/>
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

export default Breakfast
import LunchDesktop from "../components/lunch/lunchdesktop"
import LunchMobile from "../components/lunch/lunchmobile"
import NavRouter1 from "../route/route1"
import Newsletter from "../components/newsletter/newsletter"

const Lunch = () => {
    return (
        <section>
            <NavRouter1/>
            <div className="bg-[#04471C] h-[80px] pt-2 text-[#fff] flex items-center text-[16px] md:px-10 px-6">
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.39991 33.4C1.23325 33.4 1.08325 33.35 0.949913 33.25C0.81658 33.15 0.733246 33 0.699913 32.8L0.249913 32.35C0.183246 32.0833 0.225246 31.858 0.375913 31.674C0.525246 31.4913 0.71658 31.4 0.949913 31.4H34.0999C34.3666 31.4 34.5752 31.5 34.7259 31.7C34.8752 31.9 34.8999 32.1167 34.7999 32.35L34.3499 32.8C34.3166 33 34.2332 33.15 34.0999 33.25C33.9666 33.35 33.8166 33.4 33.6499 33.4H1.39991ZM1.24991 27.9C1.41658 27.5333 1.64125 27.142 1.92391 26.726C2.20791 26.3087 2.54991 25.9167 2.94991 25.55V9.8H1.79991C1.56658 9.8 1.36658 9.71667 1.19991 9.55C1.03325 9.38333 0.949913 9.16667 0.949913 8.9C0.949913 8.66667 1.03325 8.46667 1.19991 8.3C1.36658 8.13333 1.56658 8.05 1.79991 8.05H2.94991V6.15H1.79991C1.56658 6.15 1.36658 6.06667 1.19991 5.9C1.03325 5.73333 0.949913 5.51667 0.949913 5.25C0.949913 5.01667 1.03325 4.81667 1.19991 4.65C1.36658 4.48333 1.56658 4.4 1.79991 4.4H2.94991V2.5H1.79991C1.56658 2.5 1.36658 2.41667 1.19991 2.25C1.03325 2.08333 0.949913 1.86667 0.949913 1.6C0.949913 1.36667 1.03325 1.16667 1.19991 1C1.36658 0.833333 1.56658 0.75 1.79991 0.75H13.1999C13.9999 0.75 14.7586 1.05867 15.4759 1.676C16.1919 2.292 16.5499 3.2 16.5499 4.4H34.7999C35.0666 4.4 35.2832 4.48333 35.4499 4.65C35.6166 4.81667 35.6999 5.01667 35.6999 5.25C35.6999 5.51667 35.6166 5.73333 35.4499 5.9C35.2832 6.06667 35.0666 6.15 34.7999 6.15H16.5499C16.5499 7.35 16.1919 8.258 15.4759 8.874C14.7586 9.49133 13.9999 9.8 13.1999 9.8H9.69991V23.15C10.4999 23.2167 11.2832 23.3913 12.0499 23.674C12.8166 23.958 13.4666 24.3667 13.9999 24.9C14.3666 23.0333 15.3919 21.4 17.0759 20C18.7586 18.6 20.8332 17.9 23.2999 17.9C26.0332 17.9 28.3332 18.7747 30.1999 20.524C32.0666 22.2747 32.9666 24.3667 32.8999 26.8V27.9H1.24991ZM15.9499 25.9H30.7499C30.6166 24.2 29.8419 22.7747 28.4259 21.624C27.0086 20.4747 25.2999 19.9 23.2999 19.9C21.3666 19.9 19.6919 20.4833 18.2759 21.65C16.8586 22.8167 16.0832 24.2333 15.9499 25.9ZM9.69991 4.4H14.5499V3.75C14.5499 3.41667 14.4252 3.12533 14.1759 2.876C13.9252 2.62533 13.6332 2.5 13.2999 2.5H9.69991V4.4ZM9.69991 8.05H13.2999C13.6332 8.05 13.9252 7.91667 14.1759 7.65C14.4252 7.38333 14.5499 7.1 14.5499 6.8V6.15H9.69991V8.05ZM4.69991 4.4H7.94991V2.5H4.69991V4.4ZM4.69991 8.05H7.94991V6.15H4.69991V8.05ZM4.69991 24.2C5.19991 23.8667 5.70858 23.6253 6.22591 23.476C6.74191 23.3253 7.31658 23.2167 7.94991 23.15V9.8H4.69991V24.2ZM15.9499 25.9H30.7499H15.9499Z" fill="white"/>
                </svg>
                <h1 className="font-[200] ml-2 text-[2rem]">Lunch recipes</h1>
            </div>
            <p className="hidden md:block my-10 md:px-10 px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in aliquam
                tristique lacinia tellus libero massa proin suspendisse. Ante tempus mauris
                nec neque ullamcorper tempor commodo. Nunc vitae velit non et. Nunc id tristique
                vestibulum enim tincidunt a tellus. Malesuada amet tincidunt sit id egestas libero.
                Praesent lectus est quis pretium velit, in. Mi nisi, velit egestas sapien quam mi netus.
            </p>
            <p className="block md:hidden mt-10 mb-4 md:px-10 px-6 leading-8">
                Lunch, the most informal and unassuming of meals, defies easy definition.
                A relatively late entry into the cycle of dining, it is replete with socioeconomic
                forms and meanings.
            </p>

            <div className="featured-recipes md:px-10 px-6 my-10">
                <LunchDesktop />
                <LunchMobile/>
            </div>
            <hr className="hidden md:block md:mx-10 px-6 text-[#ADADAD] h-3 my-[3rem]"/>
            <div className="hidden md:block">
                <Newsletter/>
            </div>


        </section>
    )
}

export default Lunch
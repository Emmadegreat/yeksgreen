import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import logo from '../assets/images/Brand Logo.png';
import twitter from '../assets/images/twitter.png';

const Footer = () => {
    return (
        <footer className='py-8 md:px-14 px-6'>
            <div className="md:flex md:flex-row flex-col justify-between text-white">
                <div className='flex basis-[32%] flex-col items-center md:items-start'>
                    <img src={logo} alt="logo" className='mb-8 md:mb-4' />
                    <p className='text-[16px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                        condimentum quis eget adipiscing eu ut. Nullam eget nibh tincidunt eget.
                    </p>
                </div>
                <div className='text-center basis-[32%] md:my-0 my-12'>
                    <ul className='list-none'>
                        <li className=''><a href="" className='uppercase leading-10'>about us</a></li>
                        <li className=''><a href="" className='uppercase leading-10'>privacy policy</a></li>
                        <li className=''><a href="" className='uppercase leading-10'>disclaimer</a></li>
                    </ul>
                </div>
                <div className='basis-[32%] hidden md:flex flex-col items-center'>
                    <h3 className='uppercase'>Socials</h3>
                    <div className='flex ml-12 pt-3'>
                        <a href=""><img src={facebook} className='w-[35px]' alt="facebook" /></a>
                        <a href=""><img src={twitter} className='w-[35px] mx-4' alt="twitter" /></a>
                        <a href=""><img src={instagram} className='w-[35px]' alt="instagram" /></a>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <hr className='bg-white' />
                <p className='md:text-start text-center text-white pt-2 mb-4'>Copyright <span>{new Date().getFullYear()}</span>. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
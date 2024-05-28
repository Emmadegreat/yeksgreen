const Newsletter = () => {
    return (
        <div>

            <div
                className='relative md:mx-10 mx-6 px-4 flex flex-col rounded before:absolute before:inset-0 before:bg-black before:opacity-60
                    before:z-0 before:rounded mb-[4rem] py-8 text-[#fff] text-justify items-center bg-cover bg-center bg-no-repeat
                    bg-[url("https://res.cloudinary.com/dbnxbly1r/image/upload/v1716584901/hyggex/yeksgreen/newsletterimage2_qdcivn.jpg")]
                    md:bg-[url("https://res.cloudinary.com/dbnxbly1r/image/upload/v1716533626/hyggex/yeksgreen/newsletterimage_nzzvjh.jpg")]'
            >
                <h2 className="text-[38px] font-bold pb-2 z-10">Don&#39;t miss out!</h2>
                <div className="leading-8 md:leading-10 text-[16px] md:text-[20px] text-white z-10">
                    <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-start">Aenean at tristique pellentesque arcu morbi rhoncus viverra</p>
                    <p className="text-start">nisi integer. Dui est, scelerisque amet, cursus. Dui convallis.</p>
                </div>


                <form className="test" onSubmit={(e)=>e.preventDefault()}>
                    <input
                        type="search"
                        name="search"
                        placeholder='Email Address'
                        className='text-white'
                    />
                    <button
                        type="submit"
                        className='bg-white z-10 h-[44px] p-2 text-[#000] submit-btn'
                    >
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none"
                            className="ml-2 md:block hidden"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.3334 2.66675L14.6667 17.3334" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M29.3334 2.66675L20 29.3334L14.6667 17.3334L2.66669 12.0001L29.3334 2.66675Z" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            className="ml-2 md:hidden block"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </button>
                </form>
            </div>


        </div>
    )
}

export default Newsletter
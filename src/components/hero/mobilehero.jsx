const MobileHero = () => {
    return (
        <div className="md:hidden flex flex-col justify-center pt-8 pb-4">
            <div className='pt-4 font-[800] text-[70px] text-[#04471C] leading-[80px]'>
                <h1>Home for</h1>
                <h1 className="">healthy Nigerian</h1>
                <h1>recipes</h1>
            </div>

            <div className='mt-5 flex flex-col'>
                <p className='text-[#020202]'>Ranging from meals to dessert to drinks.</p>
                <form onSubmit={(e)=>e.preventDefault()} className='flex items-center'>
                    <input
                        type="search"
                        name="search"
                        placeholder='Search recipe'
                        className='p-2 mt-8 bg-transparent h-[44px] w-[73%] text-white search-input1'
                    />
                    <button
                        type="submit"
                        className='bg-[#04471C] mt-8 h-[44px] p-2 text-[#000] w-[55px] border-weight-[0rem] submit-btn1'
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            className='ml-2'
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </button>
                </form>
            </div>

        </div>
    )
}

export default MobileHero
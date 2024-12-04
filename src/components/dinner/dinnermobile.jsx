import { DinnerMobileApi } from "../api/feacturedrecipeapi"

const DinnerMobile = () => {
    return (
        <>
            {DinnerMobileApi.map((item, index) => {
                return (
                    <div className="md:hidden flex flex-col rounded shadow-md" key={index}>
                        <img src={item.image} alt="" className=""/>
                        <div className="p-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <span className="font-[600] md:text-[0.8rem]">{item.name1}</span>
                                    <span className="ml-1 font-[600] md:text-[0.8rem]"> {item.name2 }</span>

                                </div>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L5.62666 17.9333L16 28.3067L26.3733 17.9333L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666V6.14666Z" stroke="#058B42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <span className="text-[#058B42] mr-1 md:text-[0.8rem]">{item.description}</span>
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                        className="w-[6px] h-[6px] mx-1"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="4" fill="#3A3A3C"/>
                                    </svg>
                                    <span className="text-[#6E6E6E] md:text-[0.9rem]">{item.text}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="text-[1rem] mx-2">{item.rating}</span>
                                    <svg width="16" height="16" viewBox="0 0 16 15" fill="none"
                                        className=""
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00004 1.33325L10.06 5.50659L14.6667 6.17992L11.3334 9.42659L12.12 14.0133L8.00004 11.8466L3.88004 14.0133L4.66671 9.42659L1.33337 6.17992L5.94004 5.50659L8.00004 1.33325Z" stroke="#058B42" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default DinnerMobile
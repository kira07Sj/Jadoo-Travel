import { FooterLinks } from "../constants"

const Footer = () => {
  return (
    <footer className='w-full h-[200px] flex flex-col lg:flex-row items-center justify-center md:justify-around mt-[4rem] py-[12rem]'>
         <div>
            <h1 className=" font-semibold text_primary text-[44px] lg:text-[60px] -mt-6">Jadoo.</h1>
            <p className="text_fourth text-[13px] md:text-[16px]">Book your trip in minute, <br /> get full Control for much longer.</p>
         </div>

         <div className="flex flex-col items-center justify-center md:flex-row mt-[2rem] gap-[8rem] md:mt-0">
            {FooterLinks.map((item) => (
                <div key={item.id} className="flex flex-col items-center justify-center  mb-[1rem]">
                    <h2 className="text_primary text-[16px] font-bold text-black font-sans md:text-[28px]">{item.title}</h2>
                    <ul className="text_fourth text-[14px] md:text-[18px] mt-[0.5rem]">
                        {item.links.map((link, index) => (
                            <li key={index} className="hover:text_primary cursor-pointer">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
         </div>

         <div className="flex flex-col items-center justify-center mt-[2rem]">
           <div className="flex items-center justify-center gap-[1rem] mb-[1rem]">
             <a href="https://www.facebook.com/"><img src="fb.svg" alt="facebook" /></a>
            <a href="https://www.instagram.com/"><img src="insta.svg" alt="instagram" /></a>
            <a href="https://twitter.com/"><img src="twit.svg" alt="twitter" /></a>
           </div>
           <h1 className="text_fourth font-semibold md:text-[20px]">Discover our app</h1>
            <div className="flex items-center justify-center gap-[1rem] mt-[0.5rem]">
                <a href="https://play.google.com/store/games?hl=en_US">
                    <img src="./GooglePlay.svg" alt="Google Play" />
                </a>
                <a href="https://www.apple.com/app-store/">
                    <img src="./AppStore.svg" alt="App Store" />
                </a>
            </div>
         </div>
    </footer>
  )
}

export default Footer
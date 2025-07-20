import { Logo } from "../constants"

const Logos = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-[2rem] lg:gap-[2rem] mt-10'>
        {Logo.map((item) => (
            <div className={`${item.id == 3 ? 'w-[180px] h-[60px] lg:w-[241px] lg:h-[86px] shadow': ''} flex items-center justify-center rounded-2xl `} key={item.id}>
                <img key={item.id} src={item.imgUrl} alt={item.alt} className={`w-[80px] md:w-[120px] lg:w-[130px] object-contain`}/>
            </div>
        ))}
    </div>
  )
}

export default Logos
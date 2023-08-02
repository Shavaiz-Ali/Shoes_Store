

const ProductTitle = (props) => {
  return (
    <div className={`relative lg:mx-0 ${props.className}`}>
      <h1 className="lg:text-[7rem] sm:text-[5rem] text-[2.5rem] text-black/[0.10] tracking-widest font-[700] uppercase">{props.title}</h1>
        <h1 className="absolute lg:top-[75px] sm:top-[48px] top-[20px] left-[0px] sm:text-2xl text-[16px] font-bold uppercase">- {props.subTitle}</h1>
    </div>
  )
}

export default ProductTitle
 
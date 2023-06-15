import React from 'react'

const MenuCart = ({menuData}) => {
   
  return (
    <>
    <div className='bg-no-repeat bg-cover pt-24 max-h-full min-h-screen' style={{backgroundImage:`url(https://img.freepik.com/free-photo/green-woman-energy-department-interior_1253-741.jpg?size=626&ext=jpg&ga=GA1.1.2046592185.1676194597&semt=ais)`}} >
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-y-10 sm:gap-x-3 md:py-6 text-white flex flex-col p-8 "  >
    {menuData.map((curElem)=>{

        //destructuring
        const {id,name,category,image,description}=curElem;

        return (
            <>
                <div className="w-full rounded-lg shadow-md max-w-sm flex flex-col p-5 space-y-1 dark:bg-gray-900 " key={id} >
                    <div className="title text-2xl font-bold font-serif">{name}</div>
                    <div className="description">{description}</div>
                    <div className="card-read place-self-end text-blue-500 cursor-pointer font-serif">Read</div>
                    <img src={image} alt="images" className='h-60 rounded-md pb-3'/>
                    <button className="bg-white hover:bg-gray-100 text-base text-gray-800 font-bold py-2 px-3 w-fit place-self-end border border-gray-400 rounded shadow font-serif ">Order Now</button>
                </div>   
            </>
        )
    })}
        </div>
    </div>
    </>
  )
}

export default MenuCart

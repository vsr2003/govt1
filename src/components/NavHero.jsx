

const NavHero = () => {
  return (
    <div className=" w-full h-[18vh] flex justify-evenly gap-[30vw] bg-white ">

        <div className=" h-full  ">
            <img src="https://mp.gov.in/assets/img/mp-logo-hin.png" alt="logo" />
        </div>


        <div className=" flex items-center  ">
            <button className=" p-1 px-2 h-[40px] bg-green-800 hover:bg-green-900 rounded-lg text-white text-sm "> MP eService Portal </button>
            <img src="https://mp.gov.in/assets/img/ashok.png" alt="" className=" h-[80px] " />
        </div>
        
    </div>
  )
}

export default NavHero
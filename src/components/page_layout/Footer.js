const Footer = () => {

//flex  justify-around  w-full shadow h-14 bg-yellow-400 text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40"

//text-left mob:text-xs mob:text-center
//text-center mob:text-xs
  return (
    <div className="flex  justify-around  w-full shadow h-12 bg-yellow-400 text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40" >

      <span className="text-left mob:text-xs mob:text-center">Hey....  Thanks for using Food Bazar
      
        <span className="text-red">&#x2764;</span> 
      
      </span>


      <span className="text-center mob:text-xs">Developed with 
        <span className="text-red">&#x2764; </span>

        by Awais
       </span>
       
    </div>
  )


  };


  export default Footer;
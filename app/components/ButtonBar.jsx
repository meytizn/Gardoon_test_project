import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from '@mui/material';

export default function ButtonBar() {
  const [showcreate , setshowcreate]=useState(false)
  return (
    <>
    {/* <div className="w-[90%] text-right m-auto py-[20px] text-[20px]">خانه / سیستم / کاربر </div>


<br/> */}




<div className="w-[90%] text-right m-auto ">
    
    <div className="flex flex-row justify-between w-[100%] text-center text-[20px] content-center items-center  ">



      <Link href="#" >
      <div className="flex flex-row justify-center gap-8 w-[140px] h-[40px]  py-1 bg-[#E0F7FA] rounded-md text-[#00ACC1]">
      <div className=''><FilterAltIcon/></div>
        <div className=''><button>فیلتر</button></div>
        
        {/* <button>افزودن<AddIcon/></button> */}
      
      </div>
      </Link>  




  
      <Link href="#" >
      <div className="flex flex-row justify-center gap-8 w-[140px] h-[40px]  rounded-sm bg-[#00ACC1] text-white py-1">
      <div className=''><AddIcon/></div>
        <div className=''><button >افزودن</button></div>
        
        {/* <button>افزودن<AddIcon/></button> */}
      
      </div>
      </Link>    





    </div>

    </div>


    </>
  )
}

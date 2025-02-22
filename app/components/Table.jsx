"use client"
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function Table() {
    const [showmore , setshowmore]=useState(true)
  return (
    <>

{/* {showmore ? (<div className='w-[100px] text-center bg-slate-500'>Hello world </div>):null} */}

<br/><br/>



{/* table section */}


<div className='w-[90%] m-auto' >  

<div class=" relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    نام
                </th>
                <th scope="col" class="px-6 py-3">
                    نام خانوادگی
                </th>
                <th scope="col" class="px-6 py-3">
                    نام کاربری
                </th>

                <th scope="col" class="px-6 py-3">
                    تاریخ ایجاد
                </th>
                <th scope="col" class="px-6 py-3">
                    تیم
                </th>
                <th scope="col" class="px-6 py-3">
                    نقش
                </th>
                <th scope="col" class="px-6 py-3">
                    داخلی
                </th>
            </tr>
        </thead>



        <tbody className='relative'>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    رضا
                </th>
                <td class="px-6 py-4">
                    مختارپور
                </td>
                <td class="px-6 py-4">
                    Root
                </td>
                <td class="px-6 py-4">
                    1396/11/15
                </td>
                <td class="px-6 py-4">
                    اعضای تیم
                </td>
                <td class="px-6 py-4">
                    اپراتور
                </td>
                <td class="px-6 py-4">
                    4600
                </td>

                <td class="flex items-center px-6 py-4 flex-col " >
                 <button onClick={()=>setshowmore(!showmore)}><MoreVertIcon/></button> 
                </td>



            </tr>


            {/* more section */}

            {showmore ? (
                <div class="px-6 py-4 absolute left-[80px] top-0 w-[250px] md:w-[130px]  md:my-[-50px] bg-white  ">
                    <div className='flex flex-row md:flex-col gap-3  justify-around text-center'>
                    <div><button>ویرایش</button></div>
                   <div> <button>غیرفعال </button></div>
                    <div><button>حذف</button></div>
                    </div>
                </div>
                ):null}


            {/* more section */}

        </tbody>


    </table>
</div>

</div>  



{/* end table section */}
    </>
  )
}

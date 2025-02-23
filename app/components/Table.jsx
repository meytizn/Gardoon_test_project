"use client"
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableData from './TableData';



export default function Table() {
    const [showmore , setshowmore]=useState(false)
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





             {/* tbody is storing in TableData component addressed below     */}
                <TableData/>


    </table>
</div>

</div>  



{/* end table section */}
    </>
  )
}

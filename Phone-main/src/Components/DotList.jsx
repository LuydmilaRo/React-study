import React from 'react';
import Dot from './Dot';



const DotList = ({pageCount, pageIndex}) => {

    return pageCount.map((e,i)=>{
    if (pageIndex === e)
      return <Dot active = {true}/>
      else 
      return <Dot/>
    })
}

export default DotList;
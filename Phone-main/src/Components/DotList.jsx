import React from 'react';
import Dot from './Dot';



const DotList = ({pageCount, pageIndex, onPageChange}) => {

    return pageCount.map((e,i)=>{
      return <Dot active = {pageIndex === e} onClick={() => onPageChange(e)}/>
    })
};

export default DotList;
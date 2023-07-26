import React from 'react'
import { Button, Drawer } from 'antd';
import { useState } from 'react';
const Drawe = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    return (
      <>
      <div className="flex flex-col gap-y-2 sm:flex xl:hidden" onClick={showDrawer}>
          <div className="w-[35px] h-[3px] rounded-xl dark:bg-white bg-black"></div>
          <div className="w-[25px] h-[3px] rounded-xl dark:bg-white bg-black"></div>
          <div className="w-[35px] h-[3px] rounded-xl dark:bg-white bg-black"></div>
        </div>
       
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  
}

export default Drawe
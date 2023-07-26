import { Collapse, Space } from 'antd';
const { Panel } = Collapse;
import './select.css'
import ptich from './img/ptichka.svg'

const SelectOne = () => (
  <div className='w-[100%]'>
   
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
    <Collapse collapsible="header" defaultActiveKey={['1']}>
      <Panel className='dark:bg-[white]   text-[20px] text-[red]' header="Package Highlights" key="1">
      <div className='flex flex-wrap gap-10'>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
      </Panel>
    </Collapse>
    <Collapse collapsible="icon" defaultActiveKey={['1']}>
      <Panel className='dark:bg-[white] text-[20px]' header="Offer Details" key="1">
      <div className='flex flex-wrap gap-10'>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[10px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
      </Panel>
    </Collapse>
  
    </div>



  <Collapse collapsible="header" defaultActiveKey={['1']}>
      <Panel className='dark:bg-[white] sm2:text-[20px] sm:text-[13px] p-[10px_15px]' header="This panel can only be collapsed by clicking text" key="1">
      <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-10 justify-center'>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-[#EC1F46]'>Purchase Inclusions</h1>
                <div className='flex flex-col  gap-y-10'>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-[#EC1F46]'>Purchase Inclusions</h1>
                <div className='flex flex-col  gap-y-10'>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-[#EC1F46]'>Purchase Inclusions</h1>
                <div className='flex flex-col  gap-y-10'>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-[#EC1F46]'>Purchase Inclusions</h1>
                <div className='flex flex-col  gap-y-10'>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-[#EC1F46]'>Purchase Inclusions</h1>
                <div className='flex flex-col  gap-y-10'>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-[#EC1F46]'>Purchase Inclusions</h1>
                <div className='flex flex-col  gap-y-10'>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
            <div className='flex gap-[20px]'>
                <img src={ptich} alt="" />
                <p>Half Board/ All Inclusive</p>
            </div>
      </div>
            </div>
      </div>
      </Panel>
    </Collapse>
  </div>
);
export default SelectOne;

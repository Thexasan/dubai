import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Acordion = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange} className='border-none'>
      <Panel className='text-[22px] bg-transparent' style={{color:'#E8E8E8'}}  header="This is panel header 1" key="1">
        <p style={{color:'black'}}>{text}</p>
      </Panel>
      <Panel  className='text-[22px] bg-transparent' style={{color:'#E8E8E8'}}   header="This is panel header 2" key="2">
        <p style={{color:'black'}}>{text}</p>
      </Panel>
      <Panel  className='text-[22px] bg-transparent' style={{color:'#E8E8E8'}}  header="This is panel header 3" key="3">
        <p style={{color:'black'}}>{text}</p>
      </Panel>
    </Collapse>
  );
};
export default Acordion;
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
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel className='text-[24px] text-green-600' header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel  className='text-[24px]' header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel  className='text-[24px]' header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
export default Acordion
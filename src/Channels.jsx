import { MdExpandMore } from 'react-icons/md';
import { BiPlus } from 'react-icons/bi';

const Channels = () => {
  return (
    <div className="flex flex-col ml-16 p-4 h-screen bg-gray-800 w-44 fixed">
      <h3 className="font-bold text-gray-300 pb-4 tracking-wider">Channels</h3>
      <div className="">
        <Channel name='Coding'/>
        <Channel name='League'/>
        <Channel name='Simpsons'/>
      </div>
    </div>
  )
}

const Channel = ({name}) => {
  return (
  <div className='flex justify-between items-center'>
    <div className='flex'>
    <div className='rotate-[-90deg] text-violet-500'>
      <MdExpandMore size='20'/>
    </div>
    <span className=' text-gray-500'>{name}</span>
    </div>
    <div className='text-violet-500'>
      <BiPlus size='20'/>
    </div>
  </div>
  )
}

export default Channels

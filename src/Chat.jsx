import { FaHashtag, FaSun, FaSearch } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import Aren from './assets/aren.jpeg'
import Beanie from './assets/profile_pic.png'
const Chat = () => {
  return (
    <div className="ml-60 bg-gray-700 w-full">
      <ChatHeader />
      <div className="flex flex-col w-2/3 mx-auto py-5">
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
        <Message message={message1}/>
        <Message message={message2}/>
      </div>
    </div>
  )
}

const ChatHeader = () => {
  return (
    <div className="flex justify-between h-10 shadow-lg text-gray-500 sticky p-2">
      <div className="flex items-center p-2">
        <div>
          <FaHashtag />
        </div>
        <h1 className='pl-1 text-violet-500'>Tailwind</h1>
      </div>
      <div className="flex items-center p-2">
        <div className=" text-pink-300">
          <FaSun />
        </div>
        <div className="relative m-2">
          <input type="text" placeholder='Search...' className='bg-gray-800 rounded shadow text-xs py-1 p-2 w-20' />
          <div className="absolute right-0.5 top-1.5">
            <FaSearch size='15'/>
          </div>
        </div>
        <div className="pr-2">
        <IoMdNotificationsOutline size='25'/>
        </div>
        <MdAccountCircle size='25' />
      </div>
    </div>
  )
}

const Message = ({message}) => {
  return (
    <div className="flex mb-5">
       <img src={message.image} alt="avatar" className='w-10 h-10 rounded-3xl shadow-lg' />
        <div className="flex flex-col px-3">
          <div className="flex items-center">
            <span className=' text-green-600'>{message.name}</span>
            <span className=' text-gray-500 px-2 font-bold text-xs'>{message.time}</span>
          </div>
          <div className=" text-gray-200 text-sm">{message.content}</div>
        </div>
    </div>
  )
}

const message1 = {
  image: Aren,
  name: 'Aren',
  time: 'one hour ago',
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus assumenda deserunt, sit quibusdam dignissimos, alias distinctio sapiente eum, itaque laudantium corrupti velit repellat! Labore architecto eligendi consequuntur dolorum sed. Quaerat voluptas cum, veniam corporis vero ut praesentium magni fuga quo expedita perferendis nemo iste enim iusto blanditiis ullam sapiente nisi quia? Nemo ab magnam earum soluta saepe praesentium sequi?'
}

const message2 = {
  image: Beanie,
  name: 'Beanie Me',
  time: 'one hour ago',
  content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus assumenda deserunt, sit quibusdam dignissimos, alias distinctio sapiente eum, itaque laudantium corrupti velit repellat! Labore architecto eligendi consequuntur dolorum sed. Quaerat voluptas cum, veniam corporis vero ut praesentium magni fuga quo expedita perferendis nemo iste enim iusto blanditiis ullam sapiente nisi quia? Nemo ab magnam earum soluta saepe praesentium sequi?'
}

export default Chat

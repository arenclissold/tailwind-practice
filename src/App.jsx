import react from "react";
import SideBar from './SideBar'
import Channels from "./Channels";
import Chat from "./Chat"

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channels />
      <Chat />
    </div>
  )
}

import { FaReact } from 'react-icons/fa';
import { DiCodeigniter, DiCode, DiGitBranch, DiIe  } from 'react-icons/di';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                  bg-gray-900  text-white shadow">
      <SideBarIcon icon={<FaReact size='20' />} />
      <SideBarIcon icon={<DiCodeigniter size='20' />} />
      <SideBarIcon icon={<DiCode size='20' />} />
      <SideBarIcon icon={<DiGitBranch size='20' />} />
      <SideBarIcon icon={<DiIe size='20' />} />
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
)

export default SideBar

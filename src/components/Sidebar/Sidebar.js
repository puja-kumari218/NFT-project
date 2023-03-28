import './Sidebar.css';
import { TbCategory2 } from "react-icons/tb";
import { BsCollection } from "react-icons/bs";
import { TbDiamond } from "react-icons/tb";
import { FaSellsy } from "react-icons/fa";





function Sidebar() {
  return (
    <div className="Sidebar-Container">

      <div>
        <BsCollection size={25}  className="Collection" />

        <a href='/MyCollections' className='Mycollection'>My Collections</a>
      </div>

      <div>
        <TbDiamond size={25}  className="Diamond" />

        <a href='/MyBids' className='Bids'>My Bids</a>

      </div>
      <div>
        <FaSellsy size={25}  className="Sellsy" />

        <a href='/MySales' className='MySales'>My Sales / Packs</a>
      </div>
      <div>
        <TbCategory2 size={25}  className="Category2" />
        <a href='/MyItems' className='MyItems'>My Items</a>

      </div>

    </div>
  );
}

export default Sidebar;


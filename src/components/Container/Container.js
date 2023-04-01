 import './Container.css';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';

function Container() {
  return (
    <div className="Container">
    <Search />
    <Sidebar /> 
    <MainContainer/> 
    </div>
  );
}

export default Container;


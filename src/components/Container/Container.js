 import './Container.css';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';

function Container() {
  return (
    <div className="Container">
  <label for="checkbox" class="label">
    <i class="fas fa-moon"></i>
    <i class='fas fa-sun'></i>
    <div class='ball'/>
  </label>
    <Search />
    <Sidebar /> 
    <MainContainer/> 
    </div>
  );
}

export default Container;


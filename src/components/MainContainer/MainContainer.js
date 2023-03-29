import './MainContainer.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MyBids from '../MyBids/MyBids';
import MyCollections  from '../MyCollections/MyCollections';
import MyItems from '../MyItems/MyItems';
import MySales from '../MySales/MySales';
import Explore from '../Explore/Explore';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import HomePage from '../HomePage/HomePage';


function MainContainer() {
  return (
    <div className="Main-Container">

      

      

            <Router>
      <div>
        <Routes>

        <Route exact path="/" 
              element={
                <>
                <HomePage />
               
                </>
              }
            />
            
            <Route exact path="/MyItems" 
              element={
                <>
                   <Explore/>
                <MyItems />
               
                </>
              }
            />

            <Route exact path="/MyCollections" 
              element = {
                <>
                  <Explore/>
                <MyCollections/>
                </>
              }
            />
            
            <Route exact path="/MySales"  element={
              <>
                <Explore/>
              <MySales/>
              </>}
            /> 
             <Route exact path="/MyBids"  element={
              <>
              <Explore/>
            <MyBids/>
              </>}
            /> 

            

            
        </Routes>
        
    </div>
    </Router>
 
 <CategoryContainer />


    </div>
  );
}

export default MainContainer;


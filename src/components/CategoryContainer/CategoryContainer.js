import Button from 'react-bootstrap/Button';
import './CategoryContainer.css';
import AllCategory from '../AllCategory/AllCategory';
import ArtCategory from '../ArtCategory/ArtCategory';
import PhotographyCategory from '../PhotographyCategory/PhotographyCategory';
import GamesCategory from '../GamesCategory/GamesCategory'; 
import Explore from '../Explore/Explore';
import {
    
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
function CategoryContainer() {
  return (
    <div className="CategoryContainer">
        
        <Router>
      <div>
        <Routes>
            
            
<Route exact path="/AllCategory"
                            element={
                                <>
      <Explore/>
                                    <AllCategory />
                                </>
                            }
                        />

                        <Route exact path="/ArtCategory"
                            element={
                                <>
                                      <Explore/>
                                    <ArtCategory />
                                </>
                            }
                        />

                        <Route exact path="/PhotographyCategory" element={
                            <>
                                  <Explore/>
                                <PhotographyCategory />
                            </>}
                        />
                        <Route exact path="/GamesCategory" element={
                            <>
                                  <Explore/>
                                <GamesCategory />
                            </>}
                        />
            
        </Routes>
        
    </div>
    </Router>
    </div>

  );
}

export default CategoryContainer;
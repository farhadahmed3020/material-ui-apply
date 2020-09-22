import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetails/PostDetail';

function App() {
  return (
     <Router>
       <Switch> 
         <Route exact path ="/">
           <Home/>
         </Route>
          <Route path ="/home"> 
          <Home></Home>
          </Route>
          <Route path ="/post/:postId">
            <PostDetail/>
          </Route>
          <Route path="*">
           <NotFound></NotFound>
          </Route>
       </Switch>
     </Router>
  
  );
}

export default App;

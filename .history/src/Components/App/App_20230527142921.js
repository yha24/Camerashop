// import React, {Component} from 'react';
// import Route from './Route';
// import {Route, BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
// class App extends Component {
//   render() {
//     return (
//       <Router>
//           <div>
//             <div>
//               {this.showContentMenus(routes)}
//             </div>
//           </div>
//       </Router>
//     );
//   }
//   showContentMenus = (routes) => {
//     var result = null;
//     if (routes.length > 0) {
//       result = routes.map((route, index) => {
//         return (<Route
//           key={index}
//           path={route.path}
//           exact={route.exact}
//           component={route.main}
//         />
//         )
//       });
//     }
//     return <Switch>{result}</Switch>;
//   }

// }

// export default App;

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
 
} from "react-router-dom";
import './App.css';
// import Delete from "./Containers/Delete";
// import Menu from './component/Menu/Tinhmenu';
// import Showmenu from './component/Menu/Showmenu';
// import Score from './component/Score/Score';
// import White from './component/ShowAPI/Show';
// import Add from './Componeent/Add';
import Showdata from './Componeent/Showdata';
import Home from './component/Router/Home';
import About from './component/Router/About';
import Topic from './component/Router/Contact';
//import Nav from "./component/Nav/Nav";
import Search from "./Componeent/Update";
function App() {
  return (
    <BrowserRouter>
Expand All
	@@ -39,19 +39,21 @@ function App() {
          <Route exact path='/topic' element={<Topic></Topic>}/>
        
      </Routes> */}
{/*       
        <Nav/> 
      <Routes>
          <Route exact path="/" element={ <Showdata />}>
           
          </Route>
        <Route path="/about" element={ <Add />}>
           
          </Route>
          <Route path="/topic" element={<Delete/>}>
            
          </Route> 
        </Routes>  */}
        <Search/>

    </div>
    </BrowserRouter>
  );}
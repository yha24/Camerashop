// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div id="container">
// {/* this is content area */}
// <div id="content">
// {/* this is the content for menu */}
// <div id="left-content">
//    <h1>Category</h1>
//    <ul className="drop">
//       <li><a href="#">Menu item 1</a></li>
//       <li><a href="#">Menu item 2</a></li>
//       <li>
//          <a href="#">Menu item 3</a>
//          <ul className="drop">
//             <li><a href="#">Menu item 3.1</a></li>
//             <li><a href="#">Menu item 3.2</a></li>
//             <li><a href="#">Menu item 3.3</a></li>
//             <li>
//                <a href="#">Menu item 3.4</a>
//                <ul className="drop">
//                   <li><a href="#">Menu item 3.4.1</a></li>
//                   <li><a href="#">Menu item 3.4.2</a></li>
//                   <li><a href="#">Menu item 3.4.3</a></li>
//                   <li><a href="#">Menu item 3.4.4</a></li>
//                   <li>
//                      <a href="#">Menu item 3.4.5</a>
//                      <ul className="drop">
//                         <li><a href="#">Menu item 3.4.5.1</a></li>
//                         <li><a href="#">Menu item 3.4.5.2</a></li>
//                         <li><a href="#">Menu item 3.4.5.3</a></li>
//                         <li>
//                            <a href="#">Menu item 3.4.5.4</a>
//                            <ul className="drop">
//                               <li><a href="#">Menu item 3.4.5.1.1</a></li>
//                               <li><a href="#">Menu item 3.4.5.1.2</a></li>
//                               <li><a href="#">Menu item 3.4.5.1.3</a></li>
//                               <li>
//                                  <a href="#">Menu item 3.4.5.1.4</a>
//                                  <ul className="drop">
//                                     <li><a href="#">Menu item 3.4.5.1.4.1</a></li>
//                                     <li><a href="#">Menu item 3.4.5.1.4.2</a></li>
//                                     <li><a href="#">Menu item 3.4.5.1.4.3</a></li>
//                                     <li><a href="#">Menu item 3.4.5.1.4.4</a></li>
//                                  </ul>
//                               </li>
//                            </ul>
//                         </li>
//                      </ul>
//                   </li>
//                </ul>
//             </li>
//          </ul>
//       </li>
//       <li><a href="#">Menu item 4</a></li>
//       <li><a href="#">Menu item 5</a></li>
//       <li><a href="#">Menu item 6</a></li>
//    </ul>
// </div>
// {/* this is a content for item  */}
// <div id="right-content">
// <h2>Product : </h2>
// <div id="products">
// <div className="product">
// <div className="text">
//    <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
// </div>
// <div className="p-img">
//    <img src="images/mayanh1.jpg" width={200} height={200} />
// </div>
// <div className="text">
//    <div className="p-cat">DIGITAL CAMERA </div>
//    <div className="p-price">Please Call</div>
//    <input type="button" className="button" name="add" defaultValue="Add to cart" />
// </div>
// <div className="clear" />
// </div>
// <div className="product">
//    <div className="text">
//       <div className="p-name"><a href="item.html">LUMIX DMC-G3</a></div>
//    </div>
//    <div className="p-img">
//       <img src="images/mayanh2.jpg" width={200} height={200} />
//    </div>
//    <div className="text">
//       <div className="p-cat">DIGITAL CAMERA </div>
//       <div className="p-price">Please Call</div>
//       <input type="button" className="button" name="add" defaultValue="Add to cart" />
//    </div>
//    <div className="clear" />
//    </div>
//    <div className="product">
//       <div className="text">
//          <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
//       </div>
//       <div className="p-img">
//          <img src="images/mayanh3.jpg" width={200} height={200} />
//       </div>
//       <div className="text">
//          <div className="p-cat">DIGITAL CAMERA </div>
//          <div className="p-price">Please Call</div>
//          <input type="button" className="button" name="add" defaultValue="Add to cart" />
//       </div>
//       <div className="clear" />
//       </div>
//       <div className="product">
//          <div className="text">
//             <div className="p-name"><a href="item.html">LUMIX DMC-G3</a></div>
//          </div>
//          <div className="p-img">
//             <img src="images/mayanh2.jpg" width={200} height={200} />
//          </div>
//          <div className="text">
//             <div className="p-cat">DIGITAL CAMERA </div>
//             <div className="p-price">Please Call</div>
//             <input type="button" className="button" name="add" defaultValue="Add to cart" />
//          </div>
//          <div className="clear" />
//          </div>
//          <div className="product">
//             <div className="text">
//                <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
//             </div>
//             <div className="p-img">
//                <img src="images/mayanh3.jpg" width={200} height={200} />
//             </div>
//             <div className="text">
//                <div className="p-cat">DIGITAL CAMERA </div>
//                <div className="p-price">Please Call</div>
//                <input type="button" className="button" name="add" defaultValue="Add to cart" />
//             </div>
//             <div className="clear" />
//             </div>
//             <div style={{clear: 'both'}} />
//          </div>
//          <div style={{clear: 'both'}} />
//       </div>
//       <div style={{clear: 'both'}} />
//    </div>

// </div>
//   );
// }

// export default App;


import React, {Component} from 'react';
import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Topic from './Components/Topic';

class App extends Component{
   render(){
      return (
         <Router>
            <div>
               <h2>Welcome to React Router Tutorial!</h2>
               <nav className='navbar navbar-expand-lg navbar-light lg-light'>
                  <ul className='navbar-nav mr-auto'>
                     <li><link to={'/'} className='nav-link'>Home</link></li>
                     <li><link to={'/Topic'} className='nav-link'>Topic</link></li>
                     <li><link to={'/About'} className='nav-link'>About</link></li>
                  </ul>
               </nav>
               <hr>
               <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/Topic' component={Home}/>
                  <Route exact path='/' component={Home}/>
               </Switch>
                  </hr>
            </div>
         </Router>
      )
   }
}
import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Router , Route } from 'react-router-dom';

import Add from './Component/Layout/Add';

// import Routes from'./Routes';
// import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Layout />
        <Routes>           
            <Route exact path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/topic' Component={Topic} />
        </Routes>
      </BrowserRouter> */}
      <Add></Add>
      

    </div>
  );
}

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

export default App;
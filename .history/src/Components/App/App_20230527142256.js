import About from './component/Router/About';
import Topic from './component/Router/Topic';
import Nav from "./component/Nav/Nav";
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
  );
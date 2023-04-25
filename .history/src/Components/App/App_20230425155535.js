import Test from "../body/test";
import Bai5 from "../body/Bai5";
import LoginForm from "../body/loginForm";
import Form from "../body/Form";

function App() {
  return (
    <div id="container">
      <Header />
      {/* this is content area */}
      <LoginForm />
      <Form />
      {/* footer content */}
      <Footer />
    </div>
     );
   }
   export default App;
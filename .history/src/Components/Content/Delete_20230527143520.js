import { useEffect, useState } from "react";
import Add from "../Componen/Add";
import { Link } from "react-router-dom";
function Delete() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
Expand Down
Expand Up
	@@ -43,7 +44,7 @@ function Delete() {
  }

  function selectUser(id) {
    let item = user[id-3];
    setName(item.name);
    setPrice(item.price);
    setAvatar(item.avatar);
Expand Down
Expand Up
	@@ -75,6 +76,7 @@ function Delete() {
  return (
    <div className="hi">
      <h1>DeleteUser with API</h1>
      <div>
      <table border="1 solid black">
        <thead>
          <tr>
Expand All
	@@ -94,15 +96,19 @@ function Delete() {
                <img src={item.avatar} alt={item.name} />
              </td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(item.id)}>Edit</button>
              </td>
              <td>
                  <Link to="/add">Add</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br></br>
        <input type="text" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/><br></br>
        <button onClick={updateUser}>Update</button>
      </div>
    </div>
  );
}
export default Delete;
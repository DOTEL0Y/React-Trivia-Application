// 50:49 ---> video
import { useState } from "react";
import Button from "react-bootstrap/Button";


function ListGroup() {
  const items = ["New York", "Toyko", "London", "San Francisco", "Paris"];
  let selectedIndex = 0;
  // Hook 
  const [selectedIndex, setSelectedIndex] = useState(-1);
//   arr[0] // variable (selectedIndex)
//   arr[1] // updater function

  return (
    <>
      <div>
        <h1>List Group</h1>
        <Button>submit</Button>
        <ul className="list-group">
          {items.map((item,index) => (
            <li onClick={setSelectedIndex(index)} className={ selectedIndex === index ? 'list-group-item active':'list-group-item '} key={item} >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListGroup;

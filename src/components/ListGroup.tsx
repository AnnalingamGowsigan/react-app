import { Fragment, useState } from "react";

//{items: string[] , heading : string}
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Hook (stateHook):- using this we say that our component have state that change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // here we are using {} to render variable dynamically
  return (
    <Fragment>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items find</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

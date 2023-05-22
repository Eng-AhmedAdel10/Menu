import React , {useState} from "react";
import list from "./data";
import Category from "./Category";
import Menu from "./Menu";

const  allCategories=["all",...new Set(list.map(item=>item.category))];

function App() {

  const [menuItems,setMenuItems]=useState(list);
  const [categories,setCategories]=useState(allCategories);

  const filterMenu=(category)=>{
    if(category === "all")
    {
      setMenuItems(list);
    }
    else
    {
      const newMenu=list.filter(item=> item.category === category)
      setMenuItems(newMenu)
    }
  }

  return (
    <div className="container">

      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
        
      <Category categories={categories} filterMenu={filterMenu} />

      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;

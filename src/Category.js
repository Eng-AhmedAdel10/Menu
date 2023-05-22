import React from 'react'

function Category({categories,filterMenu}) {
    return (
        <ul className="btn-container">
          {
            categories.map((item,index)=>{
              return <button key={index}
                  className="btn"
                  onClick={()=>filterMenu(item)}>
                    {item}
                </button>
            })
          }
        </ul>
    )
}

export default Category

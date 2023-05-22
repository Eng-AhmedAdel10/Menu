import React from 'react'

function Menu({menuItems}) {
    return (
        <section className="menu-container">
          {
            menuItems.map(item=>{
              const {id,title,price,img,desc}=item;
              return <article key={id} className="menu-item">
                <div className="img-container">
                  <img className="img" src={img} alt={title}/>
                </div>
                  <div className="info">
                    <header>
                      <h4 className="item-title">{title}</h4>
                      <h4 className="price">$ {price}</h4>
                    </header>
                      <p className="desc">{desc}</p>
                  </div>
              </article>
            })
          }
        </section>
    )
}

export default Menu

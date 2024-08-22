import { Basket } from "./component/Basket";
import { ProductList } from "./component/ProductList";
import { useState } from 'react'
import './App.css'

export default function App() {
  const [products, setProducts] = useState([
    { id: 101, name: "Puma Rs-X1", price: 42, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers" },
    { id: 102, name: "Puma Rs-X2", price: 42, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380462/01/fnd/PNA/fmt/png/RS-X-Mix-Men's-Sneakers" },
    { id: 103, name: "Puma Rs-X3", price: 35, photo: "https://i.ebayimg.com/images/g/bYoAAOSwoFlmNCUN/s-l1200.jpg" },
    { id: 104, name: "Puma Rs-X4", price: 65, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers" },
    { id: 105, name: "Puma Rs-X5", price: 62, photo: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f03a2c40-6c16-4f34-811f-9275c057c547/phantom-gx-2-elite-fg-low-top-football-boot-94g3qx.png" },
    { id: 106, name: "Puma Rs-X6", price: 82, photo: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c291f5b4-2622-4470-897e-0ecf77618bc6/tiempo-legend-10-elite-electric-fg-low-top-football-boot-20SHll.png" },
    { id: 107, name: "Puma Rs-X7", price: 120, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395551/06/sv01/fnd/EEA/fmt/png" },
    { id: 108, name: "Puma Rs-X8", price: 75, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371860/01/sv01/fnd/PNA/fmt/png/RS-X-Subvert-Men's-Sneakers" },
    { id: 109, name: "Puma Rs-X8", price: 225, photo: "https://images.footlocker.com/is/image/EBFL2/38989601?wid=250&hei=250" },
  ])

  const [basket, setBasket] = useState([])

  const moveToCart = id => {
    let prod = products.find(y => y.id === id)
    let found = basket.find(x => x.id === id)
    if (!found) {
      setBasket([...basket, { ...prod, count: 1 }])
    } else {
      found.count++
      setBasket([...basket])
    }
  }

  const handlePlus = id => {
    const item = basket.find(x => x.id === id)
    item.count++
    setBasket([...basket])
  }
  const handleMinus = id => {
    const item = basket.find(x => x.id === id)
    if (item.count != 1) {
      item.count--
      setBasket([...basket])
    }
  }
  const handleRemove = id => {
    let result = basket.filter((el) => el.id != id)
    setBasket([...result])
  }
  const handleSort = () => {
    let result = basket.sort((a, b) => b.price - a.price)
    setBasket([...result])
  }
  return <>
    <h1>Online Shop</h1>
    <div className="row">
      <ProductList
        items={products}
        onMove={moveToCart}
      />
      <Basket
        cart={basket}
        onPlus={handlePlus}
        onMinus={handleMinus}
        onRemove={handleRemove}
        onSort={handleSort}
      />
    </div>

  </>
}
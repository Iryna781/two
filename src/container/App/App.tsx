import ProductsList from './Products/ProductsList'
import { useState } from 'react'
type CartDataProps = {
    totalPrice: number
}
const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalPrice: 0,
    })

    return (
        <>
            <ProductsList cartData={cartData} />
        </>
    )
}
export default App

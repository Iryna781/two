import { Grid, Typography } from '@mui/material'
import './ProductsList.css'
import productsArray from './productsArray'
import { useState } from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'

type Props = {
    id: number
    title: string
    desc: string
    price: number
    cartData: {
        totalPrice: number
    }
    buyProductToCart: (total: number, price: number) => void
}
type CartDataProps = {
    totalPrice: number
}
const ProductsList = ({ cartData, buyProductToCart }: Props) => {
    const [count, setCount] = useState<number>({ price })
    const onChangeUsd = () => {
        setCount((prevState: number) => prevState * 1.05)
    }
    const onChangeEur = () => {
        setCount((prevState: number) => prevState * 1)
    }
    const onChangeUan = () => {
        setCount((prevState: number) => prevState * 40.5)
    }
    const onChangePln = () => {
        setCount((prevState: number) => prevState * 4.42)
    }
    const buyProductToCart = (total: number, price: number) => {
        setCartData((prevState: CartDataProps) => ({
            totalPrice: prevState.totalPrice + total * price,
        }))
    }
    return (
        <>
            <Typography variant="h4" align="center">
                Our shop page
            </Typography>
            <div className="button">
                <Button variant="outlined" onClick={onChangeUsd}>
                    USD
                </Button>
                <Button variant="outlined" onClick={onChangeEur}>
                    EUR
                </Button>
                <Button variant="outlined" onClick={onChangeUan}>
                    UAN
                </Button>
                <Button variant="outlined" onClick={onChangePln}>
                    PLN
                </Button>
            </div>
            <Grid
                container
                direction="row"
                alignItems="center"
                spacing={8}
                marginBottom="30px"
            >
                {productsArray.map(({ id, title, desc, price }: Props) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Card className="product-list">
                            <CardContent>
                                <h2 className="product-title">{title}</h2>
                                <p className="product-desc">{desc}</p>
                                <div className="product-price" value={count}>
                                    {price}
                                </div>
                                <CardActions className="btns-wrap">
                                    <Button
                                        variant="outlined"
                                        onClick={() => buyProductToCart()}
                                    >
                                        Buy
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h5" align="center">
                total: {cartData.totalPrice} $
            </Typography>
        </>
    )
}

export default ProductsList

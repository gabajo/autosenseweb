

export default function PointContent({ point, product, prices }) {
    return (


        <span style={{ display: "flex" }} >

            <div component={'span'} >{point.id}</div>
            <div component={'span'} >{point.status}</div>
            {prices.map((idx, pricesKey) => {
                if (prices[pricesKey].product_id === product.product_id) {
                    return (<div key={idx}>{prices[pricesKey].price} {prices[pricesKey].currency}</div>)
                }
            })}
        </span>
    )
}
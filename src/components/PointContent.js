import EditableField from "./EditableField"

export default function PointContent({ point, product, prices, setStations }) {
    return (


        <span style={{ display: "flex", justifyContent: "space-evenly" }} >

            <div>{point.id}</div>
            <div>{point.status}</div>
            {prices.map((idx, pricesKey) => {
                if (prices[pricesKey].product_id === product.product_id) {
                    return (<div key={idx}>{prices[pricesKey].price} {prices[pricesKey].currency}</div>)
                    // return (<div key={idx}><EditableField value={prices[pricesKey]} setStations={setStations} />{prices[pricesKey].currency}</div>)
                } return false
            })}
        </span>
    )
}
import PointContent from './PointContent';

export default function ProductContent({ idx, product, prices, setStations }) {



    return (
        <div>
            <div>{product.product_id}</div>

            {product.points.map((point) => {

                return (
                    <PointContent key={point.id} point={point} product={product} prices={prices} setStations={setStations} />

                )

            })}
        </div>
    )
}
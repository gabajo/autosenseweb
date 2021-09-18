import PointContent from './PointContent';

export default function ProductContent({ idx, product, prices }) {



    return (
        <div>
            <div>{product.product_id}</div>

            {product.points.map((point) => {

                return (
                    <PointContent key={point.id} point={point} product={product} prices={prices} />

                )

            })}
        </div>
    )
}
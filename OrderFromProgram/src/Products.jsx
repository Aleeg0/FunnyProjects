import './products.css'
import propTypes from 'prop-types'

function Products(props){

    const itemList = props.items.map(item =>
        <li key={item.id}>
            <p>{item.name}: <b>{item.calories}</b></p>
        </li>
    )

    return(
        <div className='categoryBox'>
            <h2>{props.category}</h2>
            <ul>
                {itemList}
            </ul>
        </div>    
    );
}

Products.propTypes = {
    category: propTypes.string,

    items: propTypes.arrayOf(propTypes.shape(
        {
            id: propTypes.number,
            name: propTypes.string,
            calories: propTypes.number
        }
    ))
}

Products.defaultProps = {
    category: "category",
    items: []
}

export default Products;
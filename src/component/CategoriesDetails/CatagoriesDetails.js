import React, { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../App';
import AgainCategories from '../AgainCategories/AgainCategories';


const allProduct = [
    {name: 'sumsang', category: 'laptop'},{name: 'Dell', category: 'laptop'},{name: 'hp', category: 'laptop'},
    {name: 'canon', category: 'camera'},{name: 'Sony', category: 'camera'},{name: 'nikkon', category: 'camera'},
    {name: 'sumsang', category: 'mobile'},{name: 'nokia', category: 'mobile'},{name: 'realme', category: 'mobile'}


]

const CatagoriesDetails = () => {
    const [category, setCategory] =useContext(CategoriesContext)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const matchProduct = allProduct.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProduct(matchProduct);
    }, [category])
    return (
        <div>
            <h5>This is CatagoriesDetails : {category}</h5>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camere</button>
            {
                product.map(pd => <AgainCategories product={pd}></AgainCategories>)
            }
        </div>
    );
};

export default CatagoriesDetails;
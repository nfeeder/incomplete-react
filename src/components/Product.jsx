import React from 'react'

function Product(props) {

    const {
        product: { id, nome, preco, categoria, emStock },
        toggleStock,
        eliminarProduct
    } = props

    return (
        <div
            className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
            <h3 className='nome'>{nome}</h3>
            <h3 className='preco'>{preco}</h3>
            <h3 className='categoria'>{categoria}</h3>

            <button onClick={() => toggleStock(id)}>
                {emStock ? "Em Stock" : "Fora de Stock"}
            </button>

            <button className='delete' onClick={() => eliminarProduct(id)}>
                Eliminar
            </button>
        </div>
    )
}

export default Product

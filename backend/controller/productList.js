
const productList = (arr) => {
    
   let queryArr=arr.map((ele) => {
        return {product_type:`${ele}`}
    })
    console.log(queryArr);
    return queryArr
}

// productList()
module.exports = productList

const createQueries = (arrOfProducts,arrOfBrands) => {
	const map = new Map();
	for (let i = 0; i < arrOfProducts.length; i++) {
		for (let j = 0; j < arrOfBrands.length; j++) {
			if (map.has(arrOfProducts[i])) {
				let temp = map.get(arrOfProducts[i]);
				temp.push(arrOfBrands[j]);
				map.set(arrOfProducts[i], temp);
			} else {
				let temp = [];
				temp.push(arrOfBrands[j]);
				map.set(arrOfProducts[i], temp);
			}
		}
	}
	// console.log(map)
	let combinationsArray = [];

	for ([key, values] of map) {
		values.forEach((e) => {
			combinationsArray.push({ [key]: e });
		});
	}
	// console.log(combinationsArray)


	const queryArr = [];
	combinationsArray.map((ele) => {
		for (x in ele) {
			queryArr.push({
				$and: [{ product_type: `${x}` }, { brand: `${ele[x]}` }],
			});
		}
	});
	return queryArr;
}


module.exports =createQueries
		







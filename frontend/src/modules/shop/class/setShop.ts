/**
 * Convert price string type into number type
 * @param {string} price : price as string that we input, somehow it show like function price()
 */
export const convertPriceToNumber = (price) => {
	return parseInt(String(price).replace(/[^\d\.]+/, ''))
}

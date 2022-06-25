import create from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * @productAdded must be search using product_id to match up woocommerce
 */
const useCart = create(
	persist(
		(set, get) => ({
			total: 0,
			totalqty: 0,
			cartLength: 0,
			cartContent: [],
			// product.price return as string, you need it as number
			addToCart: (params) => {
				set((state) => {
					const product = state.cartContent.find((item) => item.product_id === params.product_id)

					if (product) {
						product.quantity++
						return {
							...state,
							totalqty: state.totalqty + 1,
							total: state.total + parseFloat(params.price),
						}
					} else {
						return {
							...state,
							totalqty: state.totalqty + 1,
							total: state.total + parseFloat(params.price),
							cartContent: [...state.cartContent, params],
						}
					}
				})
			},
			clearCart: () => set((state) => ({ ...state, cartContent: [], totalqty: 0, total: 0 })),
			removeFromCart: (id) => {
				set((state) => {
					const product = state.cartContent.find((item) => item.product_id === id)
					return {
						total: state.total - product.price * product.quantity,
						totalqty: state.totalqty - product.quantity,
						cartContent: state.cartContent.filter((item) => item.product_id !== id),
					}
				})
			},
			incrementQuantity: (id) => {
				set((state) => {
					const product = state.cartContent.find((item) => item.product_id === id)
					if (product) {
						product.quantity++
						return {
							totalqty: state.totalqty + 1,
							total: state.total + parseFloat(product.price),
						}
					}
				})
			},
			decrementQuantity: (id) => {
				set((state) => {
					const product = state.cartContent.find((item) => item.product_id === id)
					if (product.quantity > 1) {
						product.quantity--
						return {
							totalqty: state.totalqty - 1,
							total: state.total - product.price,
						}
					}
				})
			},
		}),
		{ name: 'cart' }
	)
)

export default useCart

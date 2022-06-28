import create, { StateCreator } from 'zustand'
import { devtools, persist, PersistOptions } from 'zustand/middleware'

// Methods
import { addProductSuccess } from '../../../utils/sweetalert2'

console.log('test:'.addProductSuccess)

interface CartProduct {
	product_id: string
	name: string
	price: number
	src: string
	quantity: number
}

type CartStore = {
	total: number
	totalqty: number
	cartContent: CartProduct[]
	clearCart: VoidFunction
	addToCart: (params: CartProduct) => void
	removeFromCart: (id: string) => void
	incrementQuantity: (id: string) => void
	decrementQuantity: (id: string) => void
}

type MyPersist = (config: StateCreator<CartStore>, options: PersistOptions<CartStore>) => StateCreator<CartStore>
/**
 * @productAdded must be search using product_id to match up woocommerce
 */
const useCart = create(
	(persist as MyPersist)(
		(set, get) => ({
			total: 0,
			totalqty: 0,
			cartLength: 0,
			cartContent: [],
			// product.price return as string, you need it as number
			addToCart: (params: any) => {
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
						addProductSuccess()
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
					const product: any = state.cartContent.find((item) => item.product_id === id)
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

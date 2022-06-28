import Swal from 'sweetalert2/dist/sweetalert2.js'

function addProductSuccess() {
	Swal.fire({
		position: 'top-end',
		title: 'Product added',
		icon: 'success',
		timer: 1000,
		timerProgressBar: true,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
		backdrop: false,
	})
}

function removeProductSuccess() {
	Swal.fire({
		position: 'top-end',
		title: 'Product removed',
		icon: 'success',
		timer: 1000,
		timerProgressBar: true,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
		backdrop: false,
	})
}

function cartUpdate() {
	Swal.fire({
		position: 'top-end',
		title: 'Cart Update',
		icon: 'success',
		timer: 1000,
		timerProgressBar: true,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
		backdrop: false,
	})
}

function orderSuccess() {
	Swal.fire({
		title: 'Order Succesful',
		text: 'Thanks you for purchase with us, we will keep you updated',
		icon: 'success',
		timer: 2000,
		timerProgressBar: true,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
	})
}

function orderProcess() {
	Swal.fire({
		title: 'Processing your Order',
		text: 'Please Wait',
		icon: 'info',
		timer: 2000,
		timerProgressBar: true,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
	})
}

function emptyCart() {
	Swal.fire({
		title: 'Empty Cart',
		text: 'Your cart is empty, please select your buying product and try again',
		icon: 'error',
		timer: 2000,
		timerProgressBar: true,
		allowEscapeKey: false,
		allowOutsideClick: false,
		showConfirmButton: false,
	})
}

export { addProductSuccess, removeProductSuccess, cartUpdate, orderSuccess, orderProcess, emptyCart }

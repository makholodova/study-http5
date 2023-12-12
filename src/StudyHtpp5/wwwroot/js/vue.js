/*Vue.createApp({
	data() {
		return {
			product: "Socks"
		}
	},
	methods: {
		setMessage(event) {
			this.product = event.target.value;
		}
	}
}).mount('#app');*/



 let app= new Vue({
	el: '#app',
	data: {
		product: "Socks"
	}
})
<template src="./template.html"></template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'
interface Company {
	companyName: string
	address: string
}
export default Vue.extend({
	name: 'MyComponent',
	props: {
		company: {
			type: Object,
			required: true,
		} as PropOptions<Company>,
	},
	data() {
		return {
			message: 'This is a message',
		}
	},
	computed: {
		fullName(): string {
			return `${this.company.companyName} ${this.company.address}`
		},
	},
})
</script>
<style src="./style.scss" lang="scss" scoped></style>

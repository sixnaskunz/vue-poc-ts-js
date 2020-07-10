<template>
	<v-layout column justify-center align-center>
		<v-flex xs12 sm8 md6>
			<div class="text-center">
				<logo />
				<vuetify-logo />
				<my-component-js></my-component-js>
				<my-component-ts :company="company"></my-component-ts>
				{{ user.firstName }}
			</div>
		</v-flex>
	</v-layout>
</template>

<script lang="ts">
import Company from '~/models/company.ts'
import User from '~/models/user.ts'

export default {
	components: {},
	data() {
		const user: User = { firstName: 'HELLO WORLD', lastName: '', age: 28 }
		const company = new Company('TESCO', '1234')
		return {
			user,
			company,
		}
	},
}
</script>

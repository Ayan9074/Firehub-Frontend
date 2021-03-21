<template>
<div class="inner-block">
	<div class="vue-tempalte">
		<form>
			<h3>Sign In</h3>

			<div class="form-group">
				<label>Email address</label>
				<input
					type="email"
					class="form-control form-control-lg"
					v-model="email"
				/>
			</div>

			<div class="form-group">
				<label>Password</label>
				<input
					type="password"
					class="form-control form-control-lg"
					v-model="password"
				/>
			</div>

			<button
				type="submit"
				class="btn btn-dark btn-lg btn-block"
				@click="login()"
			>
				Sign In
			</button>
			<!--<div>{{ users }}</div>-->
		</form>
	</div>
</div>
</template>

<script>
import { gql } from "apollo-boost";

export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	//apollo: {
	//	users: gql`
	//		query {
	//			users {
	//				id
	//				email
	//				createdAt
	//			}
	//		}
	//	`,
	//},
	methods: {
		async login() {
			const { email, password } = this.$data;
			this.$apollo.mutate({
				mutation: gql`
					mutation login($email: String!, $password: String!) {
						login(email: $email, password: $password) {
							id
							email
							createdAt
						}
					}
				`,
				variables: {
					email,
					password,
				},
			});
		},
	},
};
</script>

<template>
<div class="inner-block">
	<div class="vue-template">
		<form>
			<h3>Register</h3>

			<div class="form-group">
				<label>Email address</label>
				<input type="email" class="form-control form-control-lg" />
			</div>

			<div class="form-group">
				<label>Password</label>
				<input type="password" class="form-control form-control-lg" />
			</div>

			<button type="submit" class="btn btn-dark btn-lg btn-block">
				Sign Up
			</button>
		</form>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>
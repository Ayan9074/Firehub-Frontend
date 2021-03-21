<template>
	<div class="vue-template">
		{{ me }}
	</div>
</template>
<script>
import { gql } from "apollo-boost";
export default {
	apollo: {
		me: {
			query: gql`
				query {
					me {
						id
						email
						createdAt
					}
				}
			`,
		},
	},
};
</script>
<template>
	<div class="page-header">
		<div class="page-header--inner">
			<a class="site-header">
				<AppIcon icon="logo" size="logo" />
				Context Labs
			</a>
			<h1><slot></slot></h1>
		</div>
	</div>
</template>

<style lang="scss">
.page-header {
	background: $c-black;
}

.page-header--inner {
	margin: 0 auto;
	max-width: 980px;
	display: flex;
	flex-wrap: wrap;
	min-height: 30vh;

	h1 {
		@include big-text();
		color: $c-white;
		flex-basis: 100%;
		flex-shrink: 0;
		margin: auto 0 24px 0;
	}
}

.site-header {
	align-items: center;
	color: $c-white;
	display: flex;
	font-size: 32px;
	margin: 24px 0 auto 0;
}
</style>

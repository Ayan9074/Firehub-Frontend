<template>
	<div class="vue-tempalte">
		<!-- Navigation -->
		<header>
			<nav class="navbar navbar-expand-lg navbar-light changecolor topsize" style="top: 0px; width: 100%; opacity:0.5; position: fixed;" id="nav">
				<a class="navbar-brand" href="/" style="color: white; z-index: 99 !important; right: 50%; margin-left: 10%; margin-top: 1%;">ZoomClone</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup" style="z-index: 99;">
				</div>
			</nav>
		<div class="para" style="position: fixed; left: -30px; top: 0px;"></div>
		</header>

		<!-- Main -->
		<div class="App">
			<div class="vertical-center">
				<!--<div class="inner-block">-->
					<router-view />
				</div>
			<!--</div>-->
		</div>
	</div>
</template>

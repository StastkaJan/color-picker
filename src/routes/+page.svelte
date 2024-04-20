<script lang="ts">
	import Hsla from '$lib/hsla.svelte'
	import Rgba from '$lib/rgba.svelte'
	import Hex from '$lib/hex.svelte'

	import { hslaToRgba, rgbaToHsla, rgbaToHex, hexToRgba } from '$lib/util'

	let hslaArray = [120, 25, 25, 1]
	let rgbaArray = hslaToRgba(hslaArray)
	let hexArray = rgbaToHex(rgbaArray)

	const hslaChange = (e: CustomEvent) => {
		hslaArray = e.detail.hslaArray
		rgbaArray = hslaToRgba(hslaArray)
		hexArray = rgbaToHex(rgbaArray)
	}

	const rgbaChange = (e: CustomEvent) => {
		rgbaArray = e.detail.rgbaArray
		hslaArray = rgbaToHsla(rgbaArray)
		hexArray = rgbaToHex(rgbaArray)
	}

	const hexChange = (e: CustomEvent) => {
		hexArray = e.detail.hexArray
		rgbaArray = hexToRgba(hexArray)
		hslaArray = rgbaToHsla(rgbaArray)
	}
</script>

<h1>Color picker</h1>

<div class="color" style="background-color: rgba({rgbaArray.join(', ')});"></div>

<div class="config">
	<Hsla {hslaArray} on:change={hslaChange} />
	<Rgba {rgbaArray} on:change={rgbaChange} />
	<Hex {hexArray} on:change={hexChange} />
</div>

<style>
	.color {
		width: 100%;
		height: 300px;
	}
	.config {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%/1, max(300px, 100%/3)), 1fr));
	}
</style>

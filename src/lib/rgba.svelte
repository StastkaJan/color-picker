<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let rgbaArray: number[]

	const dispatch = createEventDispatcher()

	const input = (num: number, i: number) => {
		rgbaArray[i] = num
		dispatch('change', { rgbaArray })
	}
</script>

<div>
	<h2>RGBA</h2>
	<div>
		<label for="red">Red [0-255]</label>
		<input
			id="red"
			type="range"
			value={rgbaArray[0]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 0)}
			min="0"
			max="255"
		/>
		<input
			type="number"
			value={rgbaArray[0]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 0)}
			min="0"
			max="100"
		/>
	</div>
	<div>
		<label for="green">Green [0-255]</label>
		<input
			id="green"
			type="range"
			value={rgbaArray[1]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 1)}
			min="0"
			max="255"
		/>
		<input
			type="number"
			value={rgbaArray[1]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 1)}
			min="0"
			max="100"
		/>
	</div>
	<div>
		<label for="blue">Blue [0-255]</label>
		<input
			id="blue"
			type="range"
			value={rgbaArray[2]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 2)}
			min="0"
			max="255"
		/>
		<input
			type="number"
			value={rgbaArray[2]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 2)}
			min="0"
			max="100"
		/>
	</div>
	<div>
		<label for="rgbalpha">Alpha [%; 0-1]</label>
		<input
			id="rgbalpha"
			type="range"
			value={rgbaArray[3]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 3)}
			min="0"
			max="1"
			step="0.01"
		/>
		<input
			type="number"
			value={rgbaArray[3]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 3)}
			min="0"
			max="1"
			step="0.01"
		/>
	</div>
</div>

<style>
	div div {
		display: grid;
		gap: 1rem;
		grid-template-columns: 100px minmax(100px, 200px) 50px;
	}
</style>

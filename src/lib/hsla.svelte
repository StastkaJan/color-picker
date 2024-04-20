<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let hslaArray: number[]

	const dispatch = createEventDispatcher()

	const input = (num: number, i: number) => {
		hslaArray[i] = num
		dispatch('change', { hslaArray })
	}
</script>

<div>
	<h2>HSLA</h2>
	<div>
		<label for="hue">Hue [0-359]</label>
		<input
			id="hue"
			type="range"
			value={hslaArray[0]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 0)}
			min="0"
			max="359"
		/>
		<input
			type="number"
			value={hslaArray[0]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 0)}
			min="0"
			max="359"
		/>
	</div>
	<div>
		<label for="sat">Saturation [%]</label>
		<input
			id="sat"
			type="range"
			value={hslaArray[1]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 1)}
			min="0"
			max="100"
		/>
		<input
			type="number"
			value={hslaArray[1]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 1)}
			min="0"
			max="100"
		/>
	</div>
	<div>
		<label for="light">Lightness [%]</label>
		<input
			id="light"
			type="range"
			value={hslaArray[2]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 2)}
			min="0"
			max="100"
		/>
		<input
			type="number"
			value={hslaArray[2]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 2)}
			min="0"
			max="100"
		/>
	</div>
	<div>
		<label for="hslalpha">Alpha [%; 0-1]</label>
		<input
			id="hslalpha"
			type="range"
			value={hslaArray[3]}
			on:input={(e) => input(Number(e?.currentTarget?.value), 3)}
			min="0"
			max="1"
			step="0.01"
		/>
		<input
			type="number"
			value={hslaArray[3]}
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

<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let hexArray: string[]

	const dispatch = createEventDispatcher()

	const decToHex = (dec: number) => {
		return dec.toString(16)
	}

	const hexToDec = (hex: string) => {
		return parseInt(hex, 16)
	}

	const input = (num: number | string, i: number) => {
		if (typeof num == 'number' && (num < 0 || num > 255)) return
		if (typeof num == 'string' && (hexToDec(num) < 0 || hexToDec(num) > 255)) return

		if (typeof num == 'number') {
			num = decToHex(num)
		}

		hexArray[i] = num
		dispatch('change', { hexArray })
	}
</script>

<div>
	<h2>HEX</h2>
	<div>
		<label for="red">Red [0-ff]</label>
		<input
			id="red"
			type="range"
			value={hexToDec(hexArray[0])}
			on:input={(e) => input(Number(e?.currentTarget?.value), 0)}
			min="0"
			max="255"
		/>
		<input
			type="text"
			value={hexArray[0]}
			on:input|preventDefault={(e) => input(e?.currentTarget?.value, 0)}
		/>
	</div>
	<div>
		<label for="green">Green [0-ff]</label>
		<input
			id="green"
			type="range"
			value={hexToDec(hexArray[1])}
			on:input={(e) => input(Number(e?.currentTarget?.value), 1)}
			min="0"
			max="255"
		/>
		<input
			type="text"
			value={hexArray[1]}
			on:input|preventDefault={(e) => input(e?.currentTarget?.value, 1)}
		/>
	</div>
	<div>
		<label for="blue">Blue [0-ff]</label>
		<input
			id="blue"
			type="range"
			value={hexToDec(hexArray[2])}
			on:input={(e) => input(Number(e?.currentTarget?.value), 2)}
			min="0"
			max="255"
		/>
		<input
			type="text"
			value={hexArray[2]}
			on:input|preventDefault={(e) => input(e?.currentTarget?.value, 2)}
		/>
	</div>
	<div>
		<label for="rgbalpha">Alpha [0-ff]</label>
		<input
			id="rgbalpha"
			type="range"
			value={hexToDec(hexArray[3])}
			on:input={(e) => input(Number(e?.currentTarget?.value), 3)}
			min="0"
			max="255"
		/>
		<input
			type="text"
			value={hexArray[3]}
			on:input|preventDefault={(e) => input(e?.currentTarget?.value, 3)}
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

const hueToRgb = (p: number, q: number, t: number) => {
	if (t < 0) t += 1
	if (t > 1) t -= 1
	if (t < 1 / 6) return p + (q - p) * 6 * t
	if (t < 1 / 2) return q
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
	return p
}

export const hslaToRgba = ([h, s, l, a]: number[]) => {
	;(h /= 360), (s /= 100), (l /= 100)
	let r, g, b

	if (s === 0) {
		r = g = b = l
	} else {
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s
		const p = 2 * l - q

		r = hueToRgb(p, q, h + 1 / 3)
		g = hueToRgb(p, q, h)
		b = hueToRgb(p, q, h - 1 / 3)
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a]
}

export const rgbaToHsla = ([r, g, b, a]: number[]) => {
	;(r /= 255), (g /= 255), (b /= 255)
	const vmax = Math.max(r, g, b),
		vmin = Math.min(r, g, b),
		l = (vmax + vmin) / 2
	let h = 0

	if (vmax === vmin) {
		return [0, 0, l]
	}

	const d = vmax - vmin
	const s = l > 0.5 ? d / (2 - vmax - vmin) : d / (vmax + vmin)
	if (vmax === r) h = (g - b) / d + (g < b ? 6 : 0)
	if (vmax === g) h = (b - r) / d + 2
	if (vmax === b) h = (r - g) / d + 4
	h /= 6

	return [h, s, l, a]
}

export const rgbaToHex = ([r, g, b, a]: number[]) => {
	const red = (r | (1 << 8)).toString(16).slice(1),
		green = (g | (1 << 8)).toString(16).slice(1),
		blue = (b | (1 << 8)).toString(16).slice(1),
		alpha = ((a * 255) | (1 << 8)).toString(16).slice(1)

	return [red, green, blue, alpha]
}

export const hexToRgba = ([r, g, b, a]: string[]) => {
	const red = parseInt(r, 16),
		green = parseInt(g, 16),
		blue = parseInt(b, 16),
		alpha = parseInt(a, 16) / 255

	return [red, green, blue, alpha]
}

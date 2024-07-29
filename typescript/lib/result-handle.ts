/**
 * 结果处理
 */
declare module './result-handle';

export type Results = Record<number, number>[];
export interface HandleConfig {
	start?: number;
	step?: number;
	orderify?: boolean;
}
function handleOne(result: Record<number, number>, { start = 0, step = 1, orderify = true }: HandleConfig) {
	const arr: [number, number][] = [];
	Reflect.ownKeys(result).forEach(key => {
		const line = parseInt(key.toString());
		arr.push([line, result[line]]);
	});
	if (orderify) arr.sort((a, b) => a[1] - b[1]);
	let min = Math.min(...arr.map(([_, n]) => n));
	return arr.map(([a, b]) => [a, (b -= min) * step + start]);
}
export default function resultHandle(results: Results, config: HandleConfig) {
	return results.map(result => handleOne(result, config));
}

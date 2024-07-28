/**
 * 纯手工收集的电线交织位置数据
 * @license GPL-2.0-or-later
 */
declare module './line-relations';

/** 列举交织在一起的位置，可以使用 {@link genRange} 函数辅助列举 */
type DetailRelation = Record<number, number[]>;
/** 一根电线与其他电线的位置关系 */
interface Relation {
	/** A 级关系，即毫无关系 */
	a: number[];
	/** B 级关系，即仅需不在同一层 */
	b: number[];
	/** C 级关系，即关系较为复杂，具体需列举 */
	c: DetailRelation;
}
/** 所有电线相互的关系 */
export type RelationCollection = Record<number, Relation>;

/**
 * 辅助列举函数
 * @param from 从何处开始列举
 * @param sign 是否正向列举
 * @param to 列举最大值
 */
export function genRange(from: number, sign: boolean, to = 100) {
	if (!sign) from = -from;
	return Array(to + 1 - from)
		.fill(from)
		.map((n, i) => (sign ? 0 : -(to + from)) + n + i);
}

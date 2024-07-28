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

export type ExplainedRelation = Map<number, Map<number, number[]>>;

export default function explainRelation(relationCollection: RelationCollection) {
	const explainedCollection: ExplainedRelation = new Map();
	const lines = Reflect.ownKeys(relationCollection).map(key => parseInt(key.toString()));
	const lineNumber = lines.length + 1;
	lines.forEach(line => {
		const relation = relationCollection[line];
		const relationMap = new Map<number, number[]>();
		relation.a.forEach(typeALine => relationMap.set(typeALine, []));
		relation.b.forEach(typeBLine => relationMap.set(typeBLine, [0]));
		Reflect.ownKeys(relation.c).forEach(key => {
			const typeCLine = parseInt(key.toString());
			relationMap.set(typeCLine, relation.c[typeCLine]);
		});
		if (relationMap.size < lineNumber - line) throw Error(`统计共有 ${lineNumber} 根电线，其中 ${line} 号电线所给位置数据不全`);
		if (relationMap.size > lineNumber - line) throw Error(`统计共有 ${lineNumber} 根电线，其中 ${line} 号电线所给位置数据过多`);
		explainedCollection.set(line, relationMap);
	});
	return explainedCollection;
}

/**
 * 插线计算
 */
declare module './calculator';

import { ExplainedRelation } from './line-relations';

export default class Calculator {
	constructor(
		readonly relation: ExplainedRelation,
	) {
		this.max = relation.size + 1;
		relation.forEach((_, line) => this.bannedPosition[line + 1] = []);
		this.positionNow[1] = 0;
		this.run(1);
	}

	readonly debuggerLine = [1, 2, 3, 5, 8, 13, 21];

	bannedPosition: Record<number, number[]> = { 1: [] };
	readonly positionNow: Record<number, number> = {};
	readonly max: number;
	top = 0;
	bottom = 0;

	resultSet = new Set<Record<number, number>>();
	minHeight = Infinity;

	run(lineNow: number) {
		if (this.top - this.bottom + 1 > this.minHeight) return;
		if (lineNow === this.max) {
			const height = this.top - this.bottom + 1;
			if (this.minHeight > height) {
				this.minHeight = height;
				this.resultSet.clear();
			}
			this.resultSet.add({ ...this.positionNow });
			console.log('算出一种高度为' + this.minHeight + '的解法');
			return;
		}
		const lineDo = lineNow + 1;
		const oldBannedPosition = { ...this.bannedPosition };
		const oldTop = this.top;
		const oldBottom = this.bottom;
		const relationMine = this.relation.get(lineNow);
		relationMine?.forEach((banned, line) => {
			this.bannedPosition[line] = oldBannedPosition[line]
				.concat(banned.map(pos => pos + this.positionNow[lineNow]));
		});
		let i: number;
		for (i = this.top - this.max + 1; i < this.bottom; i++) {
			if (this.bannedPosition[lineDo].includes(i)) continue;
			this.bottom = i;
			this.positionNow[lineDo] = i;
			this.run(lineDo);
			this.bottom = oldBottom;
		}
		for (i = this.bottom; i <= this.top; i++) {
			if (this.bannedPosition[lineDo].includes(i)) continue;
			this.positionNow[lineDo] = i;
			this.run(lineDo);
		}
		for (i = this.top; i <= this.bottom + this.max; i++) {
			if (this.bannedPosition[lineDo].includes(i)) continue;
			this.top = i;
			this.positionNow[lineDo] = i;
			this.run(lineDo);
			this.top = oldTop;
		}
		this.bannedPosition = oldBannedPosition;
	}
}

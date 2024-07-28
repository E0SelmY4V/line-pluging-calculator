/** @type {import('eslint').ESLint.ConfigData} */
const config = {
	parser: '@typescript-eslint/parser',
	extends: [
		'accurtype-style',
		'eslint:recommended',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:markdown/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'markdown',
	],
	rules: { 'no-unused-vars': 'off' },
	root: true,
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
	env: { node: true },
};
module.exports = config;

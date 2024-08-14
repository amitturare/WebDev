module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"no-empty-pattern": "off",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
	},
};

import globals from 'globals';
import inferno from 'eslint-plugin-inferno';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            }
        }
    },
    {
        ignores: ["**/dist/*", '**/node_modules/*', '**.swc/*', "**/*.cjs", "**/*.min.js"]
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    importPlugin.flatConfigs.typescript,
    inferno.configs.flat.recommended
);

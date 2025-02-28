import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsp from '@typescript-eslint/parser';

export default [
  { ignores: ['dist', 'node_modules'] }, // Ignore build output & dependencies
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Include TypeScript files
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parser: tsp, // Use TypeScript parser
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      // Ensure ESLint reads TypeScript config
      },
    },
    settings: { react: { version: 'detect' } }, // Auto-detect React version
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint, // Add TypeScript ESLint plugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules, // Enable TypeScript rules
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['warn'], // Warn on unused vars
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types requirement
    },
  },
];


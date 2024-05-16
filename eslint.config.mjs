import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js'


export default [
  pluginJs.configs.recommended,
  {

    files: ["**/*.js"],
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
          'error', 'always'
      ],
      'no-console': 0,
      'arrow-spacing': [
          'error', { 'before': true, 'after': true }
      ],
      '@stylistic/js/indent': [
        'error',
        2
      ],
      '@stylistic/js/linebreak-style': [
        'error',
        'unix'
      ],
      '@stylistic/js/quotes': [
        'error',
        'single'
      ],
      '@stylistic/js/semi': [
        'error',
        'never'
      ]
    },
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs"
    },
    },
    {ignores: ["dist/*"]}
  
];


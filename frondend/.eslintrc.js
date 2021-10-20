module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
      'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
      'plugin:prettier/recommended', 
    ],
    parserOptions: {
      project: "./tsconfig.json",
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
      ecmaFeatures:  {
        jsx:  true,  // Allows for the parsing of JSX
      },
      
    },
    
    rules: {
        indent: ['error', 2],
        semi: ['error', 'always'],
        quotes: [2, "single", "avoid-escape"],
        "import/prefer-default-export": 0,
        'react/prop-types': 0,
        "react/react-in-jsx-scope": "off",
        // indent: ['error', 2],
        // semi: ['error', 'always'],
        'quote-props': ['error', 'as-needed'],
        'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
        'array-callback-return': 0,
        'no-var': 2,
        'max-depth': ['error', 4],
        'no-prototype-builtins': 0,
        'no-trailing-spaces': 2,
        'no-case-declarations': 0,
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/display-name': 0,
        'react/prop-types': 0,
        'react/no-deprecated': 0,
        'mdx/semi': 0
        // quotes: [2, 'single']
        // "react/require-default-props": [{ forbidDefaultForRequired: false }]
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  };
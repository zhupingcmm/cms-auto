module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
      "airbnb",
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:react/jsx-runtime",
      "prettier",
    ],
    parserOptions: {
      project: "./tsconfig.json",
    },
    
    rules: {
        indent: ['error', 2],
        semi: ['error', 'always'],
        "import/prefer-default-export": 0,
        'react/prop-types': 0,
        "react/require-default-props": [{ forbidDefaultForRequired: false }]
    },
  };
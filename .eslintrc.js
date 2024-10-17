const config = {
    env: {
        browser: true,
        node: true,
        es2021: true,
        commonjs: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:unicorn/recommended',
        'plugin:cypress/recommended',
    ],
    settings: {
        'react': {
            'version': 'detect', // Automatically detect the React version
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
            webpack: {
                config: './config/webpack.dev.config.js',
            },
        },
    },
    plugins: ['cypress', 'simple-import-sort', 'react', 'unicorn'],
    ignorePatterns: ['node_modules'],
    rules: {
        'unicorn/prevent-abbreviations': [
            'error',
            {
                allowList: {
                    props: true,
                },
            },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        'import/namespace': [2, { allowComputed: true }],
        'import/first': 'error',
        'import/newline-after-import': 'error',
    },
    overrides: [
        {
            files: ['*rc.js', '*.config.js'],
            rules: {
                'unicorn/prefer-module': 'off',
                'unicorn/filename-case': 'off',
                'unicorn/prevent-abbreviations': 'off',
                'no-undef': 'off',
                'simple-import-sort/imports': 'off'
            },
        },
    ],
    globals: {
        Cypress: true,
    },
};

// eslint-disable-next-line no-undef
module.exports = config;

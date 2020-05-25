import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import run from '@rollup/plugin-run';

const extensions = ['.js', '.jsx', '.mjs'];

export default async commandLineArgs => {
  const isDev = commandLineArgs.watch;

  const config = {
    input: {
      endpoint: 'src/index.js'
    },
    output: {
      dir: 'bin',
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].[hash].js',
      compact: !isDev,
      esModule: true,
      exports: 'named',
      sourcemap: isDev
    },
    preserveModules: true,
    preserveSymlinks: true,
    shimMissingExports: true,
    external: [
      /core-js/,
      /apollo-server/,
      /node_modules/
    ],
    plugins: [
      globals(),
      builtins(),
      resolve({
        extensions,
        modulesOnly: true
      }),
      commonjs({ include: /node_modules/ }),
      json(),
      replace({ __buildEnv__: 'production' }),
      babel({
        exclude: /node_modules/,
        babelHelpers: 'runtime',
        extensions,
        sourceMaps: isDev,
        presets: [
          ['@babel/preset-env', {
            modules: false,
            useBuiltIns: 'usage',
            loose: true,
            corejs: 3,
            exclude: [
              'transform-async-to-generator',
              'transform-template-literals',
              'transform-regenerator'
            ]
          }]
        ],
        plugins: [
          ['@babel/plugin-transform-runtime', {
            corejs: 3,
            absoluteRuntime: false,
            regenerator: false
          }],

          // Stage 0
          "@babel/plugin-proposal-function-bind",

          // Stage 1
          "@babel/plugin-proposal-export-default-from",
          "@babel/plugin-proposal-logical-assignment-operators",
          ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
          ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
          ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
          "@babel/plugin-proposal-do-expressions",

          // Stage 2
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          "@babel/plugin-proposal-function-sent",
          "@babel/plugin-proposal-export-namespace-from",
          "@babel/plugin-proposal-numeric-separator",
          "@babel/plugin-proposal-throw-expressions",

          // Stage 3
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-syntax-import-meta",
          ["@babel/plugin-proposal-class-properties", { "loose": true }],
          "@babel/plugin-proposal-json-strings"
        ]
      }),
      isDev && run({ execArgv: ['-r', 'source-map-support/register'] }),
      !isDev && terser,
    ].filter(Boolean)
  };

  return config;
}

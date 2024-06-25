import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const name = "my-lib";

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `dist/${name}.cjs`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `dist/${name}.js`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: [
      {
        file: `dist/${name}.d.ts`,
        format: 'cjs',
      }
    ],
  }),
]

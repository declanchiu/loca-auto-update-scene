import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/index.ts'],

  format: ["esm"],

  dts: false,

  splitting: false,

  sourcemap: false,

  clean: true
});


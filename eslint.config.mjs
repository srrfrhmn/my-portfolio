import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', '.pnpm-store/**', 'out/**', 'next-env.d.ts']),
])

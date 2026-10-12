import { lstat, mkdir, readFile, symlink } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const webDirectory = path.resolve(scriptDirectory, '..')
const repositoryRoot = path.resolve(webDirectory, '../..')
const webNodeModules = path.join(webDirectory, 'node_modules')
const rootNodeModules = path.join(repositoryRoot, 'node_modules')
const packageJson = JSON.parse(
  await readFile(path.join(webDirectory, 'package.json'), 'utf8'),
)
const packageNames = [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.devDependencies ?? {}),
]

await mkdir(rootNodeModules, { recursive: true })

for (const packageName of packageNames) {
  const rootPackagePath = path.join(rootNodeModules, packageName)
  const webPackagePath = path.join(webNodeModules, packageName)

  try {
    await lstat(rootPackagePath)
    continue
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  await mkdir(path.dirname(rootPackagePath), { recursive: true })
  await symlink(
    webPackagePath,
    rootPackagePath,
    process.platform === 'win32' ? 'junction' : 'dir',
  )
}

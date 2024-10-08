import { type Metadata } from 'next'
import glob from 'fast-glob'
import { Providers } from '@/app/(results)/results/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Protocol API Reference',
    default: 'Protocol API Reference',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app/(results)/results' })
  console.log('Found MDX files:', pages)

  let allSectionsEntries = await Promise.all(
    pages.map(async (filename) => {
      const path = '/results/' + filename.replace(/(^|\/)page\.mdx$/, '')
      const module = await import(`./${filename}`)
      console.log(`Sections for ${path}:`, module.sections)
      return [path, module.sections]
    })
  ) as Array<[string, Array<Section>]>

  let allSections = Object.fromEntries(allSectionsEntries)

  console.log('All sections structure:', JSON.stringify(allSections, null, 2))

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
import './global.css';

import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import pkg from 'toolbox-x/package.json';
import { Banner } from '@/components/banner';
import { appLogo, appName, titleDescription } from '@/lib/shared';

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	...titleDescription,
	keywords: pkg.keywords,
	authors: [pkg.author],
	icons: {
		icon: appLogo,
		shortcut: appLogo,
	},
	openGraph: {
		...titleDescription,
		siteName: appName,
		type: 'website',
	},
	// verification: {
	// 	google: ENV.google.gscVerificationId,
	// },
};

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<Banner variant="rainbow">
					Documentation is still Under Maintenance! You may find some broken links or
					missing content.
				</Banner>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}

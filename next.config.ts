import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Postavljanje next-intl plugina
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Dodatne Next.js postavke, kao što su images, basePath itd.
};

export default withNextIntl(nextConfig);

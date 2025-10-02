/** @type {import('next').NextConfig} */

const handleWebpackConfiguration = (configuration, { dev, isServer }) => {
  if (!isServer) {
    Object.assign(configuration.resolve.alias, {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat"
    });
  }

  return configuration;
};

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  webpack: handleWebpackConfiguration
};

export default nextConfig;

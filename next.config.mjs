/** @type {import('next').NextConfig} */

const handleWebpackConfiguration = (configuration, { dev, isServer }) => {
  if (!isServer) {
    Object.assign(configuration.resolve.alias, {
      ...(configuration.resolve.alias || {}),
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react/jsx-runtime.js": "preact/compat/jsx-runtime"
    });
  }

  return configuration;
};

const nextConfig = {
  reactStrictMode: true,
  webpack: handleWebpackConfiguration
};

export default nextConfig;

const nextConfig = {
  reactStrictMode: true,
  // Gera ids/nomes de classe estáveis para o styled-components entre servidor e cliente
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'azulayezanella.com.br',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'ciclovivo.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.infomoney.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.psicologo.com.br',
      },
      {
        protocol: 'https',
        hostname: 'secult.es.gov.br',
      },
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'creativemakes.com.br',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.unyleya.edu.br',
      },
      {
        protocol: 'https',
        hostname: 'circuitoacademico.wordpress.com',
      }
    ],
  },
};

export default nextConfig;

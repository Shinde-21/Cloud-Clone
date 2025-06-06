import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions:{
      bodySizeLimit:"100MB",
    },},
 images:{
  remotePatterns:[
    {
    protocol:'https',
    hostname:'cdn.pixaby.com',
    },
    {
      protocol:'https',
      hostname:"cloud.appwrite.io",
    },
    {
      protocol: 'https',
      hostname: 'www.transparentpng.com', 
    }
  ]
 }
};

export default nextConfig;

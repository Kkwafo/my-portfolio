/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.postimg.cc',
      'kkwafo.github.io',
      'upload.wikimedia.org',
      'encrypted-tbn0.gstatic.com',
      'git-scm.com',
      'www.oscarlijo.com',
      'www.teamdesk.net',
      'miro.medium.com',
      'cdn-images-1.medium.com',
      'process.fs.teachablecdn.com',
      'labs.tadigital.com',
      'res.cloudinary.com',
    ],
  },
}

module.exports = nextConfig

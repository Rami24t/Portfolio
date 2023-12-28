// api/sitemap-redirect.js

export default (req, res) => {
  const host = req.headers.host || "";
  const redirectMap = {
    "ramidev.tech": "/sitemap-tech.xml",
    "vercel.app": "/sitemap-app.xml",
    // Add more host mappings as needed
  };

  const targetPath = redirectMap[host];

  if (targetPath) {
    res.writeHead(302, {
      Location: targetPath,
    });
    res.end();
  } else {
    res.status(404).end();
  }
};

export default (req, res) => {
  const host = req.headers.host || "";
  const redirectMap = {
    "www.ramidev.tech": "/sitemap-tech.xml",
    "rami-al-saadi.vercel.app": "/sitemap-app.xml"
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

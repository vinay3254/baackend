// ===============================
// STEP 1: Import Module (Node.js Module Concept)
// ===============================
const http = require("http");

// ===============================
// STEP 2: Variables (let & const)
// ===============================
const PORT = 3000;
let serverName = "Node Training Server";

// ===============================
// STEP 3: Array & Object Concept
// ===============================
const pages = [
  { route: "/", message: "Home Page" },
  { route: "/about", message: "About Page" },
  { route: "/contact", message: "Contact Page" }
];

// ===============================
// STEP 4: Arrow Function + map()
// ===============================
const routes = pages.map(page => page.route);

// ===============================
// STEP 5: Async Function Example
// ===============================
const getPageMessage = async (url) => {
  return new Promise((resolve, reject) => {
    const page = pages.find(p => p.route === url);

    setTimeout(() => {
      page ? resolve(page.message) : reject("Page Not Found");
    }, 500);
  });
};

// ===============================
// STEP 6: Create Server
// ===============================
const server = http.createServer(async (req, res) => {

  const { url } = req;   // Destructuring (ES6)

  try {
    const message = await getPageMessage(url);

    res.statusCode = 200;
    res.end(`${serverName} : ${message}`);

  } catch (error) {

    res.statusCode = 404;
    res.end(error);
  }

});

// ===============================
// STEP 7: Start Server
// ===============================
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// const http = require("http");

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   console.log(req.method, req.url);

//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });

//     res.end(
//       JSON.stringify({
//         message: "Hello from plain Node",
//       }),
//     );
//     return;
//   }

//   res.writeHead(404, {
//     "Content-Type": "application/json",
//   });

//   res.end(
//     JSON.stringify({
//       message: "Route not found",
//     }),
//   );
// });

// server.listen(
//     PORT, () => {
//         console.log(`Server running at http://localhost:${PORT}`);
//     }
// )

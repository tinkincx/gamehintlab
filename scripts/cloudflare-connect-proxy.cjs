const http = require("node:http");
const net = require("node:net");

const port = Number(process.env.CF_PROXY_PORT || 8899);
const targets = new Map([
  ["api.cloudflare.com", "104.19.192.176"],
  ["dash.cloudflare.com", "104.17.110.184"]
]);

const server = http.createServer((_request, response) => {
  response.writeHead(405, { "content-type": "text/plain" });
  response.end("CONNECT only\n");
});

server.on("connect", (request, clientSocket, head) => {
  const [hostname, rawPort] = request.url.split(":");
  const destination = targets.get(hostname.toLowerCase());
  const destinationPort = Number(rawPort || 443);

  if (!destination || destinationPort !== 443) {
    clientSocket.end("HTTP/1.1 403 Forbidden\r\n\r\n");
    return;
  }

  const upstream = net.connect(destinationPort, destination, () => {
    clientSocket.write("HTTP/1.1 200 Connection Established\r\n\r\n");
    if (head.length) upstream.write(head);
    upstream.pipe(clientSocket);
    clientSocket.pipe(upstream);
  });

  upstream.on("error", () => clientSocket.destroy());
  clientSocket.on("error", () => upstream.destroy());
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Scoped Cloudflare CONNECT proxy listening on 127.0.0.1:${port}`);
});

function close() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", close);
process.on("SIGTERM", close);

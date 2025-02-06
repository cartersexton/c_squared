export default async function handler(req, res) {
  try {
    const response = await fetch("http://router.pdx1.cjslabs.linuxd1.com:9080/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "granite3-moe:1b", prompt: "Generate a short poem like 404 error message." }),
    });

    const data = await response.json();
    const message = data.response || "Page not found.";

    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ message: "Error generating message." });
  }
}

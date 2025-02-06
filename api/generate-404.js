export default async function handler(req, res) {
    try {
        const ollamaResponse = await fetch("http://69.54.142.142:11434//api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "granite3-moe:1b",
                prompt: "Generate a creative 404 error message in one sentence."
            }),
        });

        const data = await ollamaResponse.json();
        res.status(200).json({ message: data.response || "Oops! Page not found." });

    } catch (error) {
        console.error("Error contacting Ollama API:", error);
        res.status(500).json({ message: "Error contacting AI server." });
    }
}

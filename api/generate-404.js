export default async function handler(req, res) {
    try {
        const ollamaResponse = await fetch("http://69.54.142.142:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "granite3-moe:1b",
                prompt: "Generate a creative 404 error message in one sentence."
            }),
        });

        const textResponse = await ollamaResponse.text(); // Get raw response for debugging

        console.log("Ollama API Raw Response:", textResponse);

        // Check if the response is valid JSON before parsing
        try {
            const data = JSON.parse(textResponse);
            if (!data.response) throw new Error("Unexpected response format from Ollama.");
            res.status(200).json({ message: data.response });
        } catch (jsonError) {
            throw new Error(`Invalid JSON response from Ollama: ${textResponse}`);
        }

    } catch (error) {
        console.error("Error contacting Ollama API:", error);
        res.status(500).json({ message: "Error contacting AI server." });
    }
}


import { GoogleGenerativeAI } from "@google/generative-ai";

// NOTE TO USER: Replace this with your actual API key from Google AI Studio
const API_KEY = "YOUR_GEMINI_API_KEY";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(API_KEY);

export interface GeminiOptions {
  temperature?: number;
  topK?: number;
  topP?: number;
  maxOutputTokens?: number;
}

export async function generateTripPlan(prompt: string, options: GeminiOptions = {}) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const generationConfig = {
      temperature: options.temperature || 0.7,
      topK: options.topK || 40,
      topP: options.topP || 0.95,
      maxOutputTokens: options.maxOutputTokens || 8192,
    };
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });
    
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    throw error;
  }
}

export async function generateDestinationSuggestions(preferences: string, options: GeminiOptions = {}) {
  const prompt = `As a travel expert, suggest 5 destinations based on these preferences: ${preferences}. 
  For each destination, provide the following in JSON format:
  {
    "destinations": [
      {
        "id": "unique-id",
        "title": "Destination Name",
        "location": "Country/Region",
        "description": "Brief description",
        "image": "URL to image (placeholder)",
        "rating": Rating out of 5,
        "price": Estimated starting price in USD,
        "activities": ["Activity 1", "Activity 2", "Activity 3"]
      }
    ]
  }`;
  
  try {
    const response = await generateTripPlan(prompt, options);
    // Extract the JSON part from the response
    const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/) || 
                      response.match(/{[\s\S]*}/) || 
                      null;
                      
    if (jsonMatch) {
      const jsonString = jsonMatch[1] || jsonMatch[0];
      return JSON.parse(jsonString);
    }
    
    throw new Error("Could not parse JSON from response");
  } catch (error) {
    console.error("Error generating destination suggestions:", error);
    throw error;
  }
}

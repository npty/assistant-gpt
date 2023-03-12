import { Configuration, OpenAIApi } from "openai";
import { API_KEY } from "../secret.json";
import { input as inputAxelar } from "./scenarios/axelar-solidity-examples";
import { input as inputTodo } from "./scenarios/generate-schedule";

const configuration = new Configuration({
	apiKey: API_KEY,
});

async function main(prompt: string) {
	const openai = new OpenAIApi(configuration);
	const response = await openai
		.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				...inputAxelar,
				{
					role: "user",
					content: prompt,
				},
			],
			temperature: 0.7,
			max_tokens: 1000,
		})
		.then((data) => {
			return data.data.choices[0].message?.content;
		})
		.catch((err) => {
			console.log(err.message);
		});

	console.log(response);
}

export const queryAxelar =
	"Develop a smart contract to swap USDC to ETH, and pass the output value to the Axelar Gateway using call-contract.";
export const queryTodo =
	"lunch, dinner, exercise, work, reading, drink coffee, shower, sleep";

main(queryAxelar);

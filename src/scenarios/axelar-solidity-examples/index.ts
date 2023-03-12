import path from "path";
import { ChatCompletionRequestMessageRoleEnum } from "openai";
import { getFilePathRecursively, parseFileContents } from "../../utils";

const baseInputUrl = path.join(__dirname, "inputs");
const filePaths = getFilePathRecursively(baseInputUrl);
const fileContents = parseFileContents(filePaths);

export const input = [
	{
		role: ChatCompletionRequestMessageRoleEnum.System,
		content:
			"As a solidity engineer at Axelar, my responsibility is to develop a smart contract that facilitates the transfer of messages across multiple chains via the Axelar Gateway. Please provide me with details about your application's use case so that I can customize the smart contract to meet your specific needs.",
	},
	...fileContents.map((content) => ({
		role: ChatCompletionRequestMessageRoleEnum.User,
		content,
	})),
];

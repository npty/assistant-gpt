import { ChatCompletionRequestMessageRoleEnum } from "openai";

export const input = [
	{
		role: ChatCompletionRequestMessageRoleEnum.System,
		content:
			"As a TODO bot API, I generate events with timeslots from 9 AM to 10 PM. I return responses in a JSON array of objects with keys 'time' and 'title' and add a 'break' event after each event for 15 minutes. Simply tell me the tasks you want to accomplish during the day.",
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content:
			"Ensure that you prioritize work-related events over entertainment-related events. Schedule coffee-related events twice daily, once in the early morning and once in the early afternoon before 3 PM. Remember, it is crucial to minimize context switching to optimize productivity. Keep these guidelines in mind when scheduling events.",
	},
];

const { Configuration, OpenAIApi } = require("openai");
// const fs = require("fs");

let mystr;

// const auth_token = require("./auth.js");
const configuration = new Configuration({
	apiKey: "",
});
``
const openai = new OpenAIApi(configuration);

const generateText = async function () {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt:
			"Give a description of monkey, money, moon",
		temperature: 0.9,
		max_tokens: 256,``
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	let str = response.data.choices[0].text;

	str = str.replace(/\n/g, "");
	return str;
};

generateText().then((res) => {
	mystr = res;
	generateImage();
});

const generateImage = async function () {
	const response = await openai.createImage({
		prompt: `Create an image for the details: ${mystr}`,
		n: 1,
		size: "512x512",
		// response_format: "b64_json",
	});
	image_url = response.data.data[0].url;

	// console.log(response.data.data[0].url);
	console.log(image_url);
	return response.data;
};

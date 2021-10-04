//https://dog.ceo/api/breeds/list/al
const URL = "https://dog.ceo/api/"

export const getAllBreeds = async () => {
	try {
		const json = await fetch(URL + "breeds/list/all");
		const txt = await json.text();
		const obj = JSON.parse(txt);
		return Object.keys(obj.message);
	}
	catch (e) {
		console.error(e);
	}
}

export const getBreedImages = async (breed, count = 5) => {
	try {
		const json = await fetch(URL + `breed/${breed}/images/random/${count}`);
		const txt = await json.text();
		const obj = JSON.parse(txt);
		return obj.message;
	}
	catch (e) {
		console.error(e);
	}
}


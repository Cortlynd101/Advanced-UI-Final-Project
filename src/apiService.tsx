import axios from "axios"; //npm i axios
const baseUrl = "http://localhost:5084";
export const callAuthApiEndpoint = async (id_token: string) => {
	try {
    const url = baseUrl + "/";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${id_token}`,
      },
    });
    console.log("data from auth api", response.data);
    return response.data;
  } catch {
    console.log("cannot call auth endpoint");
  }
}

export const callPublicApiEndpoint = async () => {
	try {
		const url = baseUrl + "/";
		const response = await axios.get(url);
		console.log("data from public api", response.data);
		return response.data;
	} 
    catch {
		console.log("cannot call auth endpoint");
    }
}

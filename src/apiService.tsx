import axios from "axios"; //npm i axios
const uri = import.meta.env.VITE_API_URL;
if (!uri) console.log("VITE_API_URL is not set");
else console.log("VITE_API_URL is: " + { uri });

export const callAuthApiEndpoint = async (id_token: string) => {
	try {
    const response = await axios.get(`${uri}`, {
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
		const response = await axios.get(`${uri}`);
		console.log("data from public api", response.data);
		return response.data;
	} 
    catch {
		console.log("cannot call public endpoint");
    }
}

export const callTicketApiEndpoint = async () => {
	try {
		const response = await axios.get(`${uri}get-tickets`);
		console.log("data from ticket api", response.data);
		return response.data;
	} 
    catch {
		console.log("cannot call ticket endpoint");
    }
}

export const callSnackApiEndpoint = async () => {
	try {
		const response = await axios.get(`${uri}get-snacks`);
		console.log("data from snack api", response.data);
		return response.data;
	} 
    catch {
		console.log("cannot call snack endpoint");
    }
}

export const callUserApiEndpoint = async () => {
	try {
		const response = await axios.get(`${uri}get-users`);
		console.log("data from user api", response.data);
		return response.data;
	} 
    catch {
		console.log("cannot call user endpoint");
    }
}
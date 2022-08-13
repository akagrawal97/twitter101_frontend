import axios from "axios";
// const baseUrl = 'http://localhost:8000/';
const baseUrl = 'https://twitter-clone-101.herokuapp.com';


export const getAllTweets = async() => {
    const axiosInstance = axios.create({ baseURL: baseUrl });
    
    let response = await axiosInstance.get('/tweets/getAllTweets/')
        
        if(!response) {
            console.log("got null response from server for tweets/getAllTweets");
            return response;
        }
        
        else if(response.status != 200) {
            console.log("got error from server for tweets/getAllTweets");
            return response;
        }
        else {
            console.log("response: "+JSON.stringify(response.data));
            return response.data;
        }
        
       
  
}

export const loginService = async(email, password) => {    

    const axiosInstance = axios.create({ baseURL: baseUrl });
    var result = 0;
    await axiosInstance.post('/users/login/', {email: email, password: password}).then(async (response) => {
        console.log(response.data);
        console.log(response.status);
        if(response.status == 200) {
            console.log("returning 1")
            result = 1;
        }
        else {
            console.log('returning -1')
            result = -1;
        }
        
    }).catch(err => {
        console.log("error logging in: "+err);
        result = -1;
    });
    return result;
}

export const registerService = async(email, password, name) => {    

    const axiosInstance = axios.create({ baseURL: baseUrl });
    var result = 0;
    await axiosInstance.post('/users/addUser/', {email: email, password: password, name: name}).then(async (response) => {
        console.log(response.data);
        console.log(response.status);
        if(response.status == 200) {
            console.log("returning 1")
            result = 1;
        }
        else {
            console.log('returning -1')
            result = -1;
        }
        
    }).catch(err => {
        console.log("error registering: "+err);
        result = -1;
    });
    return result;
}

export const tweetService = async(email, text) => {    

    const axiosInstance = axios.create({ baseURL: baseUrl });
    var result = 0;
    await axiosInstance.post('/tweets/addTweet/', {owneremail: email, message: text}).then(async (response) => {
        console.log(response.data);
        console.log(response.status);
        if(response.status == 200) {
            console.log("returning 1")
            result = 1;
        }
        else {
            console.log('returning -1')
            result = -1;
        }
        
    }).catch(err => {
        console.log("error tweeting: "+err);
        result = -1;
    });
    return result;
}


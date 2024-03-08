import { LoginInterface, UserInterface } from "./loginInterface";
import axios from 'axios'

export async function login(formData: LoginInterface){
    try {
        const {data} = await axios.post('http://localhost:5000/api/auth/login', formData)
        
        if(data) {
            
            const session = data.token;
            const role = data.role;
            const username = data.username;
            // const expires = new Date(Date.now() + 60 * 60 * 24 * 1);
            localStorage.setItem('session', session);
            localStorage.setItem('role', role);
            localStorage.setItem('username', username);
            return true
            // cookies().set('session', session, {expires: expires, httpOnly: true })
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function register(formData: UserInterface){
    try {
        const {data} = await axios.post('http://localhost:5000/api/auth', formData)
        
        if(data) {
            const session = data.token;
            const role = data.role;
            const username = data.username;
            // const expires = new Date(Date.now() + 60 * 60 * 24 * 1);
            localStorage.setItem('session', session);
            localStorage.setItem('role', role);
            localStorage.setItem('username', username);
            // cookies().set('session', session, {expires: expires, httpOnly: true })
            return true;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function logout(){
    // cookies().set('session', "", {expires: 0, httpOnly: true});
    localStorage.removeItem('session');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
}

export async function getSession(){
    try {
        // const session = cookies().get('session')?.value;
        const session = localStorage.getItem('session');


        if(!session) return null
        return session;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getRole(){
    try {
        const role = localStorage.getItem('role');
        if(!role) return null
        return role;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getUsername(){
    try {
        const username = localStorage.getItem('username');
        if(!username) return null
        return username;
    } catch (error) {
        console.error('Error:', error);
    }
    return ""
}

// const setCookies = (session: string) => {
//     // custom cookie setter
//     local
// }
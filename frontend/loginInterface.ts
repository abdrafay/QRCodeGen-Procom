export interface UserInterface {
    _id: string;
    username: string;
    email: string;
    password: string;
    accountNo: string;
    phoneNo: string;
    role: string;
}

export interface LoginInterface {
    email: string;
    password: string;
}

export interface UserProfile {
    _id: string;
    username: string;
    email: string;
    accountNo: string;
    phoneNo: string;
    role: string;
}
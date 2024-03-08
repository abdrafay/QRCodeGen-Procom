export interface Payment {
    _id: string;
    customerAccountNo: string;
    merchantAccountNo: string;
    status: string;
    paymentPurpose: string;
    customerBank: string;
    time: string;
    date: string;
    paymentAmount: number;
}
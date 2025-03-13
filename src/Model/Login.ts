export interface login {
    userid: string;
    password: string;
}

export interface newPassword {
    userId:number;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}
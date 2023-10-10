export type TAuth = "guest" | "user" | "admin";

export type TPageLink = "Home" | "Person" | "Login" | "Posts" | "DnD"

export type TUser = {
    email: string,
    _id: string,
    isActivated: boolean
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: TUser
}

export interface IPostResponse {
    userId: number;
    id: number;
    title: string;
    body: string
}

export interface RegisterUserRequestBody {
    email: string;
    password: string;
}

export interface RegisterUserResponseBody {
    accessToken: string;
    refreshToken: string;
    user: TUser;
};

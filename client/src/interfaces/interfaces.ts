export type TAuth = "guest" | "user" | "admin";

export type TPageLink = "Home" | "Person" | "Login" | "Test"

export interface IPostResponse {
    userId: number;
    id: number;
    title: string;
    body: string
}

export type IPostResponses = IPostResponse[];

export interface RegisterUserRequestBody {
    email: string;
    password: string;
}

export type TUser = {
    email: string,
    id: string,
    isActivated: boolean
};

export interface RegisterUserResponseBody {
    accessToken: string;
    refreshToken: string;
    user: TUser;
};

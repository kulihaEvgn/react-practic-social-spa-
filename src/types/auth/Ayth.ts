export type AuthType = {
    email: null | string
    id: null | number
    login: null | string
    isLogined: boolean
    errorMessage?: string
    captcha: null | string
}

export type AuthData = { captcha: string, email: string, password: string, rememberMe: boolean }

import { signInRoute } from "../../shared/routes/routes";

export const isSignInRoute = (url: string | undefined): boolean =>
    !!url && (url.endsWith(signInRoute()));
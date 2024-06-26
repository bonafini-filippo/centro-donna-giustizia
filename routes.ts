


/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type{string}
 */
export const publicRoutes = [
    "",  /*<-- home  */
    "/mission",
    "/about",
    "/services",
    "/projects",
    "/contacts",
    "/new-verification"
];

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type{string}
 */
export const publicDynamicRoutes = [
    "/news",
    "/services",
    "/projects"
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in user to /settings
 * @type{string[]}
 */
export const authRoutes = [
    "/login",
    "/register",
    "/error",
    "/reset",
    "/new-password"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication
 * @type{string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type{string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"

/**
 * The default redirect path unauthorized
 * @type{string}
 */
export const UNAUTHORIZED_REDIRECT = "/user"


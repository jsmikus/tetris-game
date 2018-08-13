// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
        apiKey: "AIzaSyAjMwJeFnW9I17Bi0DDmRngMy9MgkfNzJM",
        authDomain: "tetris-app.firebaseapp.com",
        databaseURL: "https://tetris-app.firebaseio.com",
        projectId: "tetris-app",
        storageBucket: "tetris-app.appspot.com",
        messagingSenderId: "756582346079"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

const concat = require('concat');

(async function build() {
    const files = [
        './dist/01-angular-elements/polyfills.js',
        './dist/01-angular-elements/runtime.js',
        './dist/01-angular-elements/main.js',
    ];

    await concat(files, './dist/angular-element.js')
})()
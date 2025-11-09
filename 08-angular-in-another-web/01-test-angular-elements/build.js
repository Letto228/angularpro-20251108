const concat = require('concat');

(async function build() {
    const files = [
        './dist/01-angular-elemment/polyfills.js',
        './dist/01-angular-elemment/runtime.js',
        './dist/01-angular-elemment/main.js',
    ];

    await concat(files, './dist/angular-element.js')
})()
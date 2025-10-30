const purify = require('purify-css');

const content = ['distrib/*.html', 'distrib/**/*.html', 'distrib/assets/**/*.js',];
const css = ['distrib/assets/website.css'];

const options = {
    output: 'distrib/assets/website_purified.css',
    // minify: true,
    info: true
};

purify(content, css, options, function (purifiedAndMinifiedResult){
    console.log(purifiedAndMinifiedResult);
});
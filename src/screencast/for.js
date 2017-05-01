let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (let browser in browsers) {
    console.log(browser);
}

for (let browser in browsers) {
    console.log(browsers[browser]);
}

for (let browser of browsers) {
    console.log(browser);
}

console.log(browsers);


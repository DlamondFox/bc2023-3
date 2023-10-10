const fs = require('fs');

fs.readFile('data.json', (err, data) => {
    const jsonData = JSON.parse(data);
    const formatData = jsonData.map(item => {
        return `${item.exchangedate}:${item.rate}`;
    }).join('\n');
    fs.writeFile('output.txt', formatData, (err) => {});
});
const {readFile, writeFile} = require('fs')

console.log('start task')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('Error cause:',err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is my birthday result: ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    })
})

console.log('onto the next one')
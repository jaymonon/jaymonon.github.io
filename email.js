const nodeMailer = require('nodemailer');

const html = `
    <h1>Hello World</h1>
    <p>Nodemailer</p>
`;

async function main() {
    nodeMailer.createTransport({
        host: '';
    })
}

main();
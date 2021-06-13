const fs = require('fs');

const userLimit = 1000;
const regions = [
    'United States',
    'Europe',
    'APAC',
    'Latin America',
];
const genders = [
    'Male',
    'Female',
];

const generateUserDataSet = () => {
    const Users = [];
    for (let i = 1; i <= userLimit; i++) {
        Users.push({
            id: i,
            birthday: Math.floor(Math.random() * 12 + 1),
            spend: Math.floor(Math.random() * 5000),
            region: Math.floor(Math.random() * regions.length), // It's an enum. Also it'll be more performant this way when filtering
            gender: Math.floor(Math.random() * genders.length)
        });
    }

    // fs.writeFile("../__mockedData__/users.js", `export default ${JSON.stringify(Users)};`, (err) => {
    fs.writeFile("../__mockedData__/users.json", JSON.stringify(Users), (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("User data file generated sucessfuly!");
    });
}

generateUserDataSet();

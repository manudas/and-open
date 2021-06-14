const fs = require('fs');

const {
    regions,
    genders,
    months,
} = require('../data/filterOptions');

const userLimit = 1000;

/**
 * Generates a new random user data set and stores it in
 * src/__mockedData__/users.json. This new file will be
 * used next time you build the application
 */
const generateUserDataSet = () => {
    const Users = [];
    for (let i = 1; i <= userLimit; i++) {
        Users.push({
            id: i,
            birthday: Math.floor(Math.random() * months.length + 1),
            spend: Math.floor(Math.random() * 5000),
            region: Math.floor(Math.random() * regions.length), // It's an enum. Also it'll be more performant this way when filtering
            gender: Math.floor(Math.random() * genders.length)
        });
    }

    fs.writeFile("../__mockedData__/users.json", JSON.stringify(Users), (err) => {
        if(err) {
            return console.log(err);
        }
        console.log("User data file generated sucessfuly!");
    });
}

generateUserDataSet();

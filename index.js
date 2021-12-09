const faker = require('faker');
const fs = require('fs');

const generatePersonsFakeData = amount => {
  const persons = [];

  while (amount >= 0) {
    persons.push({
      id: amount,
      name: faker.name.firstName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
    });

    amount--;
  }

  return persons;
};

fs.writeFileSync(
  'db.json',
  JSON.stringify({ users: generatePersonsFakeData(120) })
);

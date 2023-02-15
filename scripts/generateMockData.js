const { faker } = require("@faker-js/faker");
const fs = require("fs").promises;

function generateMockData(n) {
  return Array.from({ length: n }, () => {
    const imgWidth = faker.datatype.number({
      min: 720,
      max: 1400,
      precision: 20,
    });
    const imgHeight = faker.datatype.number({
      min: 720,
      max: 1400,
      precision: 20,
    });
    const price = faker.datatype.number({
      min: 1_000_000,
      max: 9_000_000,
      precision: 500,
    });
    return {
      pictureUrl: faker.image.imageUrl(imgWidth, imgHeight, "house"),
      price,
      address: faker.address.streetAddress(),
    };
  });
}

(async () => {
  const listings = generateMockData(6);
  await fs.writeFile(
    "mockData.json",
    JSON.stringify(listings, null, 2),
    "utf-8"
  );
})();

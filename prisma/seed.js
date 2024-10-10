const prisma = require('../prisma');
const seed = async () => {
  //TODO: 10 books w placeholder titles
  const books = [];
  for (let i = 0; i < 10; i++) {
    books.push({title: `Book ${i}`});
  }
  await prisma.book.createMany({data: books});
};
//done from solution, I have a question about it.
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    ProcessingInstruction.exit(1);
  });

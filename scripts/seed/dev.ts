import db, { genId } from '../../src/modules/db';

const run = async () => {
  await db.user.createMany({
    data: [
      { id: genId(), email: 'john@doe.com', name: 'John Doe', password: '123' },
      { id: genId(), email: 'doe@doe.com', name: 'Doe Doe', password: '123' },
    ],
  });
};

// Automatically run the seed if this script is executed directly
if (require.main === module) {
  run()
    .then(() => {
      console.log('Seed completed');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

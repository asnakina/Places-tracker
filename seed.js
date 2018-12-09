const { Place } = require('./models');

async function seed() {
  try {
    await Promise.all([
      Place.destroy({ where: {}})
    ]);
    const places = await Place.bulkCreate([
      {
        name: 'Bali',
        description: 'Magnificent island in Indonesia',
        visited: false,
        address: 'Southern asia'
      },
      {
        name: 'Singapore',
        description: 'Something fantastic',
        visited: false,
        address: 'Southern asia'
      },
      {
        name: 'Punta Cana',
        description: 'Amazing hotels',
        visited: true,
        address: 'Caribian island'
      },
      {
        name: 'London',
        description: 'Cultural cozy place',
        visited: true,
        address: 'European island'
      }
    ]);
  } catch(e) {
    console.error(e);
  } process.exit();
}

seed();

import Sessel from './Sessel';

test('Sessel.info', () => {
  const testSessel = new Sessel('blue');
  expect(testSessel.info()).toBe("I'm a blue chair.");
});

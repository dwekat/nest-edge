import { createEngine } from './index';

const obj = {
  createEngine,
};

test('Check call', () => {
  const somethingSpy = jest.spyOn(obj, 'createEngine');
  obj.createEngine({ viewsRoot: '' });
  expect(somethingSpy).toHaveBeenCalled();
});

test('Check return', () => {
  const somethingSpy = jest.spyOn(obj, 'createEngine');
  obj.createEngine({ viewsRoot: '' });
  expect(somethingSpy).toReturn();
});

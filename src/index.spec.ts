import { nestEdge } from './index';

const obj = {
  nestEdge,
};

test('Check call', () => {
  const somethingSpy = jest.spyOn(obj, 'nestEdge');
  obj.nestEdge({ viewsRoot: '' });
  expect(somethingSpy).toHaveBeenCalled();
});

test('Check return', () => {
  const somethingSpy = jest.spyOn(obj, 'nestEdge');
  obj.nestEdge({ viewsRoot: '' });
  expect(somethingSpy).toReturn();
});

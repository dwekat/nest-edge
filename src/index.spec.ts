// Mock edge.js before importing nestEdge
jest.mock('edge.js', () => {
  return {
    Edge: jest.fn().mockImplementation(() => ({
      mount: jest.fn(),
      renderSync: jest.fn().mockReturnValue('<html>test</html>'),
    })),
  };
});

import { nestEdge } from './index';
import { Edge } from 'edge.js';

describe('nestEdge', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create edge instance and mount viewsRoot', () => {
    const viewsRoot = '/test/views';
    nestEdge({ viewsRoot });

    expect(Edge).toHaveBeenCalled();
    const edgeInstance = (Edge as unknown as jest.Mock).mock.results[0].value;
    expect(edgeInstance.mount).toHaveBeenCalledWith(viewsRoot);
  });

  test('should return a function', () => {
    const result = nestEdge({ viewsRoot: '/test/views' });
    expect(typeof result).toBe('function');
  });

  test('should render template and call callback', () => {
    const engine = nestEdge({ viewsRoot: '/test/views' });
    const mockCallback = jest.fn();
    const filePath = 'test.edge';
    const data = { name: 'Test' };

    engine(filePath, data, mockCallback);

    const edgeInstance = (Edge as unknown as jest.Mock).mock.results[0].value;
    expect(edgeInstance.renderSync).toHaveBeenCalledWith(filePath, data);
    expect(mockCallback).toHaveBeenCalledWith(null, '<html>test</html>');
  });

  test('should pass options to Edge constructor', () => {
    const options = { cache: true };
    nestEdge({ viewsRoot: '/test/views', options });

    expect(Edge).toHaveBeenCalledWith(options);
  });
});

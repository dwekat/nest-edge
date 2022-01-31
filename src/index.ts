import { Edge } from 'edge.js';
import { EngineOptions } from './interfaces/engine-options.interface';

/**
 *
 * @param {EngineOptions} params
 * @return {(filePath: string, data: any, next) => void}
 */
export function createEngine(params: EngineOptions) {
  const options = params.options || {};

  const edge = new Edge(options);
  edge.mount(params.viewsRoot);

  return function edgeTemplateEngine(filePath: string, data: any, next) {
    //eslint-disable-next-line @typescript-eslint/no-var-requires
    const html = edge.renderSync(filePath, data);
    next(null, html);
  };
}

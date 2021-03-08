import {
  queries, Queries, render as libRender, RenderOptions,
} from '@testing-library/react';
import { Providers } from '../App';

function render<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  >(ui: React.ReactElement, options: RenderOptions<Q, Container> = {}) {
  return libRender(ui, {
    wrapper: Providers,
    ...options,
  });
}

export * from '@testing-library/react';
export { render };

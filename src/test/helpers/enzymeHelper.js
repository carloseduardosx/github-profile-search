import { h } from 'preact';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies

function nodeWith(node, contextProps) {
  return h.cloneElement(node, contextProps);
}

// eslint-disable-next-line import/prefer-default-export
export const mountWith = (store, node) => mount(nodeWith(node, { store }), {
  context: Object.assign({}, { store })
});

import { Provider } from 'preact-redux';
import { h, cloneElement } from 'preact';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies

function nodeWith(node, contextProps) {
  return cloneElement(
    (<Provider store={contextProps}>
      {node}
    </Provider>),
    contextProps
  );
}

// eslint-disable-next-line import/prefer-default-export
export const mountWith = (store, node) => mount(nodeWith(node, { store }), {
  context: Object.assign({}, { store })
});

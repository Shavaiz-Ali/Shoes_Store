import { createGlobal } from 'react-global-utils';
import requests from 'requests';

function wrappedRequests() {
  const window = createGlobal();
  return requests(window);
}

export default wrappedRequests;

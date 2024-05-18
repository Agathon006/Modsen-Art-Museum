import { jsx as _jsx } from 'react/jsx-runtime';
// @ts-ignore
import StyledArtCollection from './styled.js';
// @ts-ignore
var ArtCollection = function (_a) {
  var itemsNumber = _a.itemsNumber,
    process = _a.process,
    artsList = _a.artsList;
  return _jsx(StyledArtCollection, {
    itemsNumber: itemsNumber,
    process: process,
    artsCollectionArray: artsList,
  });
};
export default ArtCollection;

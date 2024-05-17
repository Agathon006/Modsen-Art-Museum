import { jsx as _jsx } from 'react/jsx-runtime';
import { useSelector } from 'react-redux';
// @ts-ignore
import StyledArtCollection from './styled.js';
var ArtCollection = function () {
  // @ts-ignore
  var artsCollectionList = useSelector(function (state) {
    return state.artsCollectionList;
  });
  return _jsx(StyledArtCollection, { artsCollectionArray: artsCollectionList });
};
export default ArtCollection;

import { jsx as _jsx } from 'react/jsx-runtime';
import { useSelector } from 'react-redux';
// @ts-ignore
import StyledArtCollectionItem from './styled.js';
var ArtCollectionItem = function (_a) {
  var artInfo = _a.artInfo;
  // @ts-ignore
  var artsCollectionListProcess = useSelector(function (state) {
    return state.artsCollectionListProcess;
  });
  return _jsx(StyledArtCollectionItem, { process: artsCollectionListProcess, artInfo: artInfo });
};
export default ArtCollectionItem;

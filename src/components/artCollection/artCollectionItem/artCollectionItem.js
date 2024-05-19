import { jsx as _jsx } from 'react/jsx-runtime';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import StyledArtCollectionItem from './styled.js';
var ArtCollectionItem = function (_a) {
  var artInfo = _a.artInfo;
  var dispatch = useDispatch();
  // @ts-ignore
  var favoriteArts = useSelector(function (state) {
    return state.favoriteArts;
  });
  // @ts-ignore
  var isFavorite = favoriteArts.includes(artInfo.id);
  return _jsx(StyledArtCollectionItem, {
    dispatch: dispatch,
    isFavorite: isFavorite,
    artInfo: artInfo,
  });
};
export default ArtCollectionItem;

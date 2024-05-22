import { jsx as _jsx } from 'react/jsx-runtime';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import StyledArtCard from './styled.js';
var ArtCard = function (_a) {
  var artInfo = _a.artInfo;
  var dispatch = useDispatch();
  var favoriteArtsIdList = useSelector(function (state) {
    return state.favorite.favoriteArtsIdList;
  });
  var isFavorite = false;
  if (artInfo.id) {
    isFavorite = favoriteArtsIdList.includes(artInfo.id);
  }
  return _jsx(StyledArtCard, { dispatch: dispatch, isFavorite: isFavorite, artInfo: artInfo });
};
export default ArtCard;

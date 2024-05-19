import { jsx as _jsx } from 'react/jsx-runtime';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import StyledArtCard from './styled.js';
var ArtCard = function (props) {
  var dispatch = useDispatch();
  // @ts-ignore
  var favoriteArtsIdList = useSelector(function (state) {
    return state.favoriteArtsIdList;
  });
  // @ts-ignore
  var isFavorite = favoriteArtsIdList.includes(props.artInfo.id);
  return _jsx(StyledArtCard, {
    dispatch: dispatch,
    isFavorite: isFavorite,
    artInfo: props.artInfo,
  });
};
export default ArtCard;

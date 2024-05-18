import { jsx as _jsx } from 'react/jsx-runtime';
import { useSelector } from 'react-redux';
// @ts-ignore
import StyledArtCard from './styled.js';
var ArtCard = function (props) {
  // @ts-ignore
  var galleryArtsListProcess = useSelector(function (state) {
    return state.artsGalleryListProcess;
  });
  return _jsx(StyledArtCard, { process: galleryArtsListProcess, artInfo: props.artInfo });
};
export default ArtCard;

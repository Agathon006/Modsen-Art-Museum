import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IArtInfo } from './../services/ArtService';
import useArtService from './../services/ArtService';
import ArtCollection from '../components/artCollection/ArtCollection.js';

import styled from 'styled-components';

import {
  MainPageTitle,
  MainPageSearchBar,
  MainPageGallerySubTitle,
  MainPageGalleryTitle,
  MainPageSectionGallery,
  MainPageSectionGalleryNavigation,
  MainPageCollectionSubtitle,
  MainPageCollectionTitle,
  // @ts-ignore
} from './styled.js';

const Wrapper = styled.main`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage = () => {
  const { getGalleryArts, getCollectionArts } = useArtService();
  const dispatch = useDispatch();

  // @ts-ignore
  const artsGallerySearch = useSelector(state => state.artsGallerySearch);
  // @ts-ignore
  const artsGallerySortOption = useSelector(state => state.artsGallerySortOption);
  // @ts-ignore
  const galleryArtsList = useSelector(state => state.artsGalleryList);
  // @ts-ignore
  const artsGalleryListProcess = useSelector(state => state.artsGalleryListProcess);
  // @ts-ignore
  const artsGalleryPage = useSelector(state => state.artsGalleryPage);
  // @ts-ignore
  const artsGalleryAllPages = useSelector(state => state.artsGalleryAllPages);
  // @ts-ignore
  const artsCollectionListProcess = useSelector(state => state.artsCollectionListProcess);
  // @ts-ignore
  const artsCollectionList = useSelector(state => state.artsCollectionList);

  useEffect(() => {
    onCollectionArtsRequest();
  }, []);

  const onCollectionArtsRequest = () => {
    getCollectionArts().then(onArtCollectionLoaded);
  };

  const onArtCollectionLoaded = (ArtsCollectionList: IArtInfo[]) => {
    dispatch({ type: 'SET_ARTS_COLLECTION_LIST', payload: ArtsCollectionList });
    dispatch({ type: 'SET_ARTS_COLLECTION_LIST_PROCESS', payload: 'confirmed' });
  };

  useEffect(() => {
    onGalleryArtsRequest();
  }, [artsGalleryPage]);

  const onGalleryArtsRequest = () => {
    getGalleryArts(artsGalleryPage, artsGallerySearch, artsGallerySortOption).then(
      onArtGalleryLoaded
    );
  };

  const onGalleryArtsSearchRequest = (searchInput: string, sortOption: string) => {
    dispatch({ type: 'SET_ARTS_GALLERY_SEARCH', payload: searchInput });
    dispatch({ type: 'SET_ARTS_GALLERY_SORT_OPTION', payload: sortOption });
    dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: 0 });
    dispatch({ type: 'SET_ARTS_GALLERY_ALL_PAGES', payload: 0 });
    dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
  };

  const onArtGalleryLoaded = (ArtsGalleryList: IArtInfo[]) => {
    dispatch({ type: 'SET_ARTS_GALLERY_LIST', payload: ArtsGalleryList });
    dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'confirmed' });
  };

  const compileNewPaginationNavigation = (artsGalleryPage: number, artsGalleryAllPages: number) => {
    if (!artsGalleryAllPages) return [];
    if (artsGalleryAllPages === 1) return [[1, true]];

    const paginationArray = [];

    if (artsGalleryAllPages < 8) {
      switch (artsGalleryAllPages) {
        case 2:
          paginationArray.push([1, 1 === artsGalleryPage]);
          paginationArray.push([2, 2 === artsGalleryPage]);
          break;
        case 3:
          for (let i = 1; i <= 3; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 4:
          for (let i = 1; i <= 4; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 5:
          for (let i = 1; i <= 5; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 6:
          for (let i = 1; i <= 6; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        case 7:
          for (let i = 1; i <= 7; i++) {
            paginationArray.push([i, i === artsGalleryPage]);
          }
          break;
        default:
          break;
      }
    } else {
      if (artsGalleryPage < 5) {
        paginationArray.push([1, 1 === artsGalleryPage]);
        paginationArray.push([2, 2 === artsGalleryPage]);
        paginationArray.push([3, 3 === artsGalleryPage]);
        paginationArray.push([4, 4 === artsGalleryPage]);
        paginationArray.push([5, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryAllPages, false]);
      } else if (artsGalleryPage > artsGalleryAllPages - 4) {
        paginationArray.push([1, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryAllPages - 4, false]);
        paginationArray.push([
          artsGalleryAllPages - 3,
          artsGalleryAllPages - 3 === artsGalleryPage,
        ]);
        paginationArray.push([
          artsGalleryAllPages - 2,
          artsGalleryAllPages - 2 === artsGalleryPage,
        ]);
        paginationArray.push([
          artsGalleryAllPages - 1,
          artsGalleryAllPages - 1 === artsGalleryPage,
        ]);
        paginationArray.push([artsGalleryAllPages, artsGalleryAllPages === artsGalleryPage]);
      } else {
        paginationArray.push([1, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryPage - 1, false]);
        paginationArray.push([artsGalleryPage, true]);
        paginationArray.push([artsGalleryPage + 1, false]);
        paginationArray.push(['...', false]);
        paginationArray.push([artsGalleryAllPages, false]);
      }
    }

    if (artsGalleryPage === 1) {
      paginationArray.push(['>', false]);
    } else if (artsGalleryPage === artsGalleryAllPages) {
      paginationArray.unshift(['<', false]);
    } else {
      paginationArray.unshift(['<', false]);
      paginationArray.push(['>', false]);
    }

    return paginationArray;
  };

  const onPaginationClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetElement = event.target as HTMLElement;
    if (targetElement.tagName === 'BUTTON') {
      if (targetElement.textContent === '>') {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: artsGalleryPage + 1 });
        dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
      } else if (targetElement.textContent === '<') {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: artsGalleryPage - 1 });
        dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
      } else {
        dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: Number(targetElement.textContent) });
        dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'loading' });
      }
    }
  };

  return (
    <Wrapper>
      <MainPageTitle />
      <MainPageSearchBar
        artsGallerySearch={artsGallerySearch}
        artsGallerySortOption={artsGallerySortOption}
        onSubmit={onGalleryArtsSearchRequest}
      />
      <MainPageGallerySubTitle />
      <MainPageGalleryTitle />
      <MainPageSectionGallery process={artsGalleryListProcess} data={galleryArtsList} />
      <MainPageSectionGalleryNavigation
        paginationClicked={onPaginationClick}
        paginationArray={compileNewPaginationNavigation(artsGalleryPage, artsGalleryAllPages)}
      />
      <MainPageCollectionSubtitle />
      <MainPageCollectionTitle />
      <ArtCollection
        itemsNumber={9}
        // @ts-ignore
        process={artsCollectionListProcess}
        artsList={artsCollectionList}
      />
    </Wrapper>
  );
};

export default MainPage;

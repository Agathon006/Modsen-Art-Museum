import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import setContent from '@utils/setContent.js';
import SearchIcon from '@assets/search.svg';
import ArtCard from '@components/artCard/ArtCard.js';

const Title = styled.h1`
  width: 684px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  color: #393939;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const TitleSpecial = styled.span`
  color: #f17900;
`;

export const MainPageTitle = () => {
  return (
    <Title>
      let's find some <TitleSpecial>art</TitleSpecial> here!
    </Title>
  );
};

const SearchBarContainer = styled.div`
  width: 762px;
  position: relative;
  margin-top: 72px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const SearchBarInput = styled.input`
  width: 100%;
  padding: 23.5px 48px 23.5px 16px;
  background: rgba(57, 57, 57, 0.05);
  border-radius: 16px;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;

  @media (max-width: 800px) {
    right: 36px;
  }
`;

const BounceSearchesContainer = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

const BounceSearchesOption = styled.div`
  padding: 16px 48px 16px 16px;
  width: 100%;
  background-color: ${({ $index, $selectedResultIndex }) =>
    $index === $selectedResultIndex ? 'lightgray' : 'white'};
  border-radius: 16px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SortBarContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const SortBarTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
`;

const SortBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SortBarOptionLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  cursor: pointer;
`;

export const MainPageSearchBar = ({
  searchingMode,
  setSearchingMode,
  searchResults,
  setSearchResults,
  selectedResultIndex,
  setSelectedResultIndex,
  debouncedSearch,
  artsGallerySearch,
  artsGallerySortOption,
  onSubmitForm,
}) => {
  return (
    <SearchBarContainer>
      <Formik
        initialValues={{ searchQuery: artsGallerySearch, sortOption: artsGallerySortOption }}
        validationSchema={Yup.object().shape({
          searchQuery: Yup.string().max(200, 'Maximum 200 characters allowed'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setSearchingMode(false);
          setSelectedResultIndex(-1);
          setSearchResults([]);
          await onSubmitForm(values.searchQuery, values.sortOption);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
          <Form>
            <Field
              id="searchQuery"
              name="searchQuery"
              type="text"
              placeholder="Search art, artist, work..."
              value={values.searchQuery}
              component={SearchBarInput}
              onBlur={() => {
                setSelectedResultIndex(-1);
                setSearchResults([]);
              }}
              onChange={e => {
                setFieldValue('searchQuery', e.target.value);
              }}
              onKeyDown={e => {
                if (e.key === 'Backspace') {
                  setSelectedResultIndex(-1);
                  setSearchResults([]);
                } else if (e.key === 'Enter' && selectedResultIndex === -1) {
                  setSelectedResultIndex(-1);
                  setSearchResults([]);
                  handleSubmit();
                } else if (e.key === 'Enter' && selectedResultIndex > -1) {
                  setFieldValue('searchQuery', searchResults[selectedResultIndex]);
                  setSelectedResultIndex(-1);
                  setSearchResults([]);
                } else if (e.key === 'ArrowUp' && selectedResultIndex > -1) {
                  setSelectedResultIndex(selectedResultIndex - 1);
                } else if (
                  e.key === 'ArrowDown' &&
                  selectedResultIndex < searchResults.length - 1
                ) {
                  setSelectedResultIndex(selectedResultIndex + 1);
                }
                if (
                  e.key !== 'Backspace' &&
                  e.key !== 'Enter' &&
                  e.key !== 'ArrowUp' &&
                  e.key !== 'ArrowDown' &&
                  e.key !== 'ArrowLeft' &&
                  e.key !== 'ArrowRight'
                ) {
                  setSearchingMode(true);
                  debouncedSearch(e.target.value);
                }
              }}
            />
            <ErrorMessage
              style={{ color: 'red', marginLeft: '5px' }}
              name="searchQuery"
              component="div"
            />
            <SearchButton type="submit" disabled={isSubmitting}>
              <SearchIcon />
            </SearchButton>
            {searchResults.length > 0 && values.searchQuery && searchingMode && (
              <BounceSearchesContainer>
                {searchResults.map((title, index) => (
                  <BounceSearchesOption
                    key={index}
                    $index={index}
                    $selectedResultIndex={selectedResultIndex}
                    onClick={() => {
                      setFieldValue('searchQuery', searchResults[index]);
                      setSelectedResultIndex(-1);
                      setSearchResults([]);
                    }}
                  >
                    {title}
                  </BounceSearchesOption>
                ))}
              </BounceSearchesContainer>
            )}
            <SortBarContainer>
              <SortBarTitle>Sort:</SortBarTitle>
              <SortBarOptionContainer>
                <Field
                  type="radio"
                  id="option1"
                  name="sortOption"
                  value="default"
                  checked={values.sortOption === 'default'}
                  onChange={() => {
                    setFieldValue('sortOption', 'default');
                    handleSubmit();
                  }}
                  style={{ cursor: 'pointer', filter: `hue-rotate(180deg)` }}
                />
                <SortBarOptionLabel htmlFor="option1">default</SortBarOptionLabel>
              </SortBarOptionContainer>
              <SortBarOptionContainer>
                <Field
                  type="radio"
                  id="option2"
                  name="sortOption"
                  value="modern"
                  checked={values.sortOption === 'modern'}
                  onChange={() => {
                    setFieldValue('sortOption', 'modern');
                    handleSubmit();
                  }}
                  style={{ cursor: 'pointer', filter: `hue-rotate(180deg)` }}
                />
                <SortBarOptionLabel htmlFor="option2">TOP-999 modern</SortBarOptionLabel>
              </SortBarOptionContainer>
              <SortBarOptionContainer>
                <Field
                  type="radio"
                  id="option3"
                  name="sortOption"
                  value="ancient"
                  checked={values.sortOption === 'ancient'}
                  onChange={() => {
                    setFieldValue('sortOption', 'ancient');
                    handleSubmit();
                  }}
                  style={{ cursor: 'pointer', filter: `hue-rotate(180deg)` }}
                />
                <SortBarOptionLabel htmlFor="option3">TOP-999 ancient</SortBarOptionLabel>
              </SortBarOptionContainer>
            </SortBarContainer>
          </Form>
        )}
      </Formik>
    </SearchBarContainer>
  );
};

const SectionSubtitle = styled.span`
  margin-top: 120px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #e0a449;
`;

export const MainPageGallerySubTitle = () => {
  return <SectionSubtitle>Topics for you</SectionSubtitle>;
};

const SectionTitle = styled.span`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #393939;
`;

export const MainPageGalleryTitle = () => {
  return <SectionTitle>Our special gallery</SectionTitle>;
};

const GalleryWrapper = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;

  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 20px;
    width: 514px;
  }

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const GallerySkeletonWrapper = styled.div`
  position: relative;
  width: 387px;
  height: 514px;

  @media (max-width: 425px) {
    width: 370px;
    height: 420px;
  }
`;

const GalleryPlaceholderWrapper = styled.div`
  width: 100%;
  height: 514px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;

const GalleryPlaceholder = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const MainPageSectionGallery = ({ process, data }) => {
  const renderArt = i => {
    if (data[i]) {
      return <ArtCard artInfo={data[i]} />;
    } else {
      return null;
    }
  };

  let noArtsPlaceholder = (
    <GalleryPlaceholderWrapper>
      <GalleryPlaceholder>No such arts</GalleryPlaceholder>
    </GalleryPlaceholderWrapper>
  );

  let contentArray = [];

  if (process === 'loading') {
    for (let i = 0; i < 3; i++) {
      contentArray.push(
        <GallerySkeletonWrapper key={i}>
          {setContent(process, () => renderArt(i))}
        </GallerySkeletonWrapper>
      );
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      contentArray.push(<Fragment key={i}>{setContent(process, () => renderArt(i))}</Fragment>);
    }
  }

  return (
    <GalleryWrapper>
      {!data.length && process !== 'loading' ? noArtsPlaceholder : contentArray}
    </GalleryWrapper>
  );
};

const GalleryNavigationWrapper = styled.nav`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 30px;
  align-self: flex-end;

  @media (max-width: 1400px) {
    align-self: center;
  }
`;

const GalleryNavigationSpan = styled.span`
  padding: 5px 10px;
  min-width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #f9f9f9;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #393939;
  text-align: center;

  @media (max-width: 600px) {
    height: 20px;
    font-size: 14px;
    padding: 1px 3px;
  }
`;

const GalleryNavigationButtonInactive = styled.button`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #f9f9f9;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  color: #393939;

  @media (max-width: 600px) {
    height: 20px;
    min-width: 20px;
    font-size: 14px;
    padding: 0 3px;
  }
`;

const GalleryNavigationButtonActive = styled.button`
  padding: 0 10px;
  min-width: 30px;
  height: 30px;
  background: #f17900;
  border-radius: 4px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;

  @media (max-width: 600px) {
    height: 20px;
    min-width: 20px;
    font-size: 14px;
    padding: 0 3px;
  }
`;

export const MainPageSectionGalleryNavigation = ({
  artsGalleryListProcess,
  paginationClicked,
  paginationArray,
}) => {
  if (!paginationArray.length) return null;
  const paginationElements = paginationArray.map((element, index) => {
    switch (element[0]) {
      case '<':
        return (
          <GalleryNavigationButtonInactive
            disabled={artsGalleryListProcess === 'loading' ? true : false}
            key={index}
          >
            {'<'}
          </GalleryNavigationButtonInactive>
        );
      case '>':
        return (
          <GalleryNavigationButtonInactive
            disabled={artsGalleryListProcess === 'loading' ? true : false}
            key={index}
          >
            {'>'}
          </GalleryNavigationButtonInactive>
        );
      case '...':
        return <GalleryNavigationSpan key={index}>{'...'}</GalleryNavigationSpan>;
      default:
        if (element[1]) {
          return (
            <GalleryNavigationButtonActive disabled key={index}>
              {element[0]}
            </GalleryNavigationButtonActive>
          );
        } else {
          return (
            <GalleryNavigationButtonInactive
              disabled={artsGalleryListProcess === 'loading' ? true : false}
              key={index}
            >
              {element[0]}
            </GalleryNavigationButtonInactive>
          );
        }
    }
  });

  return (
    <GalleryNavigationWrapper onClick={paginationClicked}>
      {paginationElements}
    </GalleryNavigationWrapper>
  );
};

export const MainPageCollectionSubtitle = () => {
  return <SectionSubtitle>Here some more</SectionSubtitle>;
};

export const MainPageCollectionTitle = () => {
  return <SectionTitle>Other works for you</SectionTitle>;
};

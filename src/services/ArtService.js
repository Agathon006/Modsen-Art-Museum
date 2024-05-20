var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import { useDispatch } from 'react-redux';
import { useHttp } from '../hooks/http.hook';
var emtyArtInfo = {
  id: null,
  title: null,
  artistName: null,
  isPublicDomain: null,
  imageUrl: null,
};
var emtyDetailedArtInfo = {
  id: null,
  title: null,
  artistName: null,
  isPublicDomain: null,
  imageUrl: null,
  date: null,
  artistNationality: null,
  artDimensions: null,
  creditLine: null,
};
var useArtService = function () {
  var request = useHttp().request;
  var dispatch = useDispatch();
  var _apiBase = 'https://api.artic.edu/api/v1/artworks';
  var getArtTitlesByQuery = function (query) {
    return __awaiter(void 0, void 0, void 0, function () {
      var result, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            return [
              4 /*yield*/,
              request(''.concat(_apiBase, '/search?q=').concat(query, '&size=3&fields=title')),
            ];
          case 1:
            result = _b.sent();
            // @ts-ignore
            return [
              2 /*return*/,
              result.data.length
                ? result.data.map(function (artItem) {
                    return artItem.title;
                  })
                : [],
            ];
          case 2:
            _a = _b.sent();
            // @ts-ignore
            return [2 /*return*/, []];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  var getGalleryArts = function (page, search, sortOption) {
    return __awaiter(void 0, void 0, void 0, function () {
      var neededFields, requestUrl, result, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            neededFields = ['id', 'title', 'artist_title', 'is_public_domain', 'image_id'];
            requestUrl = '';
            if (search) {
              switch (sortOption) {
                case 'modern':
                  requestUrl = ''
                    .concat(_apiBase, '/search?q=')
                    .concat(search, '&page=')
                    .concat(page ? page : 1, '&limit=3&fields=')
                    .concat(neededFields, '&sort[date_start][order]=desc');
                  break;
                case 'ancient':
                  requestUrl = ''
                    .concat(_apiBase, '/search?q=')
                    .concat(search, '&page=')
                    .concat(page ? page : 1, '&limit=3&fields=')
                    .concat(neededFields, '&sort[date_start][order]=asc');
                  break;
                default:
                  requestUrl = ''
                    .concat(_apiBase, '/search?q=')
                    .concat(search, '&page=')
                    .concat(page ? page : 1, '&limit=3&fields=')
                    .concat(neededFields);
                  break;
              }
            } else {
              switch (sortOption) {
                case 'modern':
                  requestUrl = ''
                    .concat(_apiBase, '/search?page=')
                    .concat(page ? page : 1, '&limit=3&fields=')
                    .concat(neededFields, '&sort[date_start][order]=desc');
                  break;
                case 'ancient':
                  requestUrl = ''
                    .concat(_apiBase, '/search?page=')
                    .concat(page ? page : 1, '&limit=3&fields=')
                    .concat(neededFields, '&sort[date_start][order]=asc');
                  break;
                default:
                  requestUrl = ''
                    .concat(_apiBase, '?page=')
                    .concat(page ? page : 1, '&limit=3&fields=')
                    .concat(neededFields);
                  break;
              }
            }
            return [4 /*yield*/, request(requestUrl)];
          case 1:
            result = _b.sent();
            if (!page) {
              dispatch({ type: 'SET_ARTS_GALLERY_PAGE', payload: result.pagination.current_page });
              dispatch({
                type: 'SET_ARTS_GALLERY_ALL_PAGES',
                payload: result.pagination.total_pages,
              });
            }
            return [2 /*return*/, result.data.map(_transformArt)];
          case 2:
            _a = _b.sent();
            dispatch({ type: 'SET_ARTS_GALLERY_LIST_PROCESS', payload: 'error' });
            // @ts-ignore
            return [2 /*return*/, Array(3).fill(emtyArtInfo)];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  // @ts-ignore
  var getCollectionArts = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var neededFields, result, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            neededFields = ['id', 'title', 'artist_title', 'is_public_domain', 'image_id'];
            return [
              4 /*yield*/,
              request(''.concat(_apiBase, '/search?size=9&fields=').concat(neededFields)),
            ];
          case 1:
            result = _b.sent();
            return [2 /*return*/, result.data.map(_transformArt)];
          case 2:
            _a = _b.sent();
            dispatch({ type: 'SET_ARTS_COLLECTION_LIST_PROCESS', payload: 'error' });
            return [2 /*return*/, Array(9).fill(emtyArtInfo)];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  var getArtById = function (id) {
    return __awaiter(void 0, void 0, void 0, function () {
      var neededFields, result, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            neededFields = [
              'id',
              'title',
              'artist_title',
              'is_public_domain',
              'image_id',
              'date_display',
              'artist_display',
              'dimensions',
              'credit_line',
            ];
            return [
              4 /*yield*/,
              request(''.concat(_apiBase, '/').concat(id, '?fields=').concat(neededFields)),
            ];
          case 1:
            result = _b.sent();
            // @ts-ignore
            return [2 /*return*/, _DetailTransformArt(result.data)];
          case 2:
            _a = _b.sent();
            dispatch({ type: 'SET_ART_BY_ID_PROCESS', payload: 'error' });
            // @ts-ignore
            return [2 /*return*/, [emtyDetailedArtInfo]];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  var getArtsByIdArray = function (idArray) {
    return __awaiter(void 0, void 0, void 0, function () {
      var neededFields, result, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 2, , 3]);
            // @ts-ignore
            if (!idArray.length) return [2 /*return*/, []];
            neededFields = ['id', 'title', 'artist_title', 'is_public_domain', 'image_id'];
            return [
              4 /*yield*/,
              request(
                ''.concat(_apiBase, '/?ids=').concat(idArray, '&fields=').concat(neededFields)
              ),
            ];
          case 1:
            result = _b.sent();
            // @ts-ignore
            return [
              2 /*return*/,
              result.data.map(function (itemArt) {
                return _transformArt(itemArt);
              }),
            ];
          case 2:
            _a = _b.sent();
            dispatch({ type: 'SET_FAVORITE_COLLECTION_LIST_PROCESS', payload: 'error' });
            // @ts-ignore
            return [2 /*return*/, Array(18).fill(emtyArtInfo)];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };
  var _transformArt = function (art) {
    return {
      id: art.id,
      title: art.title,
      artistName: art.artist_title,
      isPublicDomain: art.is_public_domain,
      imageUrl: art.image_id
        ? 'https://www.artic.edu/iiif/2/'.concat(art.image_id, '/full/843,/0/default.jpg')
        : '',
    };
  };
  var _DetailTransformArt = function (art) {
    return {
      id: art.id,
      title: art.title,
      artistName: art.artist_title,
      isPublicDomain: art.is_public_domain,
      imageUrl: art.image_id
        ? 'https://www.artic.edu/iiif/2/'.concat(art.image_id, '/full/843,/0/default.jpg')
        : '',
      date: art.date_display,
      artistNationality: _NationalityIdentifier(art.artist_display),
      artDimensions: art.dimensions,
      creditLine: art.credit_line,
    };
  };
  var _NationalityIdentifier = function (str) {
    var nationalitiesDictionary = [
      'French',
      'American',
      'Norwegian',
      'Guatemala',
      'Japanese',
      'English',
      'Italian',
    ];
    for (
      var _i = 0, nationalitiesDictionary_1 = nationalitiesDictionary;
      _i < nationalitiesDictionary_1.length;
      _i++
    ) {
      var nationality = nationalitiesDictionary_1[_i];
      if (str.includes(nationality)) {
        return nationality;
      }
    }
    var result = str.replace(/\n/g, '');
    return result;
  };
  return {
    getArtTitlesByQuery: getArtTitlesByQuery,
    getGalleryArts: getGalleryArts,
    getCollectionArts: getCollectionArts,
    getArtById: getArtById,
    getArtsByIdArray: getArtsByIdArray,
  };
};
export default useArtService;

const config = {
  production: {
    apiUrl: '/api',
  },
  development: {
    apiUrl: 'http://localhost:4444/api',
  },
};

export const appConfig = {
  sortOptions: [
    { sortValue: 'asc', sortOption: 'title', label: 'tytuły A-Z' },
    { sortValue: 'desc', sortOption: 'title', label: 'tytuły Z-A' },
    { sortValue: 'asc', sortOption: 'author', label: 'autorzy A-Z' },
    { sortValue: 'desc', sortOption: 'author', label: 'autorzy Z-A' },
  ],
  authors: [
    { stringForUrl: 'Sapkowski', title: 'Sapkowski Andrzej' },
    { stringForUrl: 'Rowling', title: 'Rowling J.K.' },
    { stringForUrl: 'King', title: 'King Stephen' },
    { stringForUrl: 'Tolkien', title: 'Tolkien John' },
  ],
  genres: [
    { stringForUrl: 'fantastyka', title: 'fantastyka' },
    { stringForUrl: 'horror', title: 'horror' },
    { stringForUrl: 'literatura+młodzieżowa', title: 'literatura młodzieżowa' },
    { stringForUrl: 'powieść+historyczna', title: 'powieść historyczna' },
  ],
  pageSizes: [4, 8, 32],
};

export default config[process.env.NODE_ENV];

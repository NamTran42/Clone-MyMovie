const apiConfig = {
    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: '69b6c318ca85f093bbc569a7bda09ab6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;
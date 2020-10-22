import {API_KEY} from '../props/props';

const requests= {
    fetchTrendings: `/trending/all/week?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=28`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=12`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=35`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=80`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=18`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&language=en-US&without_genres=27`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
};

export default requests;


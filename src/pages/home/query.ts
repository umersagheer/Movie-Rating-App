export const fetchMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTc3MzU2N2JiMTYyZWQ2YjVhYzc3ZTUyMGQ5N2VmYiIsInN1YiI6IjY1OGM2NGY3MzAzYzg1MDZjYWE1NWZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkbWho2spOR9A1sWlKt4soFO_s78Lxyqm-31psEf250",
      },
    }
  );
  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTc3MzU2N2JiMTYyZWQ2YjVhYzc3ZTUyMGQ5N2VmYiIsInN1YiI6IjY1OGM2NGY3MzAzYzg1MDZjYWE1NWZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkbWho2spOR9A1sWlKt4soFO_s78Lxyqm-31psEf250",
      },
    }
  );
  return res.json();
};

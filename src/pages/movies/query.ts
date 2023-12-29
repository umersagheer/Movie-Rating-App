export const fetchMovieDetails = async (movieid: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
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

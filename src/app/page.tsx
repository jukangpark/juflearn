"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

interface Country {
  code: string;
  emoji: string;
  name: string;
}

interface CountryData {
  countries: Country[];
}

const Home = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const countries = data?.countries.slice(0, 4);

  if (loading) {
    return <h2>로딩중</h2>;
  }

  if (error) {
    return <h1>에러 발생</h1>;
  }

  return (
    <div>
      HomePage
      {countries?.map((country: Country, idx: number) => (
        <div key={`country-${idx}`}>
          {country.code} / {country.emoji} / {country.name}
        </div>
      ))}
    </div>
  );
};

export default Home;

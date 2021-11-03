import { CharCard } from "../CharCard";

export const Characters = ({ characterList }) => {
  return (
    <>
      <h1>Meus personagens</h1>
      {characterList.map((item) => (
        <CharCard key={item.id} character={item} />
      ))}
    </>
  );
};

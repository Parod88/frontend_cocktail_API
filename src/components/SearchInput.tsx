import { ChangeEvent } from "react";

type SearchInputProps = {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ handleSearchChange }: SearchInputProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-2 w-full md:w-96 rounded bg-gray-700 text-white"
        placeholder="Buscar cócteles..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;

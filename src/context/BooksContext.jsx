import { createContext, useContext } from "react";
import useBooks from "../hooks/useBooks";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const books = useBooks();
  return <BooksContext.Provider value={books}>{children}</BooksContext.Provider>;
};

export const useBooksContext = () => useContext(BooksContext);

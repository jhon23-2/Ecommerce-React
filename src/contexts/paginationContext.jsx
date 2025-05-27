import { createContext, useContext, useEffect, useState } from "react";

const PaginationContext = createContext(null)

export const PaginationProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const limit = 12


  const handlerSetPagePrevius = () => {
    setPage(p => Math.max(p - 1, 1))
  }

  const handlerSetPageNext = () => {
    setPage(p => Math.min(p + 1, totalPages))
  }

  const handlerSetTotal = (payload) => {
    setTotal(payload)
  }

  useEffect(() => {
    setTotalPages(Math.ceil(total / limit))
  }, [total])

  return (
    <PaginationContext.Provider value={{
      limit,
      total,
      page,
      totalPages,
      handlerSetPageNext,
      handlerSetPagePrevius,
      handlerSetTotal
    }}>
      {children}
    </PaginationContext.Provider>
  )
}

export function usePagination() {
  return { ...useContext(PaginationContext) }
}
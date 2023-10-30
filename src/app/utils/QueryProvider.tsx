"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function QueryProvider({children}:{children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
    <div>{children}</div>
    </QueryClientProvider>
  )
}

export default QueryProvider        
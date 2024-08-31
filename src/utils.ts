export const prevent = (e: any) => {
  e.preventDefault()
  e.stopPropagation()
}

export type Nullable<T> = T | null
export type Maybe<T> = T | null | undefined

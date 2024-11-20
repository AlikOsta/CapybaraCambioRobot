import { ReactNode } from 'react'

type RouteItem = {
  index?: boolean
  path: string
  element?: ReactNode
  icon?: ReactNode
  text?: { [key: string]: string }
}

export type { RouteItem }
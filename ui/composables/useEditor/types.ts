import type { Ref, UnwrapRef } from 'vue'

type MaybeRef<T> = Ref<T> |T

export type PropType = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'function'
export type PropDefaultType = String | Number | Boolean | Array<any> | Object | Function

export interface ComponentPropSchema {
  name: string
  type: PropType
  default?: PropDefaultType
  required?: boolean
  values?: string[]
}

export interface ComponentSlotSchema {
  name: string
}

export interface ComponentSchema {
  name: string
  props: ComponentPropSchema[]
  slots: ComponentSlotSchema[]
}

export interface Content {
  key: string
  markdown: string
  matter: Record<string, any>
}

export interface Options {
  content?: MaybeRef<Content>
  components?: MaybeRef<ComponentSchema[]>
  onChanged?: (markdown: string) => void
}

export type UnwrapOptions = { [K in keyof Options]-?: UnwrapRef<Options[K]> }

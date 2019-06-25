export interface Content {
  files: string[],
  sizes: number[]
}

export interface Bucket {
  id: string,
  location: string,
  name: string,
  content: Content
}


export interface State {
  user: string,
  buckets: Bucket[]
}
export interface Content {
  filename: string,
  filesize: number
}

export interface Bucket {
  id: string,
  location: string,
  name: string,
  content: Content[]
}


export interface State {
  user: string,
  buckets: Bucket[]
}
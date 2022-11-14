export interface IArgsPost {
  title: string;
  body: string;
  userId: number;
}

export interface IPost extends IArgsPost {
  id: number;
}
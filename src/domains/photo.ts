
export interface IPhotos {
  title : string;
  items : Array<IPhoto>;
};

export interface IPhoto {
  author: string;
  imageUrl: string;
}

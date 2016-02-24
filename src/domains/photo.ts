
export interface IPhotos {
  title : string;
  items : Array<IPhoto>;
};

export interface IPhoto {
  name: string;
  imageUrl: string;
  height?: number;
  width?: number;
}

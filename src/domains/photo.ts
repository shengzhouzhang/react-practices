
import * as Immutable from 'immutable';

export interface IPhotos {
  title : string;
  items : Immutable.List<IPhoto>;
};

export interface IPhoto {
  name: string;
  imageUrl: string;
  height?: number;
  width?: number;
}

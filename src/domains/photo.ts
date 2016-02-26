
import * as Immutable from 'immutable';
import CONFIG from '../browser/config';

const DEFAULT_PHOTO_WIDTH = CONFIG.DEFAULT_PHOTO_WIDTH;
const DEFAULT_PHOTO_HEIGHT = CONFIG.DEFAULT_PHOTO_HEIGHT;

export interface IPhotos {
  title : string;
  items : Immutable.List<IPhoto>;
};

export interface IPhoto {
  name: string;
  imageUrl: string;
  width: number;
  height: number;
}

export class Photos implements IPhotos {
  title : string;
  items : Immutable.List<IPhoto>;

  constructor(title: string = '', items: Array<IPhoto>) {
    this.title = title;
    this.items = Immutable.List(items);
  }
};

export class Photo implements IPhoto {
  name: string;
  imageUrl: string;
  width: number;
  height: number;

  constructor(name: string, imageUrl: string, width?: number, height?: number) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.width = width || DEFAULT_PHOTO_WIDTH;
    this.height = height || DEFAULT_PHOTO_HEIGHT;
  }
};

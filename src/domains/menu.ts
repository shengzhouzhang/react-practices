
export interface IMenu {
  title : string;
  items : Array<IMenuItem>;
};

export interface IMenuItem {
  name: string;
  imageUrl: string;
}

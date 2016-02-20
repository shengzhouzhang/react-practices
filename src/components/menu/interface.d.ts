
interface IMenu {
  title : string;
  items : Array<IMenuItem>;
}

interface IMenuItem {
  key: string,
  name: string,
  imageUrl: string
}

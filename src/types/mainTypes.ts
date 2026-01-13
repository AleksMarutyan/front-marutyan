export interface Post {
  img: string;
  date: string;
  text: string;
  tags: string;
  title: string;
  autor: string;
  img_2x: string;
  views: string;
}

export interface MenuItem {
  link: string;
  label: string;
  submenu?: MenuItem[];
}

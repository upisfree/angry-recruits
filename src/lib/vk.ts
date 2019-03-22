export default window['VK'];

export interface IUser {
  uid: number;
  first_name: string;
  last_name: string;
  photo: string;
  photo_rec: string;
  hash: string;
}
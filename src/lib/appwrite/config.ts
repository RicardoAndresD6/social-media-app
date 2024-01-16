import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '65a2cfa0e095bacd0aca',
  databaseId: '65a300c87bbba411ea1e',
  storageId: '65a30060431bf1c2b9f1',
  userCollectionId: '65a30167e79cd486c0ef',
  postCollectionId: '65a3012b6fca7f6fe0b8',
  savesCollectionId: '65a30180d3e114b7f25e',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

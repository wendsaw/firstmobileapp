import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('67f698730030214cee40')
    .setPlatform('com.anttechnology.wendbook');


    export const account =new Account (client);
    export const avatars=new Avatars(client)


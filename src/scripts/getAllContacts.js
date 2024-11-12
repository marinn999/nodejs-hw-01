import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.error('Error reading contacts', error);
  }
};

console.log(await getAllContacts());

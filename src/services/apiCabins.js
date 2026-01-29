import delay from '../utils/delay';
import {
  copyExistingImage,
  insertCabin,
  removeOldImage,
  uploadNewImage,
} from './helpers';
import { supabase } from './supabase';

export const getCabins = async () => {
  const { data: cabins, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return cabins;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  await removeOldImage(data.image, 'cabin-images');

  return data;
};

export const createCabin = async (cabin) => {
  const { image, ...cabinData } = cabin;

  await delay(3000);

  const imagePath = await uploadNewImage(image, 'cabin-images', 'cabin');

  const data = await insertCabin({ ...cabinData, image: imagePath });

  return data;
};

export const updateCabin = async (cabin) => {
  const { id, image: newImage, oldImage, ...cabinData } = cabin;

  const isImageNew = newImage instanceof File;

  let imagePath = newImage;

  // 1. Upload new image if needed
  if (isImageNew) {
    imagePath = await uploadNewImage(newImage, 'cabin-images', 'cabin');
  }

  // 2. Update cabin row
  const { data, error } = await supabase
    .from('cabins')
    .update({ ...cabinData, image: imagePath })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be updated');
  }

  // 3. Delete old image (only after success)
  if (isImageNew) {
    await removeOldImage(oldImage, 'cabin-images');
  }

  return data;
};

export const duplicateCabin = async (cabin) => {
  const { id: _id, image, created_at: _createdAt, ...cabinData } = cabin;

  const imagePath = await copyExistingImage(image, 'cabin-images', 'cabin');

  const data = await insertCabin({ ...cabinData, image: imagePath });

  return data;
};

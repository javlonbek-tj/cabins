import { v4 as uuidv4 } from 'uuid';
import { supabase, supabaseUrl } from './supabase';

export const uploadNewImage = async (
  imageFile,
  imageFolder,
  prefix = 'image',
) => {
  const fileExt = imageFile.name.split('.').pop().toLowerCase().trim();
  const imageName = `${prefix}-${uuidv4()}.${fileExt}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/${imageFolder}/${imageName}`;

  const { error: storageError } = await supabase.storage
    .from(imageFolder)
    .upload(imageName, imageFile);

  if (storageError) {
    console.error(storageError);
    throw new Error('Image could not be uploaded');
  }

  return imagePath;
};

export const copyExistingImage = async (
  imageUrl,
  imageFolder,
  prefix = 'image',
) => {
  const oldImageName = imageUrl.split('/').pop();
  const fileExt = imageUrl.split('.').pop().toLowerCase().trim();
  const newImageName = `${prefix}-${uuidv4()}.${fileExt}`;

  const { error: copyError } = await supabase.storage
    .from(imageFolder)
    .copy(oldImageName, newImageName);

  if (copyError) {
    console.error(copyError);
    throw new Error('Image could not be duplicated');
  }

  const newImagePath = `${supabaseUrl}/storage/v1/object/public/${imageFolder}/${newImageName}`;
  return newImagePath;
};

export const insertCabin = async (cabinData) => {
  const { data, error } = await supabase
    .from('cabins')
    .insert([cabinData])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  return data;
};

export const removeOldImage = async (image, imageFolder) => {
  const imageName = image.split('/').pop();
  const { error: removeError } = await supabase.storage
    .from(imageFolder)
    .remove([imageName]);

  if (removeError) {
    console.error(removeError);
    throw new Error('Image could not be removed');
  }
};

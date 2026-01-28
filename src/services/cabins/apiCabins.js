import { removeOldImage, uploadNewImage } from '../helpers';
import supabase, { supabaseUrl } from '../supabase';

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

  const imageName = data.image.split('/').pop();
  await removeOldImage(imageName, 'cabin-images');

  return data;
};

export const createCabin = async (cabin) => {
  const { image, ...cabinData } = cabin;

  const { imagePath } = await uploadNewImage(image, 'cabin-images', 'cabin');

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabinData, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created',
    );
  }

  return data;
};

export const updateCabin = async (cabin) => {
  const { id, image: newImage, oldImage, ...cabinData } = cabin;

  const isImageNew = newImage instanceof File;

  let imagePath = newImage;
  let newImageName;

  // 1. Upload new image if needed
  if (isImageNew) {
    const fileExt = newImage.name.split('.').pop().toLowerCase().trim();
    newImageName = `cabin-${uuidv4()}.${fileExt}`;

    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${newImageName}`;

    const { error: uploadError } = await supabase.storage
      .from('cabin-images')
      .upload(newImageName, newImage);

    if (uploadError) {
      console.error(uploadError);
      throw new Error('Cabin image could not be uploaded');
    }
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
    const oldImageName = oldImage.split('/').pop();
    await supabase.storage.from('cabin-images').remove([oldImageName]);
  }

  return data;
};

export const duplicateCabin = async (cabin) => {
  const { id: _id, image, created_at: _createdAt, ...cabinData } = cabin;

  const oldImageName = image.split('/').pop();
  const fileExt = image.split('.').pop().toLowerCase().trim();
  const newImageName = `cabin-${uuidv4()}.${fileExt}`;

  const { error: copyError } = await supabase.storage
    .from('cabin-images')
    .copy(oldImageName, newImageName);

  if (copyError) {
    console.error(copyError);
    throw new Error('Image could not be duplicated');
  }

  const newImagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${newImageName}`;

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabinData, image: newImagePath }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be duplicated');
  }

  return data;
};

import supabase, { supabaseUrl } from './supabase';

export const getCabins = async () => {
  const { data: cabins, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return cabins;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }

  return data;
};

export const createCabin = async (cabin) => {
  const { cabinImage, ...cabinData } = cabin;
  const imageName = `${Math.random()}-${cabinImage.name}`.replaceAll('/', '');

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabinData, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be deleted');
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, cabinImage);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data[0].id);
    console.log(storageError);
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created',
    );
  }

  return data;
};

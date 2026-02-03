import styled from 'styled-components';
import { Button } from '../button/Button';
import { Label } from './Label';
import { useRef, useState } from 'react';
import { Spinner } from '../Spinner';
import { InputError } from './Input';
import { HiXMark } from 'react-icons/hi2';

const ImageControls = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 6.66rem;
`;

const HiddenInput = styled.input.attrs({ type: 'file', accept: 'image/*' })`
  display: none;
`;

const ImagePreview = styled.div`
  width: 10rem;
  aspect-ratio: 3/2;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-md);
  display: block;
`;

const RemoveImgBtn = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: -1rem;
  right: -1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-red-700);
  color: var(--color-grey-0);
  border: 2px solid var(--color-grey-0);
  border-radius: 50%;
  padding: 0.2rem;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: var(--color-red-800);
  }

  &:disabled {
    cursor: default;
  }
`;

export const ImagePicker = ({
  label,
  id,
  onChange,
  disabled,
  error,
  defaultImage,
}) => {
  const [selectedImage, setSelectedImage] = useState(defaultImage || null);
  const [isLoading, setIsLoading] = useState(false);
  const imageInput = useRef();

  const handleUpload = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setSelectedImage(null);
      onChange?.(null);
      return;
    }
    onChange(file);
    setIsLoading(true);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
      setIsLoading(false);
    };

    fileReader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    if (disabled) return;
    setSelectedImage(null);
    imageInput.current.value = '';
    onChange?.(null);
  };
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <ImageControls>
        <HiddenInput
          id={id}
          ref={imageInput}
          onChange={handleImageChange}
          disabled={disabled}
        />
        {!selectedImage && !isLoading && (
          <Button type='button' onClick={handleUpload} disabled={disabled}>
            Upload
          </Button>
        )}

        {isLoading && <Spinner />}

        {selectedImage && !isLoading && (
          <ImagePreview>
            <RemoveImgBtn onClick={handleRemoveImage} disabled={disabled}>
              <HiXMark />
            </RemoveImgBtn>
            <Img src={selectedImage} alt='Selected preview' />
          </ImagePreview>
        )}
      </ImageControls>
      {error && <InputError>{error}</InputError>}
    </>
  );
};

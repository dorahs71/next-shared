'use client';

import styles from './image-picker.module.css';
import { useRef, useState } from 'react';

export default function ImagePicker({ label, name }: { label: string; name: string }) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);

  function handlePickerClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handlePickerClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

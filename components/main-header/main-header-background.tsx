import styles from './main-header-background.module.css';

export default function MainHeaderBackground() {
  return (
    <div className={styles['header-background']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F9A827"
          d="M 0 256 L 48 240 C 96 224 192 192 288 181.3 C 384 171 480 181 576 186.7 C 672 192 768 192 864 181.3 C 960 171 998 163 1058 167 C 1264 176 1301 194 1382 224 L 1440 256 L 1440 0 L 1392 0 C 1344 0 1248 0 1152 0 C 1056 0 960 0 864 0 C 768 0 672 0 576 0 C 480 0 384 0 288 0 C 192 0 96 0 48 0 L 0 0 Z"
        ></path>
      </svg>
    </div>
  );
}

import type { IconProp } from '@/types/icon';

export function OhnpolLogo({ size = 16, fill = '#000' }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 45 40"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.294 7.72727C14.294 9.31345 13.9933 10.6629 13.392 11.7756C12.7954 12.8883 11.981 13.7382 10.9488 14.3253C9.92133 14.9077 8.76603 15.1989 7.48288 15.1989C6.19027 15.1989 5.03023 14.9053 4.00277 14.3182C2.97531 13.7311 2.16328 12.8812 1.56669 11.7685C0.970099 10.6558 0.671803 9.30871 0.671803 7.72727C0.671803 6.1411 0.970099 4.79167 1.56669 3.67898C2.16328 2.56629 2.97531 1.71875 4.00277 1.13636C5.03023 0.549242 6.19027 0.255681 7.48288 0.255681C8.76603 0.255681 9.92133 0.549242 10.9488 1.13636C11.981 1.71875 12.7954 2.56629 13.392 3.67898C13.9933 4.79167 14.294 6.1411 14.294 7.72727ZM11.1761 7.72727C11.1761 6.69981 11.0222 5.83333 10.7144 5.12784C10.4114 4.42235 9.98288 3.88731 9.42891 3.52273C8.87493 3.15814 8.22625 2.97585 7.48288 2.97585C6.73951 2.97585 6.09084 3.15814 5.53686 3.52273C4.98288 3.88731 4.55201 4.42235 4.24425 5.12784C3.94122 5.83333 3.7897 6.69981 3.7897 7.72727C3.7897 8.75473 3.94122 9.62121 4.24425 10.3267C4.55201 11.0322 4.98288 11.5672 5.53686 11.9318C6.09084 12.2964 6.73951 12.4787 7.48288 12.4787C8.22625 12.4787 8.87493 12.2964 9.42891 11.9318C9.98288 11.5672 10.4114 11.0322 10.7144 10.3267C11.0222 9.62121 11.1761 8.75473 11.1761 7.72727ZM16.772 15V0.454545H19.8473V6.45597H26.0902V0.454545H29.1584V15H26.0902V8.99148H19.8473V15H16.772ZM44.0601 0.454545V15H41.4038L35.0757 5.84517H34.9692V15H31.8939V0.454545H34.5928L40.8712 9.60227H40.999V0.454545H44.0601ZM3.5935 39V24.4545H9.33214C10.4354 24.4545 11.3752 24.6652 12.1517 25.0866C12.9283 25.5033 13.5201 26.0833 13.9273 26.8267C14.3392 27.5653 14.5452 28.4176 14.5452 29.3835C14.5452 30.3494 14.3369 31.2017 13.9202 31.9403C13.5035 32.679 12.8998 33.2543 12.1091 33.6662C11.3231 34.0781 10.3714 34.2841 9.25401 34.2841H5.59634V31.8196H8.75685C9.34871 31.8196 9.8364 31.7178 10.2199 31.5142C10.6082 31.3059 10.897 31.0194 11.0864 30.6548C11.2805 30.2855 11.3776 29.8617 11.3776 29.3835C11.3776 28.9006 11.2805 28.4792 11.0864 28.1193C10.897 27.7547 10.6082 27.473 10.2199 27.2741C9.83166 27.0705 9.33924 26.9688 8.74265 26.9688H6.66878V39H3.5935ZM30.1092 31.7273C30.1092 33.3134 29.8085 34.6629 29.2072 35.7756C28.6106 36.8883 27.7962 37.7382 26.764 38.3253C25.7366 38.9077 24.5813 39.1989 23.2981 39.1989C22.0055 39.1989 20.8455 38.9053 19.818 38.3182C18.7905 37.7311 17.9785 36.8812 17.3819 35.7685C16.7853 34.6558 16.487 33.3087 16.487 31.7273C16.487 30.1411 16.7853 28.7917 17.3819 27.679C17.9785 26.5663 18.7905 25.7187 19.818 25.1364C20.8455 24.5492 22.0055 24.2557 23.2981 24.2557C24.5813 24.2557 25.7366 24.5492 26.764 25.1364C27.7962 25.7187 28.6106 26.5663 29.2072 27.679C29.8085 28.7917 30.1092 30.1411 30.1092 31.7273ZM26.9913 31.7273C26.9913 30.6998 26.8374 29.8333 26.5297 29.1278C26.2266 28.4223 25.7981 27.8873 25.2441 27.5227C24.6902 27.1581 24.0415 26.9759 23.2981 26.9759C22.5547 26.9759 21.9061 27.1581 21.3521 27.5227C20.7981 27.8873 20.3672 28.4223 20.0595 29.1278C19.7565 29.8333 19.6049 30.6998 19.6049 31.7273C19.6049 32.7547 19.7565 33.6212 20.0595 34.3267C20.3672 35.0322 20.7981 35.5672 21.3521 35.9318C21.9061 36.2964 22.5547 36.4787 23.2981 36.4787C24.0415 36.4787 24.6902 36.2964 25.2441 35.9318C25.7981 35.5672 26.2266 35.0322 26.5297 34.3267C26.8374 33.6212 26.9913 32.7547 26.9913 31.7273ZM32.5872 39V24.4545H35.6625V36.4645H41.8983V39H32.5872Z"
        fill={fill}
      />
    </svg>
  );
}

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Shield icon */}
      <path
        d="M20 4L34 10V22C34 29 20 36 20 36C20 36 6 29 6 22V10L20 4Z"
        fill="white"
      />
      <path
        d="M20 10L28 13.5V21C28 25.5 20 30 20 30C20 30 12 25.5 12 21V13.5L20 10Z"
        fill="#0a0a0a"
      />
      <path
        d="M15 20L18.5 23.5L25 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* SAFE text */}
      <path
        d="M46 26C47.5 27.3 49.5 28 52 28C54.5 28 56 27 56 25.5C56 24 54.8 23.3 52.5 22.5C49.5 21.5 46.5 20.2 46.5 17C46.5 14 49 12 52.5 12C55 12 57 12.8 58.5 14L57 16.5C55.8 15.5 54.2 15 52.5 15C50.5 15 49.5 16 49.5 17.2C49.5 18.7 51 19.3 53.2 20.1C56.2 21.2 59 22.5 59 25.8C59 29 56.2 31 52 31C49 31 46.5 30 44.5 28.2L46 26Z"
        fill="white"
      />
      <path
        d="M62 31V12H75V15H65.5V20H74V23H65.5V31H62Z"
        fill="white"
      />
      <path
        d="M85.5 31H82L76 12H79.5L84 27.5L88.5 12H92L85.5 31Z"
        fill="white"
      />
      <path
        d="M94 31V12H107V15H97.5V20H106V23H97.5V28H107V31H94Z"
        fill="white"
      />

      {/* УРОК text */}
      <path
        d="M116 31V12H119.5V31H116Z"
        fill="white"
        opacity="0.5"
      />
      <path
        d="M123 12H126.5V23.5C126.5 26.5 128 28 130.5 28C133 28 134.5 26.5 134.5 23.5V12H138V23.8C138 28.5 135.2 31.3 130.5 31.3C125.8 31.3 123 28.5 123 23.8V12Z"
        fill="white"
        opacity="0.5"
      />
      <path
        d="M141 31V12H150C153.5 12 155.8 14 155.8 17.2C155.8 19.5 154.5 21.2 152.5 22L156.5 31H152.8L149.2 22.8H144.5V31H141ZM144.5 20H149.8C151.8 20 152.8 19 152.8 17.3C152.8 15.6 151.8 14.8 149.8 14.8H144.5V20Z"
        fill="white"
        opacity="0.5"
      />
      <path
        d="M159 31V12H162.5V20.5L170 12H174L166.5 20.8L174.5 31H170.5L164.5 23L162.5 25.2V31H159Z"
        fill="white"
        opacity="0.5"
      />
    </svg>
  );
};

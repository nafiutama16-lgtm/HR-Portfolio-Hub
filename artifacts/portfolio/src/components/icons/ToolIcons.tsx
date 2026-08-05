export function WordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="2" width="24" height="28" rx="2" fill="url(#word_paint0)" />
      <path d="M8 23H32V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V23Z" fill="url(#word_paint1)" />
      <rect x="8" y="16" width="24" height="7" fill="url(#word_paint2)" />
      <rect x="8" y="9" width="24" height="7" fill="url(#word_paint3)" />
      <path
        d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z"
        fill="#000000"
        fillOpacity="0.3"
      />
      <rect y="7" width="18" height="18" rx="2" fill="url(#word_paint4)" />
      <path
        d="M15 11.0142H13.0523L11.5229 17.539L9.84967 11H8.20261L6.51634 17.539L5 11.0142H3L5.60131 21H7.3268L9 14.6879L10.6732 21H12.3987L15 11.0142Z"
        fill="white"
      />
      <defs>
        <linearGradient id="word_paint0" x1="8" y1="6.66667" x2="32" y2="6.66667" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2B78B1" />
          <stop offset="1" stopColor="#338ACD" />
        </linearGradient>
        <linearGradient id="word_paint1" x1="8" y1="27.375" x2="32" y2="27.375" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B366F" />
          <stop offset="1" stopColor="#2657B0" />
        </linearGradient>
        <linearGradient id="word_paint2" x1="18.5" y1="20" x2="32" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#20478B" />
          <stop offset="1" stopColor="#2D6FD1" />
        </linearGradient>
        <linearGradient id="word_paint3" x1="18.5" y1="13" x2="32" y2="13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#215295" />
          <stop offset="1" stopColor="#2E84D3" />
        </linearGradient>
        <linearGradient id="word_paint4" x1="3.31137e-08" y1="17" x2="19" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#223E74" />
          <stop offset="1" stopColor="#215091" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ExcelIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
      <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z" />
      <path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z" />
      <path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z" />
      <path fill="#17472a" d="M14 24.005H29V33.055H14z" />
      <g>
        <path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z" />
        <path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z" />
        <path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z" />
        <path fill="#129652" d="M29 24.005H44V33.055H29z" />
      </g>
      <path
        fill="#0c7238"
        d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"
      />
      <path
        fill="#fff"
        d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"
      />
    </svg>
  );
}

export function PowerPointIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient
          id="ppt_a"
          x1="4.494"
          y1="-1748.086"
          x2="13.832"
          y2="-1731.914"
          gradientTransform="translate(0 1756)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ca4c28" />
          <stop offset="0.5" stopColor="#c5401e" />
          <stop offset="1" stopColor="#b62f14" />
        </linearGradient>
      </defs>
      <path d="M18.93,17.3,16.977,3h-.146A12.9,12.9,0,0,0,3.953,15.854V16Z" fill="#ed6c47" />
      <path d="M17.123,3h-.146V16l6.511,2.6L30,16v-.146A12.9,12.9,0,0,0,17.123,3Z" fill="#ff8f6b" />
      <path
        d="M30,16v.143A12.905,12.905,0,0,1,17.12,29h-.287A12.907,12.907,0,0,1,3.953,16.143V16Z"
        fill="#d35230"
      />
      <path
        d="M17.628,9.389V23.26a1.2,1.2,0,0,1-.742,1.1,1.16,1.16,0,0,1-.45.091H7.027c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85c.143-.221.293-.442.456-.65h9.93A1.2,1.2,0,0,1,17.628,9.389Z"
        opacity="0.1"
      />
      <path
        d="M16.977,10.04V23.911a1.15,1.15,0,0,1-.091.448,1.2,1.2,0,0,1-1.1.741H7.62q-.309-.314-.593-.65c-.182-.208-.358-.429-.521-.65a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z"
        opacity="0.2"
      />
      <path
        d="M16.977,10.04V22.611A1.2,1.2,0,0,1,15.785,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.735A1.2,1.2,0,0,1,16.977,10.04Z"
        opacity="0.2"
      />
      <path
        d="M16.326,10.04V22.611A1.2,1.2,0,0,1,15.134,23.8H6.506a12.735,12.735,0,0,1-2.553-7.657v-.286A12.705,12.705,0,0,1,6.05,8.85h9.084A1.2,1.2,0,0,1,16.326,10.04Z"
        opacity="0.2"
      />
      <path
        d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z"
        fill="url(#ppt_a)"
      />
      <path
        d="M9.293,12.028a3.287,3.287,0,0,1,2.174.636,2.27,2.27,0,0,1,.756,1.841,2.555,2.555,0,0,1-.373,1.376,2.49,2.49,0,0,1-1.059.935A3.607,3.607,0,0,1,9.2,17.15H7.687v2.8H6.141V12.028ZM7.686,15.94H9.017a1.735,1.735,0,0,0,1.177-.351,1.3,1.3,0,0,0,.4-1.025q0-1.309-1.525-1.31H7.686V15.94Z"
        fill="#fff"
      />
    </svg>
  );
}

export function GoogleDocsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
      <path
        fill="#2196f3"
        d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"
      />
      <path fill="#bbdefb" d="M40 13L30 13 30 3z" />
      <path fill="#1565c0" d="M30 13L40 23 40 13z" />
      <path
        fill="#e3f2fd"
        d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"
      />
    </svg>
  );
}
 
export function GoogleSheetsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
      <path
        fill="#43a047"
        d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"
      />
      <path fill="#c8e6c9" d="M40 13L30 13 30 3z" />
      <path fill="#2e7d32" d="M30 13L40 23 40 13z" />
      <path
        fill="#e8f5e9"
        d="M31,23H17h-2v2v2v2v2v2v2v2h18v-2v-2v-2v-2v-2v-2v-2H31z M17,25h4v2h-4V25z M17,29h4v2h-4V29z M17,33h4v2h-4V33z M31,35h-8v-2h8V35z M31,31h-8v-2h8V31z M31,27h-8v-2h8V27z"
      />
    </svg>
  );
}

export function CanvaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 525 525" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform="matrix(.26718 0 0 .26718 0 0)">
        <circle cx="950" cy="950" r="950" fill="#7d2ae7" />
        <circle cx="950" cy="950" r="950" fill="url(#canva_radial1)" />
        <circle cx="950" cy="950" r="950" fill="url(#canva_radial2)" />
        <circle cx="950" cy="950" r="950" fill="url(#canva_radial3)" />
        <circle cx="950" cy="950" r="950" fill="url(#canva_radial4)" />
      </g>
      <path
        d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715zm-274.51 18.547c-5.342 0-7.435-5.38-7.435-13.401 0-13.93 9.528-37.193 19.604-37.193 4.402 0 6.065 5.185 6.065 11.524 0 14.145-9.059 39.07-18.235 39.07zm182.948-41.574c-3.189-3.796-4.343-8.961-4.343-13.559 0-5.673 2.074-10.467 4.558-10.467 2.485 0 3.248 2.446 3.248 5.85 0 5.693-2.035 14.008-3.463 18.176zm41.418 41.574c-5.34 0-7.434-6.182-7.434-13.401 0-13.441 9.528-37.193 19.682-37.193 4.402 0 5.967 5.146 5.967 11.524 0 14.145-8.902 39.07-18.215 39.07z"
        fill="#fff"
      />
      <defs>
        <radialGradient
          id="canva_radial1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(1469.491) rotate(-49.416 1.37 .302)"
        >
          <stop offset="0" stopColor="#6420ff" />
          <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(54.703 42.717 594.194) scale(1657.122)"
        >
          <stop offset="0" stopColor="#00c4cc" />
          <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1023 -1030 473.711 470.491 367 1684)"
        >
          <stop offset="0" stopColor="#6420ff" />
          <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="canva_radial4"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(595.999 1372 -2298.41 998.431 777 256)"
        >
          <stop offset="0" stopColor="#00c4cc" stopOpacity=".73" />
          <stop offset="0" stopColor="#00c4cc" />
          <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

import React from "react";

const base = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5c.9 0 1.7.6 1.9 1.5l.6 2.4c.2.7-.1 1.5-.7 1.9l-1.1.8a13 13 0 0 0 6.2 6.2l.8-1.1c.4-.6 1.2-.9 1.9-.7l2.4.6c.9.2 1.5 1 1.5 1.9V19c0 1.1-1 2-2.1 1.9C9.7 20.2 3.8 14.3 3.1 6.6 3 5.5 3.9 4.5 5 4.5z" />
    </svg>
  );
}

export function GithubIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.6 0 4.2 2.7 7.8 6.5 9 .5.1.6-.2.6-.5v-1.8c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.1-.2-4.3-1.1-4.3-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.6 0 3.6-2.2 4.5-4.3 4.7.4.3.7.9.7 1.9v2.8c0 .3.1.6.6.5 3.8-1.3 6.5-4.8 6.5-9C21.5 6.8 17.2 2.5 12 2.5z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M7.5 10.5v6" />
      <circle cx="7.5" cy="7.7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.2 16.5v-3.4c0-1.4.9-2.3 2.1-2.3 1.1 0 1.9.8 1.9 2.3v3.4" />
      <path d="M11.2 10.5v6" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v11" />
      <path d="M7.5 11.5 12 16l4.5-4.5" />
      <path d="M4.5 18.5h15" />
    </svg>
  );
}

export function MapIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-6 6.5-11a6.5 6.5 0 1 0-13 0c0 5 6.5 11 6.5 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

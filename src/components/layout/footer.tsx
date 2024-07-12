import React from "react";
import { SocialIcon } from "react-social-icons";
const navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <SocialIcon
        aria-hidden="true"
        className="w-3 h-3"
        url="https://facebook.com"
      />
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <SocialIcon
        aria-hidden="true"
        className="w-3 h-3"
        url="https://instagram.com"
      />
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <SocialIcon
        aria-hidden="true"
        className="w-3 h-3"
        url="https://twitter.com"
      />
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <SocialIcon
        aria-hidden="true"
        className="w-3 h-3"
        url="https://github.com"
      />
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <SocialIcon
        aria-hidden="true"
        className="w-3 h-3"
        url="https://youtube.com"
      />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
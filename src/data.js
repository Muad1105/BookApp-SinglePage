import { FaBriefcase } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsNewspaper } from "react-icons/bs";
import React from "react";
const sublinks = [
  {
    page: "gallery",
    links: [
      { label: "ebooks", icon: <GrGallery />, url: "/products" },
      { label: "top list", icon: <GrGallery />, url: "/products" },
      { label: "category", icon: <GrGallery />, url: "/products" },
    ],
  },
  {
    page: "news",
    links: [
      { label: "awards", icon: <BsNewspaper />, url: "/products" },
      { label: "designs", icon: <BsNewspaper />, url: "/products" },
      { label: "recent", icon: <BsNewspaper />, url: "/products" },
      { label: "publishers", icon: <BsNewspaper />, url: "/products" },
    ],
  },
  {
    page: "about",
    links: [
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
      { label: "contact", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];

export default sublinks;

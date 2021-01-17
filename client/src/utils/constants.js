import React from "react";
import { Mail, Location, Phone } from "../components/icons";

// const routes = [
//   {
//     id: '1',
//     name: 'Login',
//     hy: {
//       name: 'Մուտք'
//     },
//     icon: 'login',
//     route: '/login',
//   },
//   {
//     id: '2',
//     icon: 'dashboard',
//     name: 'Dashboard',
//     hy: {
//       name: 'Ադմինիստրացիա'
//     },
//     route: '/dashboard',
//   },
//   {
//     id: '3',
//     name: 'Home',
//     hy: {
//       name: 'Գլխավոր'
//     },
//     icon: 'home',
//     route: '/',
//   },
//   {
//     id: '4',
//     name: 'Companies',
//     hy: {
//       name: 'Կազմակերպություններ'
//     },
//     icon: 'company',
//     route: '/companies',
//   },
//   {
//     id: '5',
//     name: 'Services',
//     hy: {
//       name: 'Ծառայություններ'
//     },
//     icon: 'services',
//     route: '/news',
//   },
//   {
//     id: '50',
//     name: 'Service',
//     hy: {
//       name: 'Ծառայություն'
//     },
//     icon: 'service',
//     route: '/service/:id',
//   },
//   {
//     id: '6',
//     name: 'Car salons',
//     hy: {
//       name: 'Ավտոսրահներ'
//     },
//     icon: 'car_salons',
//     route: '/car_salons',
//   },
//   {
//     id: '60',
//     name: 'Car salon',
//     hy: {
//       name: 'Ավտոսրահ'
//     },
//     icon: 'car_salon',
//     route: '/car_salon/:id',
//   },
//   {
//     id: '7',
//     name: 'Shops',
//     hy: {
//       name: 'Խանութներ'
//     },
//     icon: 'shops',
//     route: '/shops',
//   },
//   {
//     id: '70',
//     name: 'Shop',
//     hy: {
//       name: 'Խանութ'
//     },
//     icon: 'shop',
//     route: '/shop',
//   },
//   {
//     id: '8',
//     name: 'Promotions',
//     hy: {
//       name: 'Ակցիաներ'
//     },
//     icon: 'education',
//     route: '/education',
//   },
//   {
//     id: '80',
//     name: 'Promotion',
//     hy: {
//       name: 'Ակցիա'
//     },
//     icon: 'promotion',
//     route: '/promotion/:id',
//   },
//   {
//     id: '9',
//     name: 'Pleasure',
//     hy: {
//       name: 'Ժամանց'
//     },
//     icon: 'pleasure',
//     route: '/pleasure',
//   },
//   {
//     id: '10',
//     breadcrumbParentId: '9',
//     menuParentId: '9',
//     name: 'LOG OUT',
//     hy: {
//       name: 'ԵԼՔ'
//     },
//     icon: 'logout',
//     route: '/logout',
//   },
// ]

export const navigationMenu = [
  {
    id: "1",
    name_en: "About us",
    name_ru: "О нас",
    name_hy: "Մեր մասին",
    icon: "about",
    route: "/about",
  },
  {
    id: "2",
    name_en: "Shops",
    name_ru: "Магазины",
    name_hy: "Խանութներ",
    icon: "shops",
    route: "/shops",
  },
  {
    id: "3",
    name_en: "Car services",
    name_ru: "Автосервисы",
    name_hy: "Ավտոծառայություններ",
    icon: "car_services",
    route: "/services/car_services",
  },
  {
    id: "4",
    name_en: "Education",
    name_ru: "Образование",
    name_hy: "Կրթություն",
    icon: "education",
    route: "/education",
  },
  {
    id: "5",
    name_en: "Pleasure",
    name_ru: "Удовольствие",
    name_hy: "Ժամանց",
    icon: "pleasure",
    route: "/pleasure",
  },
  {
    id: "6",
    name_en: "News",
    name_ru: "Новости",
    name_hy: "Նորություններ",
    icon: "news",
    route: "/news",
  },
  {
    id: "7",
    name_en: "Contacts",
    name_ru: "Контакты",
    name_hy: "Կոնտակտներ",
    icon: "contacts",
    route: "/contacts",
  },
];

export const footerInfoNavigation = [
  {
    id: "1",
    name: "vacancies",
    route: "/vacancies",
  },
  {
    id: "2",
    name: "How to cooperate?",
    route: "/how-to-cooperate",
  },
  {
    id: "3",
    name: "Useful information",
    route: "/help_info",
  },
  {
    id: "4",
    name: "Commercial department",
    route: "/commercial-department",
  },
  {
    id: "5",
    name: "Working hours",
    route: "/working-hours",
  },
];
export const footerContactNavigation = [
  {
    id: "1",
    name: "garage mall address",
    icon: <Location />,
    title: "location",
  },
  {
    id: "2",
    name: "+374 91 21 65 54",
    icon: <Phone />,
    title: "Click to Call!",
    contactLink: "tel:+374 91 21 65 54",
  },
  {
    id: "3",
    name: "info@garagemastersmall.am",
    icon: <Mail />,
    title: "Write to email",
    contactLink: "mailto:info@garagemastersmall.am",
  },
];

export const contactsAbout = {
  phone: {
    name: "+374 91 21 65 54",
    title: "Click to Call!",
    contactLink: "tel:+374 91 21 65 54",
  },
  mail: {
    name: "info@garagemastersmall.am",
    title: "Write to email",
    contactLink: "mailto:info@garagemastersmall.am",
  },
};

export const servicesCards = [
  {
    id: "1",
    title_en: "Pleasure",
    title_ru: "Удовольствие",
    title_hy: "Ծառայություններ կապված մեքենաների հետ",
    imgUrl: "../../../../assets/img/service1.png",
    route: "/services/car_services",
  },
  {
    id: "2",
    title_en: "Pleasure",
    title_ru: "Удовольствие",
    title_hy: "Ֆինանսական եւ ապահովագրական ծառայություններ",
    imgUrl: "../../../../assets/img/service2.png",
    route: "/services/financial",
  },
  {
    id: "3",
    title_en: "Pleasure",
    title_ru: "Удовольствие",
    title_hy: "Այլ ծառայություններ",
    imgUrl: "../../../../assets/img/service3.png",
    route: "/services/other",
  },
];

import mongoose from 'mongoose';
export const sample_foods = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Doro Wat',
    cookTime: '45-60',
    price: 15,
    favorite: true,
    origins: ['Ethiopia'],
    stars: 4.8,
    imageUrl: 'doro-wat.jpg',
    tags: ['Traditional', 'Stew', 'Spicy'],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Beyaaynet',
    cookTime: '30-40',
    price: 5,
    favorite: true,
    origins: ['Ethiopia'],
    stars: 4.5,
    imageUrl: 'injera.jpg',
    tags: ['Staple', 'Bread', 'Ethiopian'],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Tibs',
    cookTime: '20-30',
    price: 12,
    favorite: false,
    origins: ['Ethiopia'],
    stars: 4.7,
    imageUrl: 'tibs.jpg',
    tags: ['Traditional', 'Stir-fry', 'Meat'],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Shiro',
    cookTime: '15-25',
    price: 8,
    favorite: true,
    origins: ['Ethiopia'],
    stars: 4.6,
    imageUrl: 'shiro.jpg',
    tags: ['Vegetarian', 'Stew', 'Protein-rich'],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Kitfo',
    cookTime: '10-20',
    price: 14,
    favorite: false,
    origins: ['Ethiopia'],
    stars: 4.3,
    imageUrl: 'kitfo.jpg',
    tags: ['Traditional', 'Meat', 'Spicy'],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Chechebsa',
    cookTime: '10-15',
    price: 6,
    favorite: true,
    origins: ['Ethiopia'],
    stars: 4.4,
    imageUrl: 'chechebsa.jpg',
    tags: ['Breakfast', 'Bread', 'Spicy'],
  },
];


export const sample_users = [
  {
    _id: new mongoose.Types.ObjectId(),  // Correct usage of ObjectId
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '12345',
    address: 'Toronto On',
    isAdmin: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    password: '12345',
    address: 'Shanghai',
    isAdmin: true,
  },
  // Repeat for other users if necessary
];
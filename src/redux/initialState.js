const initialState = {
  categories: [{
      id: 'bed',
      name: 'Bed',
    },
    {
      id: 'chair',
      name: 'Chair',
    },
    {
      id: 'sofa',
      name: 'Sofa',
    },
    {
      id: 'table',
      name: 'Table',
    },
    {
      id: 'dining',
      name: 'Dining',
    },
  ],

  products: [{
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'chair',
      price: 30,
      oldPrice: 50,
      stars: 2,
      userStars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'sofa',
      price: 30,
      oldPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      oldPrice: 50,
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      compare: false,
    },

  ],

  compares: [],
  gallery: {
    featured: [
      {
        id: 'aenean-ru-bristique-18',
        name: 'Aenean Ru Bristique 18',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
      {
        id: 'aenean-ru-bristique-19',
        name: 'Aenean Ru Bristique 19',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-12',
        name: 'Aenean Ru Bristique 12',
        category: 'bed',
        oldPrice: 50,
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-21',
        name: 'Aenean Ru Bristique 21',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
    ],
    topSeller: [
      {
        id: 'aenean-ru-bristique-4',
        name: 'Aenean Ru Bristique 4',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-5',
        name: 'Aenean Ru Bristique 5',
        category: 'bed',
        price: 30,
        oldPrice: 50,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-6',
        name: 'Aenean Ru Bristique 6',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
      {
        id: 'aenean-ru-bristique-7',
        name: 'Aenean Ru Bristique 7',
        category: 'bed',
        price: 30,
        oldPrice: 40,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-8',
        name: 'Aenean Ru Bristique 8',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: false,
        compare: true,
      },
      {
        id: 'aenean-ru-bristique-9',
        name: 'Aenean Ru Bristique 9',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
    ],
    saleOff: [
      {
        id: 'aenean-ru-bristique-13',
        name: 'Aenean Ru Bristique 13',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
      {
        id: 'aenean-ru-bristique-14',
        name: 'Aenean Ru Bristique 14',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-15',
        name: 'Aenean Ru Bristique 15',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-16',
        name: 'Aenean Ru Bristique 16',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: false,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-17',
        name: 'Aenean Ru Bristique 17',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-9',
        name: 'Aenean Ru Bristique 9',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
      {
        id: 'aenean-ru-bristique-10',
        name: 'Aenean Ru Bristique 10',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: false,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-11',
        name: 'Aenean Ru Bristique 11',
        category: 'bed',
        price: 30,
        oldPrice: 50,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-12',
        name: 'Aenean Ru Bristique 12',
        category: 'bed',
        oldPrice: 50,
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
    ],
    topRated: [
      {
        id: 'aenean-ru-bristique-21',
        name: 'Aenean Ru Bristique 21',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
      {
        id: 'aenean-ru-bristique-22',
        name: 'Aenean Ru Bristique 22',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-23',
        name: 'Aenean Ru Bristique 23',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: false,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-24',
        name: 'Aenean Ru Bristique 24',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: false,
      },
      {
        id: 'aenean-ru-bristique-9',
        name: 'Aenean Ru Bristique 9',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: true,
        compare: true,
      },
      {
        id: 'aenean-ru-bristique-10',
        name: 'Aenean Ru Bristique 10',
        category: 'bed',
        price: 30,
        stars: 2,
        promo: 'sale',
        newFurniture: true,
        favorite: false,
        compare: false,
      },
    ],
    categories: [
      { id: 'featured', name: 'Featured' },
      { id: 'topSeller', name: 'Top Seller' },
      { id: 'saleOff', name: 'Sale Off' },
      { id: 'topRated', name: 'Top Rated' },
    ],
  },


  cart: {},
  feedback: [{

      id: 'client1',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique dolor sed enim efficitur posuere. Nullam blandit enim libero. Morbi eu ipsum ac justo semper semper a a neque. Fusce sodales tincidunt eleifend. Interdum et.',
      image: 'src=../../images/feedback/client1.jpg',
    },
    {
      id: 'client1',
      name: 'Amanda Doom',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam lacinia sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec condimentum metus nec tellus eleifend finibus varius eget odio. Cras ut tortor.',
      image: 'src=../../images/feedback/client2.jpg',
    },

    {
      id: 'client1',
      name: 'Scott Mad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu luctus tortor, sed tempor enim. Mauris aliquam vel enim et laoreet. Quisque viverra euismod leo, ac accumsan lorem condimentum sit amet. Mauris ultrices diam sem.',
      image: 'src=../../images/feedback/client3.jpg',
    },
  ],


  view: 'desktop',

  deals: [{
      id: 1,
      name: 'sofa',
      nameImg: 'deal1',
      title: 'Guest room',
      title2: 'sofa',
      subtitle: '-20%',
    },
    {
      id: 2,
      name: 'chairs',
      nameImg: 'deal2',
      title: 'Office',
      title2: 'Chair',
      title3: 'Collection',
      subtitle: '$200.00',
    },
    {
      id: 3,
      name: 'bed',
      nameImg: 'deal3',
      title: 'Special',
      title2: 'Collection',
      subtitle: 'Save up 45% of furniture',
    },
  ],
  
  blog: [{
      id: 1,
      name: 'blog',
      date: '15 JAN 2016',
      comments: '4',
      title: 'Products That Fight Static',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus fringilla purus, at aliquet ex. Nunc aliquet quis lorem mattis venenatis. Cras eget elit rutrum, eleifend est in, ornare mi.',
    },
    {
      id: 2,
      name: 'blog',
      date: '15 JAN 2016',
      comments: '4',
      title: 'Products That Fight Static',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus fringilla purus, at aliquet ex. Nunc aliquet quis lorem mattis venenatis. Cras eget elit rutrum, eleifend est in, ornare mi.',
    },
    {
      id: 3,
      name: 'blog',
      date: '15 JAN 2016',
      comments: '4',
      title: 'Products That Fight Static',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus fringilla purus, at aliquet ex. Nunc aliquet quis lorem mattis venenatis. Cras eget elit rutrum, eleifend est in, ornare mi.',
    },
    {
      id: 4,
      name: 'blog',
      date: '15 JAN 2016',
      comments: '4',
      title: 'Products That Fight Static',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus fringilla purus, at aliquet ex. Nunc aliquet quis lorem mattis venenatis. Cras eget elit rutrum, eleifend est in, ornare mi.',
    },
    {
      id: 5,
      name: 'blog',
      date: '15 JAN 2016',
      comments: '4',
      title: 'Products That Fight Static',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus fringilla purus, at aliquet ex. Nunc aliquet quis lorem mattis venenatis. Cras eget elit rutrum, eleifend est in, ornare mi.',
    },
    {
      id: 6,
      name: 'blog',
      date: '15 JAN 2016',
      comments: '4',
      title: 'Products That Fight Static',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus fringilla purus, at aliquet ex. Nunc aliquet quis lorem mattis venenatis. Cras eget elit rutrum, eleifend est in, ornare mi.',
    },
    {
      id: 7,
      name: 'blog',
      date: '15 JAN 2016',
      comments: '4',
      title: 'Products That Fight Static',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus fringilla purus, at aliquet ex. Nunc aliquet quis lorem mattis venenatis. Cras eget elit rutrum, eleifend est in, ornare mi.',
    },
  ],


};

export default initialState;

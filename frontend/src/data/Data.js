
const post = [
  {
    id: 1,
    title: "Delicious Pancakes Recipe",
    description: "Learn how to make fluffy pancakes at home!",
    time: "October 5, 2022",
    author: {
      username: "Alice",
      displayName: "Alice Doe",
      password: "password123",
      email: "alice@example.com",
      avatar: "https://example.com/avatar/alice.jpg",
      phoneNumber: "1234567890",
      salt: "randomsalt123",
      role: "customer",
    }, // Assuming author ID
    content: [
      {
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/b5/4e/14/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_5b03c925b0b538931ef3",
        descriptions: "Almost immediately after I booked a trip to Istanbul last summer, I started researching hammams. If there was one thing I was keen on doing while exploring the Mediterranean city, it was visiting a traditional Turkish bathhouse. Descended from Roman and Byzantine bathing rituals, the hammam itself dates all the way back to the 14th century. And in Istanbul, many of them, including the 440-year-old Kilic Ali Pasa and the 380-year-old Zeyrek Çinili Hamam (reopening in 2024 after a 13-year renovation) retain their historic grandeur and ethos. According to some accounts, the hammam began out of necessity—they were often built next to mosques so that worshippers could bathe before praying. But the hammam is also a gathering place, said Yavuz Suyolcu, project director at The Marmara Group, which is overseeing Zeyrek Çinili’s restoration. Turkish bathing culture evolved thanks to the Ottomans, he explained, who considered it central to their social life. ",
      },
      {
        image:
          "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        descriptions: "These days, a visit to a hammam provides a break from the stress of daily life, said Selma Yildirim, director of the luxurious Chi Spa at the Shangri-La Bosphorus. Between the gentle sound of bubbling water, the fresh smell of soap, and the fact that, for this brief period of time, you don’t have to do anything except succumb to the cleansing ritual, it’s not hard to exhale your way into full relaxation mode. It’s an appealing experience and, fortunately, not an intimidating one—even for a newcomer, as I discovered when I visited my first hammam in Istanbul. Knowing what to expect, however, can go a long way in helping you fully soak in your bathing time.",
      },
    ],
    comments: [
      {
        user: "Charlie",
        comment: "Beautiful view!",
        time: "2:00 PM",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        user: "David",
        comment: "Wish I was there!",
        time: "3:45 PM",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
    likeCount: 100,
  },
  {
    id: 2,
    title: "Scenic Mountain View",
    description: "Enjoy the breathtaking view of the mountains",
    time: "October 5, 2022",
    author: {
      username: "Bob",
      displayName: "Bob Smith",
      password: "securepass321",
      email: "bob@example.com",
      avatar: "https://example.com/avatar/bob.jpg",
      phoneNumber: "9876543210",
      salt: "randomsalt456",
      role: "customer",
    }, // Assuming author ID
    content: [
      {
        image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        descriptions: "Mountain landscape",
      },
    ],
    comments: [
      {
        user: "Charlie",
        comment: "Beautiful view!",
        time: "2:00 PM",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        user: "David",
        comment: "Wish I was there!",
        time: "3:45 PM",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
    likeCount: 0,
  },
  {
    id: 3,
    title: "Homemade Pizza Recipe",
    description: "Create your own delicious pizza from scratch",
    time: "October 5, 2022",
    author: {
      username: "Eve",
      displayName: "Eve Johnson",
      password: "strongpass789",
      email: "eve@example.com",
      avatar: "https://example.com/avatar/eve.jpg",
      phoneNumber: "4567890123",
      salt: "randomsalt789",
      role: "customer",
    }, // Assuming author ID
    content: [
      {
        image:
          "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        descriptions: "Freshly baked pizza",
      },
    ],
    comments: [
      {
        user: "Charlie",
        comment: "Beautiful view!",
        time: "2:00 PM",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        user: "David",
        comment: "Wish I was there!",
        time: "3:45 PM",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
    likeCount: 0,
  },
  {
    id: 4,
    title: "Sunset at the Beach",
    description: "Relaxing evening by the beach",
    time: "October 5, 2022",
    author: {
      username: "Mallory",
      displayName: "Mallory Brown",
      password: "safepass567",
      email: "mallory@example.com",
      avatar: "https://example.com/avatar/mallory.jpg",
      phoneNumber: "7890123456",
      salt: "randomsalt234",
      role: "customer",
    }, // Assuming author ID
    content: [
      {
        image:
          "https://images.pexels.com/photos/367493/pexels-photo-367493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        descriptions: "Sunset view at the beach",
      },
    ],
    comments: [
      {
        user: "Charlie",
        comment: "Beautiful view!",
        time: "2:00 PM",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        user: "David",
        comment: "Wish I was there!",
        time: "3:45 PM",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
    likeCount: 0,
  },
];

const user = [
  {
    username: "Alice",
    displayName: "Alice Doe",
    password: "password123",
    email: "alice@example.com",
    avatar: "https://example.com/avatar/alice.jpg",
    phoneNumber: "1234567890",
    salt: "randomsalt123",
    role: "CUSTOMER",
  },
  {
    username: "Bob",
    displayName: "Bob Smith",
    password: "securepass321",
    email: "bob@example.com",
    avatar: "https://example.com/avatar/bob.jpg",
    phoneNumber: "9876543210",
    salt: "randomsalt456",
    role: "RESTAURANT",
    data: {
      location: "New York",
      cuisine: "Italian",
      description: "Authentic Italian cuisine",
      openingHours: '11:00',
      closingHours: '22:00',
      menu: [
        {
          name: "Margherita Pizza",
          price: 10.99,
          description: "Tomato, mozzarella, basil",
        },
        {
          name: "Spaghetti Carbonara",
          price: 15.99,
          description: "Pasta, eggs, cheese, pancetta",
        },
        {
          name: "Tiramisu",
          price: 7.99,
          description: "Coffee-flavored Italian dessert",
        },
      ],
    }
  },
  {
    username: "Eve",
    displayName: "Eve Johnson",
    password: "strongpass789",
    email: "eve@example.com",
    avatar: "https://example.com/avatar/eve.jpg",
    phoneNumber: "4567890123",
    salt: "randomsalt789",
    role: "customer",
  },
  {
    username: "Mallory",
    displayName: "Mallory Brown",
    password: "safepass567",
    email: "mallory@example.com",
    avatar: "https://example.com/avatar/mallory.jpg",
    phoneNumber: "7890123456",
    salt: "randomsalt234",
    role: "customer",
  },
];

const Data = { post, user };

export default Data;

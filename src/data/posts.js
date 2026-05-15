const posts = Array.from(
  { length: 100 },
  (_, index) => ({
    id: index + 1,
    username: `User ${index + 1}`,
    time: `${index + 1}h ago`,
    caption: `This is post number ${
      index + 1
    } 🚀`,
    image: `https://picsum.photos/800/${
      400 + index
    }`,
    likes: Math.floor(
      Math.random() * 500
    ),
    comments: Math.floor(
      Math.random() * 100
    ),
  })
);

export default posts;
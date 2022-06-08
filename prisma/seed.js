const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alicemarti", email: "alice@email.com" },
      { username: "may", email: "may@email.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  const users = await prisma.user.findMany();
  console.log("Heres the data for users", users);

  // Add your code here

  const createdProfiles = await prisma.profile.createMany({
    data: [
      {
        profilePic: "https://profilePic",
        biography: "Hello this is is my short biography.The End.",
        userID: users[0].id,
      },
      {
        profilePic: "https://profilePic2",
        biography: "No biography here",
        userID: users[1].id,
      },
    ],
  });

  console.log("CreatedProfiles:", createdProfiles);

  const createdPosts = await prisma.post.createMany({
    data: [
      {
        picUrl: "https://postpic1",
        title: "This is title 1",
        content: "This is the first content",
        userID: users[0].id,
      },
      {
        picUrl: "https://postpic2",
        title: "This is title 2",
        content: "This is the first content",
        userID: users[1].id,
      },
    ],
  });

  console.log("createdPosts:", createdPosts);

  const createdComments = await prisma.comment.createMany({
    data: [
      {
        content: "This is first comment",
        userID: users[0].id,
        postID: 1,
      },
      {
        content: "This is a reply to the first comment",
        userID: users[1].id,
        postID: 1,
      },
    ],
  });

  console.log("createdComments:", createdComments);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});

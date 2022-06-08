-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "picUrl" TEXT,
    "title" VARCHAR(150) NOT NULL,
    "content" VARCHAR(500) NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "userID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_userID_key" ON "Post"("userID");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

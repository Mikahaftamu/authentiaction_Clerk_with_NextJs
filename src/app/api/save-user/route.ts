import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";


export async function GET() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = user.emailAddresses[0].emailAddress;
  const firstName = user.firstName;
  const lastName = user.lastName;
  const username = user.username;
  const role = user.publicMetadata.role || "user";

  const existingUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: user.id,
        email,
        firstName,
        lastName,
        username,
        role: role as string,
      },
    });
  }

  return NextResponse.json({ message: "User saved!" });
}

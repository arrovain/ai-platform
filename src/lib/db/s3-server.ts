export async function downlaodFromS3(file_key: string) {
  try {
    AWS.config.update({
      accessKeyId: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY_ID!,
      secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY!,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

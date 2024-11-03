import { NextResponse } from "next/server";


export async function POST(request: Request, { params }: { params: { fileType: string } }) {
  const { fileType } = await params;
  const formData = await request.formData();
  const files = formData.getAll('files');
  const uploadedFiles = await Promise.all(
    files.map(async (file: any) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      return {
        name: file.name,
        content: buffer.toString('base64')
      };
    })
  );
  const data = await fetch(`${process.env.BACKEND_URL}/upload_files`, {
    method: 'POST',
    body: JSON.stringify({ files: uploadedFiles, file_type: fileType })
  });
  
  return NextResponse.json(await data.json());
}

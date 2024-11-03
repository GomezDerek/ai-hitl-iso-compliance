import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { companyDocUri, isoUri } = await request.json();
  const isoFilename = isoUri.split('/').pop();
  const companyDocFilename = companyDocUri.split('/').pop();
  console.log(isoFilename, companyDocFilename);

  const data = await fetch(`${process.env.BACKEND_URL}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ company_doc_uri: companyDocFilename, iso_uri: isoFilename })
  });

  return NextResponse.json(await data.json());
}


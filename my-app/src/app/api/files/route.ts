import { NextResponse } from "next/server";
const {Storage} = require('@google-cloud/storage');

const storage = new Storage(
  {
    type: process.env.GCP_TYPE,
    project_id: process.env.GCP_PROJECT_ID,
    private_key_id: process.env.GCP_PRIVATE_KEY_ID,
    private_key: process.env.GCP_PRIVATE_KEY,
    client_email: process.env.GCP_CLIENT_EMAIL,
    client_id: process.env.GCP_CLIENT_ID,
    auth_uri: process.env.GCP_AUTH_URI,
    token_uri: process.env.GCP_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GCP_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GCP_CLIENT_X509_CERT_URL,
    universe_domain: process.env.GCP_UNIVERSE_DOMAIN
  }
);

export async function GET() {
  const data = await fetch(`${process.env.BACKEND_URL}/list_files`);
  const jsonData = await data.json()

  return NextResponse.json(jsonData);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  console.log(formData);
  for (const [key, value] of formData.entries()) {
    storage.bucket(process.env.GCP_BUCKET_NAME).upload(value);
  }
  return NextResponse.json(formData);

}

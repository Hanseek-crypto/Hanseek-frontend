import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const location = "1.3521,103.8198"; // 싱가포르의 위도와 경도
  const radius = "10000"; // 반경 10km
  const language = "en"; // 영어로 설정

  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location}&radius=${radius}&language=${language}&key=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return NextResponse.json(data);
}

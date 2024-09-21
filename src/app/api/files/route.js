const pinataSDK = require("@pinata/sdk");
const pinata = new pinataSDK({
  pinataJWTKey: process.env.NEXT_PUBLIC_PINATA_JWT,
});
import { writeFile, createReadStream, unlink } from "fs";
import { promisify } from "util";
import os from "os";
import path from "path";
const writeFileAsync = promisify(writeFile);
const unlinkAsync = promisify(unlink);

export const dynamic = "force-dynamic"; // defaults to auto

import { NextResponse } from "next/server";

// To handle a POST request to /api
export async function POST(req) {
  try {
    const data = await req.json();
    const { filename, contentType, content } = data;

    // Base64 문자열을 Buffer로 변환
    const buffer = Buffer.from(content, "base64");
    // 임시 파일 경로 생성
    const tempPath = path.join(os.tmpdir(), filename);

    // Buffer를 임시 파일로 저장
    await writeFileAsync(tempPath, buffer);

    // 파일 스트림 생성 및 IPFS에 업로드
    const stream = createReadStream(tempPath);
    const options = {
      pinataMetadata: { name: filename },
    };
    const response = await pinata.pinFileToIPFS(stream, options);

    // 임시 파일 삭제
    await unlinkAsync(tempPath);

    return new Response(JSON.stringify({ ipfsHash: response.IpfsHash }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
  }
}

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

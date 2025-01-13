"use server";

import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export const isMobileDevice = async () => {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server"
    );
  }

  const headersList = await headers();
  const ua = headersList.get("user-agent") || "";

  const device = new UAParser(ua).getDevice();

  return device.type === "mobile" || device.type === "tablet";
};
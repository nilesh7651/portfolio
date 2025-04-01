// Remove the dynamic export line if it exists
// export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export async function GET() {
  throw new Error("Sentry Example API Route Error");
  return Response.json({ data: "Testing Sentry Error..." });
}

export async function POST() {
  return Response.json({ message: "Hello from Sentry!" });
}

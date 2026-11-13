import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

// Load the actual route with its one project alias resolved. Only the external
// provider fetch is replaced; no messages leave this test process.
const routeSource = (await readFile(new URL("../src/app/api/contact/route.ts", import.meta.url), "utf8")).replace("@/lib/contact", new URL("../src/lib/contact.ts", import.meta.url).href);
const { outputText } = ts.transpileModule(routeSource, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const valid = { name: "Test Enquirer", email: "test@example.org", organization: "Test only", interest: "general", message: "A test enquiry that is never sent over the network.", consent: true, website: "" };
function request(body = valid, headers = {}) {
  return new Request("http://localhost:3000/api/contact", { method: "POST", headers: { Origin: "http://127.0.0.1:3000", Host: "127.0.0.1:3000", "Content-Type": "application/json", ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) });
}

test("actual contact handler: origin, configuration, validation, size, dispatch and throttling", async () => {
  const keys = ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL"];
  const previous = keys.map(k => process.env[k]);
  const originalFetch = globalThis.fetch;
  let calls = 0;
  try {
    for (const key of keys) delete process.env[key];
    globalThis.fetch = async () => { throw new Error("Network must not be used without configuration"); };
    assert.equal((await POST(request())).status, 503);
    assert.equal((await POST(request(valid, { Origin: "https://different.example" }))).status, 403);
    process.env.RESEND_API_KEY = "test-key-not-a-real-secret";
    process.env.CONTACT_TO_EMAIL = "recipient@example.org";
    process.env.CONTACT_FROM_EMAIL = "sender@example.org";
    assert.equal((await POST(request({ ...valid, consent: false }))).status, 400);
    assert.equal((await POST(request({ ...valid, website: "bot" }))).status, 400);
    assert.equal((await POST(request("not-json"))).status, 400);
    assert.equal((await POST(request(valid, { "Content-Type": "text/plain" }))).status, 415);
    assert.equal((await POST(request("x".repeat(25000)))).status, 413);
    assert.equal((await POST(request(valid, { "Content-Length": "25000" }))).status, 413);
    globalThis.fetch = async (url, init) => {
      calls++;
      assert.equal(url, "https://api.resend.com/emails");
      const payload = JSON.parse(init.body);
      assert.equal(payload.reply_to, valid.email);
      assert.equal(payload.subject, "New Mirror Metrics website enquiry");
      assert.ok(payload.text.includes(valid.message));
      assert.equal(payload.html, undefined);
      return Response.json({ id: "mock-provider-receipt" });
    };
    for (let i = 0; i < 5; i++) assert.equal((await POST(request())).status, 200);
    assert.equal((await POST(request())).status, 429);
    assert.equal(calls, 5);
    globalThis.fetch = async () => Response.json({ error: "provider rejected" }, { status: 403 });
    assert.equal((await POST(request(valid, { "x-forwarded-for": "test-provider-rejection" }))).status, 502);
    globalThis.fetch = async () => Response.json({});
    assert.equal((await POST(request(valid, { "x-forwarded-for": "test-no-receipt" }))).status, 502);
    globalThis.fetch = async () => { throw new Error("mock timeout"); };
    assert.equal((await POST(request(valid, { "x-forwarded-for": "test-timeout" }))).status, 502);
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((key, i) => { if (previous[i] === undefined) delete process.env[key]; else process.env[key] = previous[i]; });
  }
});

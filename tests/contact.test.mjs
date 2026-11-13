import test from "node:test";
import assert from "node:assert/strict";
import { contactSchema, composeEnquiry, contactReady } from "../src/lib/contact.ts";

const valid = { name: "Test Reader", email: "reader@example.org", organization: "", interest: "social-research", message: "A sufficiently detailed research enquiry.", consent: true, website: "" };
test("valid enquiries are trimmed and keep optional organization", () => {
  const result = contactSchema.parse({ ...valid, name: "  Test Reader  " });
  assert.equal(result.name, "Test Reader");
  assert.equal(result.organization, "");
});
test("rejects missing consent, unknown interests, bot fields and excessive data", () => {
  for (const change of [{ consent: false }, { interest: "unknown" }, { website: "bot.example" }, { message: "short" }, { message: "x".repeat(5001) }, { email: "a@b.org\r\nBcc: x@y.org" }, { name: "x".repeat(101) }, { extra: "unexpected" }]) assert.equal(contactSchema.safeParse({ ...valid, ...change }).success, false);
});
test("email uses plain text and a fixed external subject", () => {
  const body = composeEnquiry({ ...valid, message: "<script>this remains plain text</script>" });
  assert.ok(body.includes("<script>this remains plain text</script>"));
  assert.ok(body.includes("Not provided"));
});
test("delivery stays unavailable without validated server configuration", () => {
  const previous = [process.env.RESEND_API_KEY, process.env.CONTACT_TO_EMAIL, process.env.CONTACT_FROM_EMAIL];
  delete process.env.RESEND_API_KEY; delete process.env.CONTACT_TO_EMAIL; delete process.env.CONTACT_FROM_EMAIL;
  assert.equal(contactReady(), false);
  process.env.RESEND_API_KEY = "test-only-not-a-real-key";
  process.env.CONTACT_TO_EMAIL = "invalid";
  process.env.CONTACT_FROM_EMAIL = "sender@example.org";
  assert.equal(contactReady(), false);
  for (const [i, key] of ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL"].entries()) { if (previous[i] === undefined) delete process.env[key]; else process.env[key] = previous[i]; }
});

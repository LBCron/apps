// What an app's package.json says about its tooling, for the replay of an update: a commit, a version or neither.
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { toolingPinOf } from "../scripts/tooling-pin.mjs";

describe("the tooling an app pins", () => {
  it("is a commit of lernapps/tooling in an app made while the tooling was only in git", () => {
    const sha = "0123456789abcdef0123456789abcdef01234567";
    assert.deepEqual(toolingPinOf(`github:lernapps/tooling#${sha}`), { kind: "commit", value: sha });
  });
  it("is a version of the npm package in an app made since: a range names its lowest, the exact version itself", () => {
    assert.deepEqual(toolingPinOf("^0.1.2"), { kind: "version", value: "0.1.2" });
    assert.deepEqual(toolingPinOf("0.2.10"), { kind: "version", value: "0.2.10" });
  });
  it("is nothing the replay trusts for another repository, a branch, a tag, a path or a wide range", () => {
    for (const spec of ["github:evil/tooling#0123456789abcdef0123456789abcdef01234567", "github:lernapps/tooling#main", "latest", "file:../tooling", "*", ">=0.1.0", undefined]) {
      assert.equal(toolingPinOf(spec).kind, "other", String(spec));
    }
  });
});

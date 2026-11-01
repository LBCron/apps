// What an app's package.json says about its @lernapps/tooling, for the replay of an update (scripts/update-replay.mjs):
// a commit of lernapps/tooling (apps made while the tooling was only in git), a version of the package on npm (apps made
// since: `^0.1.2`, or the exact `0.1.2`), or something else that the replay does not trust.
const COMMIT = /^github:lernapps\/tooling#([0-9a-f]{40})$/;
const VERSION = /^\^?(\d+\.\d+\.\d+)$/;

/** { kind: "commit" | "version" | "other", value }: the commit, the exact version (a range names its lowest), or the spec. */
export function toolingPinOf(spec) {
  const commit = COMMIT.exec(spec ?? "")?.[1];
  if (commit !== undefined) return { kind: "commit", value: commit };
  const version = VERSION.exec(spec ?? "")?.[1];
  if (version !== undefined) return { kind: "version", value: version };
  return { kind: "other", value: spec };
}

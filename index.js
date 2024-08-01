const core = require("@actions/core");
const semver = require("semver");

const getVersion = async (latest, includePreview) => {
  if (latest) {
    const releases = await fetch(
      "https://api.github.com/repos/vegaprotocol/vega/releases/latest"
    );
    const json = await releases.json();
    return await json.tag_name;
  } else {
    const releases = await fetch(
      "https://api.github.com/repos/vegaprotocol/vega/releases"
    );
    const json = await releases.json();
    const allVersions = await json.map((release) => release.tag_name);
    console.log(allVersions);
    const selectedVersions = allVersions.filter(
      (version) =>
        (includePreview && version.includes("preview")) ||
        !version.includes("preview")
    );
    const foundVersion = selectedVersions.reduce((cur, acc) => {
      if (semver.gt(cur, acc)) {
        return cur;
      }
      return acc;
    }, "v0.0.0");
    console.log("Found version:", foundVersion);
    return foundVersion;
  }
};

const run = async () => {
  try {
    const latest = Boolean(core.getInput("latest"));
    const includePreview = Boolean(core.getInput("include-preview-versions"));
    const previousVersion = core.getInput("previous-version");
    console.table([
      ["latest", latest],
      ["includePreview", includePreview],
      ["previousVersion", previousVersion],
    ]);
    if (latest && includePreview) {
      throw new Error(
        "You cannot provide both 'latest' and 'include-preview-versions'"
      );
    }

    const version = await getVersion(latest, includePreview);

    core.setOutput("current-version", version);
    core.setOutput("new-version", semver.gt(version, previousVersion));
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();

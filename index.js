const core = require("@actions/core");
const semver = require("semver");

const getVersion = async () => {
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
    const selectedVersions = allVersions.filter(
      (version) => includePreview && version.includes("preview")
    );
    return selectedVersions.reduce((cur, acc) => {
      if (semver.gt(cur, acc)) {
        return cur;
      }
      return acc;
    }, "v0.0.0");
  }
};

const run = async () => {
  try {
    const latest = Boolean(core.getInput("latest"));
    const includePreview = Boolean(core.getInput("include-preview-versions"));
    const previousVersion = core.getInput("previous-version");

    if (latest && includePreview) {
      throw new Error(
        "You cannot provide both 'latest' and 'include-preview-versions'"
      );
    }

    const version = await getVersion();

    core.setOutput("current-version", version);
    core.setOutput("new-version", semver.gt(version, previousVersion));
  } catch (error) {
    core.setFailed(error.message);
  }
};

module.exports = {
  run,
};

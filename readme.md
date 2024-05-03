# Get vega version

This action prints gets the current version of Vega based on the VegaProtocol github.

## Inputs

### `include-preview-versions`

If you want preview versions of the app. Not compatible with latest.

### `latest`

Get the release marked as latest

### `previous-version`

Check the found version against an existing version, to see if there is a new version.

## Outputs

### `current-version`

The current Vega version

### `new-version`

If there is a new version compared to the previous version inputted. False if no previous version is given.

## Example usage

### Get the version marked latest

```yaml
uses: actions/@vegaprotocol/vega-version-action
with:
  latest: true
```

### Get the most recent non-preview version

```yaml
uses: actions/@vegaprotocol/vega-version-action
with:
  latest: true
```

### Get the most recent version, including preview versions

```yaml
uses: actions/@vegaprotocol/vega-version-action
with:
  include-preview-versions: true
```

### Check against a previous version

```yaml
uses: actions/@vegaprotocol/vega-version-action
with:
  latest: true
  previous-version: "v0.0.1"
```

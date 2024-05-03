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

```yaml
uses: actions/hello-world-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  who-to-greet: "Mona the Octocat"
```

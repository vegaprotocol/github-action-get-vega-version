# Get vega version

This action prints gets the current version of Vega based on the VegaProtocol github.

## Inputs

<!--
  include-preview-versions:
    description: "If you want preview versions of the app. Not compatible with latest."
    required: false
  latest:
    description: "Get the version marked as latest. Not compatible with include-preview-versions."
    required: false
  previous-version:
    description: "Check the found version against an existing version, to see if there is a new version"
    default: "v0.0.0"
    required: false
 -->

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

<!--
  current-version:
    description: "The current Vega version"
  new-version:
    description: "If there is a new version compared to the previous version inputted. False if no previous version is given."
-->

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  who-to-greet: "Mona the Octocat"
```

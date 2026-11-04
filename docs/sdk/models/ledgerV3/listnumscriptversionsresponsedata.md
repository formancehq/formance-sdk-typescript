# ListNumscriptVersionsResponseData

## Example Usage

```typescript
import { ListNumscriptVersionsResponseData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: ListNumscriptVersionsResponseData = {
  latestVersion: "2.0.0",
  versions: [
    {
      version: "1.0.0",
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `latestVersion`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | The current latest — the greatest stored semver                                           | 2.0.0                                                                                     |
| `versions`                                                                                | [ledgerV3.NumscriptVersionEntry](../../../sdk/models/ledgerV3/numscriptversionentry.md)[] | :heavy_minus_sign:                                                                        | Every stored version, highest-first                                                       |                                                                                           |
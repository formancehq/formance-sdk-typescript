# AnalyzeNumscriptRequest

## Example Usage

```typescript
import { AnalyzeNumscriptRequest } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AnalyzeNumscriptRequest = {
  source: "<value>",
  version: "v1",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `source`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | UTF-8 source text, at most 64 KiB. The complete HTTP JSON body is limited to 4 MiB. |                                                                                     |
| `version`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | Numscript language version; currently v1.                                           | v1                                                                                  |
# AnalyzeNumscriptResponseData

## Example Usage

```typescript
import { AnalyzeNumscriptResponseData } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AnalyzeNumscriptResponseData = {
  diagnostics: [
    {
      code: "<value>",
      kind: "compile",
      message: "<value>",
    },
  ],
  inputs: [
    {
      name: "<value>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `diagnostics`                                                       | [ledgerV3.Diagnostic](../../../sdk/models/ledgerV3/diagnostic.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |
| `inputs`                                                            | [ledgerV3.Input](../../../sdk/models/ledgerV3/input.md)[]           | :heavy_check_mark:                                                  | N/A                                                                 |
# V2ConfigInfo

## Example Usage

```typescript
import { V2ConfigInfo } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2ConfigInfo = {
  server: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `experimentalFeatures`                                | *string*[]                                            | :heavy_minus_sign:                                    | Experimental feature flags enabled on this deployment |
| `server`                                              | *string*                                              | :heavy_check_mark:                                    | Name of the server serving the API                    |
| `version`                                             | *string*                                              | :heavy_check_mark:                                    | Version of the ledger service                         |
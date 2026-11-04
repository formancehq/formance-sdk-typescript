# ServerInfo

## Example Usage

```typescript
import { ServerInfo } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: ServerInfo = {
  buildDate: "<value>",
  commit: "<value>",
  goVersion: "<value>",
  protocolVersion: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `buildDate`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Build timestamp (RFC3339, "unknown" if unset)                                                              |
| `commit`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Git commit the binary was built from                                                                       |
| `goVersion`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Go runtime version the binary was built with                                                               |
| `protocolVersion`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Required ledger-protocol-version metadata on Ledger gRPC business RPCs; independent of the release version |
| `version`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Server release version                                                                                     |
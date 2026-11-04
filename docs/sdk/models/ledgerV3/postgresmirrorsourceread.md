# PostgresMirrorSourceRead

## Example Usage

```typescript
import { PostgresMirrorSourceRead } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: PostgresMirrorSourceRead = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `awsIamAuth`                                                                          | [ledgerV3.MirrorAwsIamAuthRead](../../../sdk/models/ledgerV3/mirrorawsiamauthread.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `dsn`                                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | Connection string with password material masked; malformed values are fully redacted  |
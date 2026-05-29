# V3CreateAccountRequest

## Example Usage

```typescript
import { V3AccountTypeEnum, V3CreateAccountRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3CreateAccountRequest = {
  v3AccountTypeEnum: V3AccountTypeEnum.External,
  accountName: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2025-07-16T07:23:02.416Z"),
  reference: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `v3AccountTypeEnum`                                                                           | [payments.V3AccountTypeEnum](../../../sdk/models/payments/v3accounttypeenum.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `v3Metadata`                                                                                  | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `accountName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
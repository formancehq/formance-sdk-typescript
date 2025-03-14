# V3CreateAccountRequest

## Example Usage

```typescript
import { V3AccountTypeEnum, V3CreateAccountRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreateAccountRequest = {
  accountName: "<value>",
  connectorID: "<value>",
  createdAt: new Date("2024-12-28T03:34:41.469Z"),
  reference: "<value>",
  type: V3AccountTypeEnum.Internal,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [shared.V3AccountTypeEnum](../../../sdk/models/shared/v3accounttypeenum.md)                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
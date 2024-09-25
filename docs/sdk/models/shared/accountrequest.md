# AccountRequest

## Example Usage

```typescript
import { AccountRequest, AccountType } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountRequest = {
  connectorID: "<value>",
  createdAt: new Date("2023-03-29T19:05:49.333Z"),
  reference: "<value>",
  type: AccountType.Internal,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `connectorID`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultAsset`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [shared.AccountType](../../../sdk/models/shared/accounttype.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
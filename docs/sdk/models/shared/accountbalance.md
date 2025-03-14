# AccountBalance

## Example Usage

```typescript
import { AccountBalance } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountBalance = {
  accountId: "<id>",
  asset: "<value>",
  balance: BigInt("337581"),
  createdAt: new Date("2024-10-29T15:27:04.484Z"),
  currency: "Leone",
  lastUpdatedAt: new Date("2023-03-25T10:55:20.447Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `asset`                                                                                                                 | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `balance`                                                                                                               | *BigInt*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`currency`~~                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `lastUpdatedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
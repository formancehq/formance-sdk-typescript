# AccountBalance

## Example Usage

```typescript
import { AccountBalance } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountBalance = {
  accountId: "<value>",
  asset: "<value>",
  balance: BigInt("437814"),
  createdAt: new Date("2022-06-02T10:10:05.347Z"),
  currency: "Rand",
  lastUpdatedAt: new Date("2023-04-13T21:17:32.168Z"),
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
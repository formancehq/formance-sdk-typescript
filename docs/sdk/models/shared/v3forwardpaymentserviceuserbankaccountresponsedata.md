# V3ForwardPaymentServiceUserBankAccountResponseData

## Example Usage

```typescript
import { V3ForwardPaymentServiceUserBankAccountResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ForwardPaymentServiceUserBankAccountResponseData = {
  taskID: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskID`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                      | Since this call is asynchronous, the response will contain the ID of the task that was created to forward the bank account to the PSP. You can use the task API to check the status of the task and get the resulting bank account ID.<br/> |
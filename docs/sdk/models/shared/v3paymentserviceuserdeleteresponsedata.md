# V3PaymentServiceUserDeleteResponseData

## Example Usage

```typescript
import { V3PaymentServiceUserDeleteResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentServiceUserDeleteResponseData = {
  taskID: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskID`                                                                                                                                                                                      | *string*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | Since this call is asynchronous, the response will contain the ID of the task that was created to delete the payment service user. You can use the task API to check the status of the task.<br/> |
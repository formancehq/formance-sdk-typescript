# TaskResponseData

## Example Usage

```typescript
import { PaymentStatus, TaskResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponseData = {
  connectorID: "<value>",
  createdAt: new Date("2023-02-08T23:37:33.565Z"),
  descriptor: {},
  id: "3c2da0ca-eb8d-4484-8f30-5808db9ffd97",
  state: {},
  status: PaymentStatus.RefundedFailure,
  updatedAt: new Date("2024-12-20T00:58:21.844Z"),
};
```

## Supported Types

### `shared.TaskStripe`

```typescript
const value: shared.TaskStripe = /* values here */
```

### `shared.TaskWise`

```typescript
const value: shared.TaskWise = /* values here */
```

### `shared.TaskCurrencyCloud`

```typescript
const value: shared.TaskCurrencyCloud = /* values here */
```

### `shared.TaskDummyPay`

```typescript
const value: shared.TaskDummyPay = /* values here */
```

### `shared.TaskModulr`

```typescript
const value: shared.TaskModulr = /* values here */
```

### `shared.TaskBankingCircle`

```typescript
const value: shared.TaskBankingCircle = /* values here */
```

### `shared.TaskMangoPay`

```typescript
const value: shared.TaskMangoPay = /* values here */
```

### `shared.TaskMoneycorp`

```typescript
const value: shared.TaskMoneycorp = /* values here */
```


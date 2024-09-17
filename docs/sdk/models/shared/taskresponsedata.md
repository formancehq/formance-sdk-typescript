# TaskResponseData

## Example Usage

```typescript
import { PaymentStatus, TaskResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponseData = {
  connectorID: "<value>",
  createdAt: new Date("2023-07-25T18:06:31.513Z"),
  descriptor: {},
  id: "e4be0560-13f5-49da-b57a-59ecfef66ef1",
  state: {},
  status: PaymentStatus.DisputeWon,
  updatedAt: new Date("2024-01-22T06:47:49.450Z"),
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


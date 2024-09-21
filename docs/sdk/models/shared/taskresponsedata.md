# TaskResponseData

## Example Usage

```typescript
import { PaymentStatus, TaskResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponseData = {
  connectorID: "<value>",
  createdAt: new Date("2022-05-03T19:56:19.516Z"),
  descriptor: {},
  id: "547e269f-2e17-4735-97df-8d953680293d",
  state: {},
  status: PaymentStatus.Succeeded,
  updatedAt: new Date("2022-04-02T13:11:18.964Z"),
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


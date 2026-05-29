# ConnectorConfig


## Supported Types

### `payments.StripeConfig`

```typescript
const value: payments.StripeConfig = {
  apiKey: "XXX",
  name: "My Stripe Account",
  pageSize: 50,
  pollingPeriod: "120m",
};
```

### `payments.DummyPayConfig`

```typescript
const value: payments.DummyPayConfig = {
  directory: "/tmp/dummypay",
  filePollingPeriod: "60s",
  name: "My DummyPay Account",
};
```

### `payments.WiseConfig`

```typescript
const value: payments.WiseConfig = {
  apiKey: "XXX",
  name: "My Wise Account",
  pollingPeriod: "120m",
};
```

### `payments.ModulrConfig`

```typescript
const value: payments.ModulrConfig = {
  apiKey: "XXX",
  apiSecret: "XXX",
  endpoint: "XXX",
  name: "My Modulr Account",
  pollingPeriod: "120m",
};
```

### `payments.CurrencyCloudConfig`

```typescript
const value: payments.CurrencyCloudConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  loginID: "XXX",
  name: "My CurrencyCloud Account",
  pollingPeriod: "60s",
};
```

### `payments.BankingCircleConfig`

```typescript
const value: payments.BankingCircleConfig = {
  authorizationEndpoint: "XXX",
  endpoint: "XXX",
  name: "My Banking Circle Account",
  password: "XXX",
  pollingPeriod: "120m",
  userCertificate: "XXX",
  userCertificateKey: "XXX",
  username: "XXX",
};
```

### `payments.MangoPayConfig`

```typescript
const value: payments.MangoPayConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My MangoPay Account",
  pollingPeriod: "120m",
};
```

### `payments.MoneycorpConfig`

```typescript
const value: payments.MoneycorpConfig = {
  apiKey: "XXX",
  clientID: "XXX",
  endpoint: "XXX",
  name: "My Moneycorp Account",
  pollingPeriod: "120m",
};
```

### `payments.AtlarConfig`

```typescript
const value: payments.AtlarConfig = {
  accessKey: "XXX",
  baseUrl: "https://api.example.com",
  name: "My Atlar Account",
  pageSize: 50,
  pollingPeriod: "120m",
  secret: "XXX",
  transferInitiationStatusPollingPeriod: "60s",
};
```

### `payments.AdyenConfig`

```typescript
const value: payments.AdyenConfig = {
  apiKey: "XXX",
  hmacKey: "XXX",
  liveEndpointPrefix: "XXX",
  name: "My Adyen Account",
  pollingPeriod: "60s",
};
```

### `payments.GenericConfig`

```typescript
const value: payments.GenericConfig = {
  apiKey: "XXX",
  endpoint: "XXX",
  name: "My Generic Account",
  pollingPeriod: "120m",
};
```


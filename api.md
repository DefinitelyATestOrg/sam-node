# Store

## Orders

Response Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#Order">Order</a>

Methods:

- <code title="get /store/order/{orderId}">client.Store.Orders.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#StoreOrderService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, orderID <a href="https://pkg.go.dev/builtin#int64">int64</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#Order">Order</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="delete /store/order/{orderId}">client.Store.Orders.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#StoreOrderService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, orderID <a href="https://pkg.go.dev/builtin#int64">int64</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>

# Users

Params Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserParam">UserParam</a>

Response Types:

- <a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#User">User</a>

Methods:

- <code title="post /user">client.Users.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserNewParams">UserNewParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/{username}">client.Users.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="put /user/{username}">client.Users.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserService.Update">Update</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserUpdateParams">UserUpdateParams</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="delete /user/{username}">client.Users.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="post /user/createWithList">client.Users.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserService.NewWithList">NewWithList</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserNewWithListParams">UserNewWithListParams</a>) (<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/login">client.Users.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserService.Login">Login</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2">sam</a>.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserLoginParams">UserLoginParams</a>) (<a href="https://pkg.go.dev/builtin#string">string</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/logout">client.Users.<a href="https://pkg.go.dev/github.com/stainless-sdks/sam-go/v2#UserService.Logout">Logout</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>

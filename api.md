# Store

## Orders

Response Types:

- <a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#CoolOrder">CoolOrder</a>

Methods:

- <code title="get /store/order/{orderId}">client.Store.Orders.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#StoreOrderService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, orderID <a href="https://pkg.go.dev/builtin#int64">int64</a>) (<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#CoolOrder">CoolOrder</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="delete /store/order/{orderId}">client.Store.Orders.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#StoreOrderService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, orderID <a href="https://pkg.go.dev/builtin#int64">int64</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>

# Users

Params Types:

- <a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserParam">UserParam</a>

Response Types:

- <a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#User">User</a>

Methods:

- <code title="post /user">client.Users.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserNewParams">UserNewParams</a>) (<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/{username}">client.Users.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>) (<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="put /user/{username}">client.Users.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserService.Update">Update</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserUpdateParams">UserUpdateParams</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="delete /user/{username}">client.Users.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, username <a href="https://pkg.go.dev/builtin#string">string</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>
- <code title="post /user/createWithList">client.Users.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserService.NewWithList">NewWithList</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserNewWithListParams">UserNewWithListParams</a>) (<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#User">User</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/login">client.Users.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserService.Login">Login</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node">sam</a>.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserLoginParams">UserLoginParams</a>) (<a href="https://pkg.go.dev/builtin#string">string</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /user/logout">client.Users.<a href="https://pkg.go.dev/github.com/DefinitelyATestOrg/sam-node#UserService.Logout">Logout</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>) <a href="https://pkg.go.dev/builtin#error">error</a></code>

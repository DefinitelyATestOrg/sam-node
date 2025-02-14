# Store

Types:

- <code><a href="./src/resources/store/store.ts">Order</a></code>

## Orders

Methods:

- <code title="get /store/order/{orderId}">client.store.orders.<a href="./src/resources/store/orders.ts">retrieve</a>(orderId) -> Order</code>
- <code title="delete /store/order/{orderId}">client.store.orders.<a href="./src/resources/store/orders.ts">delete</a>(orderId) -> void</code>

# User

Types:

- <code><a href="./src/resources/user.ts">User</a></code>
- <code><a href="./src/resources/user.ts">UserLoginResponse</a></code>

Methods:

- <code title="post /user">client.user.<a href="./src/resources/user.ts">create</a>({ ...params }) -> User</code>
- <code title="get /user/{username}">client.user.<a href="./src/resources/user.ts">retrieve</a>(username) -> User</code>
- <code title="put /user/{username}">client.user.<a href="./src/resources/user.ts">update</a>(pathUsername, { ...params }) -> void</code>
- <code title="delete /user/{username}">client.user.<a href="./src/resources/user.ts">delete</a>(username) -> void</code>
- <code title="post /user/createWithList">client.user.<a href="./src/resources/user.ts">createList</a>([ ...body ]) -> User</code>
- <code title="get /user/login">client.user.<a href="./src/resources/user.ts">login</a>({ ...params }) -> string</code>
- <code title="get /user/logout">client.user.<a href="./src/resources/user.ts">logout</a>() -> void</code>

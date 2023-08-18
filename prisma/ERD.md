```mermaid
erDiagram
	User {
		String id PK  "cuid()"
		String email
		String password
	}
	Account {
		String id PK  "cuid()"
		String currency
		Float balance
		Int status
		String number
		String userId FK
	}
	Account }o--|| User : user

```

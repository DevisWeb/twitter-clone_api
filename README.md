# Mini-Twitter (Clone) - API for Crossover-Event

> **Backend** project using **Express and MongoDB** in order to create an API
>
> that will be used from a frontend group during a Crossover-Event

## Let's Crossover

### Frontend-Group that was provided with our API:

**Contributors:**

- [@kanisreza](https://github.com/kanisreza)
- [@Massimilianok](https://github.com/Massimilianok)

**Project Repo of the frontend part:** [wbs-mini-twitter](https://github.com/Massimilianok/wbs-mini-twitter)

---

### What our Backend-Group had to do:

**Objectives:**

Store and give data about tweets through a REST API.
Therefore manage at least a list of:

- messages
- users
- messages by Id
- route that returns a random user from the db

---

### Our published API on [Heroku](https://twitter-clone-backend-api.herokuapp.com):

**Endpoints that are now available with this application**

| HTTP Method | ENDPOINTS                 | Description                                                                                                             |
| :---------- | :------------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| GET         | `/ --> /messages`         | retrieves [all messages](https://twitter-clone-backend-api.herokuapp.com/messages)                                      |
| GET         | `/messages/:id`           | retrieves [message by id](https://twitter-clone-backend-api.herokuapp.com/messages/6038dba26ed8d041c1ef41aa)            |
| GET         | `/messages/user/:user_id` | retrieves [messages by user_id](https://twitter-clone-backend-api.herokuapp.com/messages/user/6038d232c650dea2b3b2f36e) |
|             |                           |                                                                                                                         |
| GET         | `/users`                  | retrieves [all users](https://twitter-clone-backend-api.herokuapp.com/users/)                                           |
| GET         | `/users/:id`              | retrieves [user by user_id](https://twitter-clone-backend-api.herokuapp.com/users/6038d2fbc650dea2b3b2f36f)             |
| GET         | `/users/me`               | retrieves [random user](https://twitter-clone-backend-api.herokuapp.com/users/me)                                       |

---

Thank you everyone for a great day! :smile:

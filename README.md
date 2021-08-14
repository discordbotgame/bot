# Bot

#### 1. Clone project

#### 2. Install dependencies

```sh
$ yarn install # or just yarn
```


## Run Locally


### 1. Configure Environment Settings

For unix
```bash
export DISCORD_TOKEN=TOKEN_HERE
```

For windows
```bash
set DISCORD_TOKEN=TOKEN_HERE
```

#### 2. Start in dev mode

```sh
$ yarn dev
```

#### 3. Build and run

```sh
$ yarn deploy
```

or

```sh
$ yarn build && yarn start
```

## Running on Docker

```sh
$ docker build -t discord-bot .
$ docker run -it --rm -e DISCORD_TOKEN="YOUR TOKEN HERE" --name discord-bot discord-bot
```

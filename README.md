# Work in progress

For real.

# Development setup

Install node.js lts

clone this repo

enter folder

```npm install```

Start node 1 with new identity

```node index.js --init --port 47474```

Run with docker

1. Clone this repo, enter directory

2. Install npm dependencies
```npm install```

3. Build docker image
```docker build . --tag="hexagon/decene"```

4. Run docker container
```docker run -d --restart=always -p 47474:47474 hexagon/decene```

5. Make sure port 47474 is open to internet, if you want to run a public spawn

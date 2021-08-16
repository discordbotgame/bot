FROM node:16.6.2

# Create the directory!
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy and Install our bot
COPY package.json /usr/src/bot
RUN yarn install

# Our precious bot
COPY . /usr/src/bot

# Start me!
CMD ["yarn", "dev"]

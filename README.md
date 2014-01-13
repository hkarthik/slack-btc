# Slack BTC ticker
This project is a simple Express.js based web API to use with [Slack](http://www.slack.com) inbound webhooks. It is used to
add a Bitcoin ticker to your channel's Slackbot.

It adds a simple BTC ticker which lists the current USD price of a Bitcoin by checking bitstamp.net and sending back in the right format for a Slack inbound Webhook.

## Env vars
A few ENV vars need to be set for this to work:
* SLACKHOST = Your slack site's hostname.
* SLACK_PATH = Usually /services/hooks/incoming-webhook
* SLACK_TOKEN = Your integration's token

The included .env.example lists these out and can be used as a template.

## Usage
Make an HTTP GET to /ticker to push the current BTC price to Slack.

## Deployment
This project can easily be deployed to Heroku, just set the appropriate ENV Vars and go!

## Tests
This project utilizes [Runscope](http://runscope.com) to test the webhooks via mocha.js.
Run the tests with the following command:
```
mocha -R spec
```

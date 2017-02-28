import {RtmClient, RTM_EVENTS, WebClient} from '@slack/client'
import Commands from './commands'

let token = process.env.SLACK_API_TOKEN || '';

let rtm = new RtmClient(token, {logLevel: 'debug'});
let web = new WebClient(token, {logLevel: 'debug'});

rtm.start();

/**
 * Process all messages
 */
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
    Commands.process(message, rtm, web);
});

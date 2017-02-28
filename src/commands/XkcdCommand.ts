import * as request from 'request'

/**
 * Xkcd Command
 *
 * Retrieves last web comic
 */
class XkcdCommand {

    /**
     * Get recent image from xkcd
     *
     * @param body
     * @param words
     * @param rtm
     * @param web
     * @returns {string}
     */
    public static recentImage(body, words: Array<string>, rtm, web): void {

        let recentImageUrl = 'http://xkcd.com/info.0.json';

        request({
            method: "GET",
            url: recentImageUrl
        }, function(error, response, response_body){
            if (!error && response.statusCode === 200) {

                XkcdCommand.processAndSend(body, response_body, web);

            }
        });

        rtm.send({
            type: 'message',
            channel: body.channel,
            text: 'Retrieving image...',
        });
    }

    /**
     * Processes the JSON response from xkcd
     * and sends it off to Slack
     *
     * @param body
     * @param response_body
     * @param web
     */
    private static processAndSend(body, response_body: any, web): void {

        let formattedResponseBody = JSON.parse(response_body);

        if(formattedResponseBody.title && formattedResponseBody.img) {
            let options = {
                'attachments': [
                    {
                        title: formattedResponseBody.title,
                        image_url: formattedResponseBody.img
                    }
                ]
            };

            web.chat.postMessage(body.channel, 'Today \'s xkcd', options);
        }

    }

}

export default XkcdCommand;
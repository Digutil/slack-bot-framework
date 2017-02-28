import HelloCommand from './HelloCommand'
import XkcdCommand from './XkcdCommand'

/**
 * Commands
 *
 * Processes and direct commands to rightful classes
 */
class Commands {

    /**
     * Process Command
     *
     * @param body
     * @param rtm
     * @param web
     * @returns {any}
     */
    public static process(body, rtm, web): void {

        const dirtyWords = body.text.trim();
        const words = dirtyWords.split(' ');

        switch (words[0]) {
            case 'hello':
                HelloCommand.say_hello(body, words, rtm);
                break;

            case 'xkcd':
                XkcdCommand.recentImage(body, words, rtm, web);
                break;

            case 'help':
                Commands.help_response(body, rtm);
                break;

            default:
                // noOp();
                break;

        }

    }

    /**
     * Help Response
     *
     * @param body
     * @param rtm
     * @returns {string}
     */
    private static help_response(body, rtm): void {
        let message = '```' + "\n";
        message += '- hello {person_name}  [Says hello to {person_name}]' + "\n";
        message += '- xkcd  [Displays the latest xkcd web comic]' + "\n";
        message += '```';

        rtm.send({
            type: 'message',
            channel: body.channel,
            text: message,
        });
    }

}

export default Commands;
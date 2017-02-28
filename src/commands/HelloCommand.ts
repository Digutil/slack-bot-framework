/**
 * Hello Command
 *
 * Says Hello!
 * or Hello {name} (if name is present)
 */
class HelloCommand {

    public static say_hello(body, words: Array<string>, rtm): void {

        let name: string = (typeof words[1] !== 'undefined') ? ' ' + words[1] : '!';

        rtm.send({
            type: 'message',
            channel: body.channel,
            text: 'Hello' + name,
        });
    }

}

export default HelloCommand;
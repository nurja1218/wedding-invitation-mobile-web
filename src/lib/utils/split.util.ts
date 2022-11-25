export function splitMessage(message: string, separator?: string) {
    return message.split(separator || '\n');
}

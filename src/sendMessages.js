export default async function (client, data) {
    await delay()

    for (const contact of data.contacts) {
        // get the number id from whatsapp of this phone number
        const numberDetails = await client.getNumberId(contact);
        // if the phone number is a valid whatsapp account, send the message
        if (numberDetails) {
            const sendMessageData = await client.sendMessage(numberDetails._serialized, data.message); // send message
            console.log(`Message sent to ${contact} successfully`);
        } else {
            console.log(`Mobile number <${contact}> is not registered`);
        }
        
        await delay()
    }
}

async function delay() {
    // add a delay of 5s to don't trigger any whatsapp api blocker
    // !!! this is not necessary a safe method, but it may help
    return new Promise(resolve => setTimeout(resolve, 5000));
}
async function sendInfo(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const currentEventRating = document.getElementById("currentEventRating").value;
    const overallEventRating = document.getElementById("overallEventRating").value;
    const feedback = document.getElementById("feedback").value;
    const annRating = document.getElementById("annRating").value;
    const futEvents = document.getElementById("futEvents").value;

    const webhookContents = {
        embeds: [{
            title: 'Feedback Form Submission',
            fields: [
                { name: 'Username', value: username },
                { name: 'Web && Design Rating', value: currentEventRating },
                { name: 'Overall Event Rating', value: overallEventRating },
                { name: 'Announcement Formatting Rating', value: annRating },
                { name: 'Future Event Suggestions', value: futEvents },
                { name: 'Feedback', value: feedback }
            ],
            color: '12618607'
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1226205834103492648/pKebaMzgQ_oVvPHpBLVvSEH2LhYlv83C-oc-UCQ-RFknVmLpvBuw5mnETfcu1lUWBrt4';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookContents),
    });

    if (response.ok) {
        alert('Feedback sent.')
        document.getElementById("form").reset();
    } else {
        alert('Error occured. Try again later.')
    }
}

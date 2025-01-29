let count = 0;

function timedCount() {
    count++;

    let colors = ['red', 'blue', 'yellow', 'green', 'black', 'brown', 'pink']; // Corrected typo 'yello' to 'yellow'
    let idx = count % colors.length; // Simplified index calculation
    let message = {
        text: colors[idx],
        color: colors[idx]
    };

    // Use postMessage to send data back to the main thread
    postMessage(message);
    setTimeout(timedCount, 500);
}

timedCount();
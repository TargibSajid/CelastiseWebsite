let count = document.getElementById('count').innerText;
count = parseInt(count);

function increase() {
    count++; // increase the number
    document.getElementById('count').innerText = count; // update the HTML
}

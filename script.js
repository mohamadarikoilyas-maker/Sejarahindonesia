/* Reset dasar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body dan font */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

/* Header */
header {
    background: linear-gradient(to right, #e74c3c, #ffffff, #e74c3c); /* Merah-putih */
    color: #fff;
    text-align: center;
    padding: 50px 20px;
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2em;
}

/* Main content */
main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section {
    margin-bottom: 30px;
}

h2 {
    color: #e74c3c;
    margin-bottom: 15px;
}

p {
    margin-bottom: 15px;
}

/* Tombol */
button {
    background: #e74c3c;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
}

button:hover {
    background: #c0392b;
}

/* Video section */
#video {
    text-align: center;
}

video {
    border-radius: 8px;
    margin-top: 10px;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background: #333;
    color: #fff;
    margin-top: 20px;
}

/* Responsif */
@media (max-width: 600px) {
    header h1 {
        font-size: 2em;
    }
    main {
        padding: 10px;
    }
}

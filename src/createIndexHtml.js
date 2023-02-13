
function createIndexHtml(args) {

    const indexHTML = `
    <html>
      <head>
        <style>
            html {
                height: 100vh;
                font-family: Arial, sans-serif;
                font-size: 10px;
                box-sizing: border-box;
            }
            body {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            *, *::before, *::after {
                box-sizing: inherit;
                margin: 0;
                padding: 0;
            }
            .content {
                display: flex;
                flex-direction: column;
                padding: 4rem;
                max-width: 420px;
                margin: 0 auto;
                font-family: Arial, sans-serif;
                background-color: #bfecf9;
                border-radius: 8px;
                color: #2b395c;
            }
    
            h1 {
                font-size: 2.4rem;
                padding: 1.6rem 0;
            }
            h3 {
                font-size: 1.6rem;
                padding: 1.6rem 0 0;
            }
            p {
                padding: 0.5rem 0;
                font-size: 1.6rem;
            }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>Assignment 2</h1>
          <p>${args.today} –– time is ${args.timeNow}</p>
          <h3>Name:</h3> 
          <p>${args.first} ${args.last}</p>
          <h3>Current number of days of React course:</h3> 
          <p>${args.numberOfDays}</p>
          <h3>Input date from terminal</h3> 
          <p>${args.inputDateString}</p>
          <p>${args.result}</p>
          <h3>Npm & node:</h3> 
          <p>${args.process}</p>
          <h3>Git version:</h3> 
          <p>${args.gitVersion}</p>
        </div>
      </body>
    </html>
    `;

    return indexHTML;
}

export default createIndexHtml;
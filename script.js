let btn1 = document.getElementById("myButton");
        let btn2 = document.getElementById("myButton2");
        let copyDiv = document.querySelector(".copyCode");

        let color1 = "#156DAC";
        let color2 = "#DAF1A2";

        const getHexValues = () =>{
            let hexValues = "0123456789abcdef";
            let colors = "#";
            for(let i = 0 ; i  < 6 ; i++){
                colors += hexValues[Math.floor(Math.random()*16)];     
            }
            return colors;
        };
        const handlebutton1 = () =>{  
            color1 = getHexValues();
            console.log(color1);
            document.body.style.backgroundImage = `linear-gradient(to top right, ${color1} , ${color2})`;
            copyDiv.innerHTML = `background-image: linear-gradient(to top right, ${color1} , ${color2})`;
            btn1.innerHTML = color1;

        };

        const handlebutton2 = () =>{  
            color2 = getHexValues();
            console.log(color2);
            document.body.style.backgroundImage = `linear-gradient(to bottom left, ${color1} , ${color2})`;
            copyDiv.innerHTML = `background-image: linear-gradient(to bottom left, ${color1} , ${color2})`;
            btn2.innerHTML = color2;
        };

        btn1.addEventListener('click' , handlebutton1)
        btn2.addEventListener('click' , handlebutton2);

        copyDiv.addEventListener('click' , () =>{
            navigator.clipboard.writeText(copyDiv.innerText);
            alert("Code Copied to clipboard");
        });
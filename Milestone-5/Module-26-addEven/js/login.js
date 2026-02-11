        const loginBtn = document.getElementById('login-btn');
        loginBtn.addEventListener('click', () => {
            const input = document.getElementById('input');
            const inputValue = input.value;
            const userInfo = document.getElementById('user-info');
            if (inputValue == '') {
                userInfo.innerText = "Invalid username"
            } else {

                userInfo.innerText = "Account Login";
            }
            // userInfo.innerText = input;
            console.log("btn clicked")
            input.value = '';
        } )
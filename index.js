const checkBox = document.getElementById("checkbox");
checkBox.addEventListener('change', toggleTheme, false);

const theme = {
    dark: {
        '--bg-color': '#000',
        '--text-color': '#fff'
    },
    light: {
        '--bg-color': '#fff',
        '--text-color': '#000'
    }
}

function toggleTheme(e) {
    if(e.target.checked){
        useTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        useTheme('light');
        localStorage.setItem('theme', 'light')
    }
}

function useTheme(choice){
    let flag = 0;
    if(choice === 'dark'){
        flag = 1;
    } else {
        flag = 0;
    }

    if(flag === 0){
        document.documentElement.style.setProperty(
            "--bg-color",
            theme.light["--bg-color"]
        );

        document.documentElement.style.setProperty(
            "--text-color",
            theme.light["--text-color"]
        );
    } else {
        document.documentElement.style.setProperty(
            "--bg-color",
            theme.dark["--bg-color"]
        );

        document.documentElement.style.setProperty(
            "--text-color",
            theme.dark["--text-color"]
        );
    }
}

const preferredTheme = localStorage.getItem("theme");
if(preferredTheme === 'dark'){
    useTheme('dark');
    checkBox.checked = true;
} else {
    useTheme('light');
    checkBox.checked = false;
}
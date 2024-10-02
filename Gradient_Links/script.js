for(const link of document.getElementsByClassName("link")){
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 60,
        percentRange = 20,
        adjustablePercent = percentRange * decimal;

        const colorPercent = basePercent + adjustablePercent;

        link.style.setProperty("--color-percent", `${colorPercent}%`)
    }
}
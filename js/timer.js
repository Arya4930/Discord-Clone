let watch = document.getElementById('watch');
let timer;

//___________sec, min, hour
let timerArr = [0, 37, 1];

window.onload = function timerHandler() {
    timerArr[0]++;
    if (timerArr[0] > 59) {
        timerArr[1]++;
        timerArr[0] = 0;
        if (timerArr[1] > 59) {
            timerArr[2]++;
            timerArr[1] = 0;
        };
    };
    for (let i = 0; i < timerArr.length; i++){
        if (String(timerArr[i]).length < 2)
        timerArr[i] = '0' + timerArr[i];
        else;
    }
    watch.innerText = `${timerArr[2]} : ${timerArr[1]} : ${timerArr[0]}`;
    timer = setTimeout(timerHandler, 1000);
};
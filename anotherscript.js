iframes = document.getElementsByTagName("iframe");
for (iframe in iframes){
    console.log(iframes[iframe].src);
}
console.log("In another Script");
//Gomb listák
var alapok
function hiddenbtn()
{
    if(alapok==1)
    {
        document.getElementById("hidden").style.display="none";
        return alapok=0;
    }
    else
    {
        document.getElementById("hidden").style.display="inline";
        return alapok=1;
    }
}

var szerver
function hiddenbtn2()
{
    if(szerver==1)
    {
        document.getElementById("hidden2").style.display="none";
        return szerver=0;
    }
    else
    {
        document.getElementById("hidden2").style.display="inline";
        return szerver=1;
    }
}

var op
function hiddenbtn3()
{
    if(op==1)
    {
        document.getElementById("hidden3").style.display="none";
        return op=0;
    }
    else
    {
        document.getElementById("hidden3").style.display="inline";
        return op=1;
    }
}
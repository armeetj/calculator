
isFirst = true;
function insert(val)
{
    if(isFirst)
    {
        clearDisplay();
    }
    console.log(val);
    document.form.display.value = document.form.display.value + val;
    isFirst = false;
}

function clearDisplay()
{
    console.log("clear");
    document.form.display.value = "";
    isFirst = true;
}

function evaluateExpression()
{
    console.log("evaluating...")
    var text = document.form.display.value;
    if(text)
    {
        document.form.display.value = eval(text);  
        isFirst = true;
    }
   
}

function deleteFromEnd()
{
    console.log("deleted character");
    if(document.form.display.value)
    {
        document.form.display.value = document.form.display.value.substring(0,document.form.display.value.length - 1);
    }
}
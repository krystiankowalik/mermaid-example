console.log('Application started');

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
	console.log("logged:" + rawFile.responseText);
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

//readTextFile("file:///C:/your/path/to/file.txt");

console.log(readTextFile("http://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json"));

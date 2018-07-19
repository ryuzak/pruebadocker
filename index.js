let app= require('express')();
app.get('/',(request,response)=> response.send('hola desde api\r\n'));
app.listen(3000, ()=>console.log('todo bien'));

import mongoose from 'mongoose';

const connection={}

async function connect(){
    if(connection?.isConnected){
        console.log('Using existing connection.');
        return;
    }
    if(mongoose.connections.length>0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1){
            console.log('Using existing connection.')
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log('New connection created')
    connection.isConnected = db.connections[0].readyState;
}

export default connect;
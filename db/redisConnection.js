import redis from "redis";

const red=redis.createClient(process.env.REDIS);

client.on("error", function(error) {
    console.error(error);
  });
   

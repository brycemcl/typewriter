const typewriter = (string, interval) => {
  string.split("").reduce((previous, current) => {
    setTimeout(() => {
      process.stdout.write(current);
    }, previous);
    return interval + previous;
  }, interval);
  
  process.stdout.write("\n");
};

const sentence = "hello there from lighthouse labs";
typewriter(sentence, 50);
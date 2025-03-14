const fs = require("fs");

fs.writeFile("test.txt", " I'm fine!", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

fs.appendFile("test.txt", " I'm fine!", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

fs.rename("test.txt", "hello.txt", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

fs.copyFile("hello.txt", "./copy/test.txt", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

fs.unlink("hello.txt", function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

fs.rmdir("./copy", { recussive: true }, function (err) {
  if (err) console.error(err);
  else console.log("Done");
});

fs.readFile("test.txt", "utf8", function (data, err) {
  if (err) console.error(err);
  else console.log(data);
});

import url from "url";

const isCalledFromCli = (script) => {
  return script.url === url.pathToFileURL(process.argv[1]).href;
};

export default isCalledFromCli;

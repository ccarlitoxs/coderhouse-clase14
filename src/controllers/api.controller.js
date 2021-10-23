// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandoms(req, res, next) {
  let { cant } = req.query;

  if (!cant) {
    cant = 100000000;
  }

  let conjNumeros = [];

  for (let i = 0; i < cant; i++) {
    conjNumeros.push(getRandomInt(1, 1001));
  }

  let conjNumerosObj = {};
  for (const numero of conjNumeros) {
    conjNumerosObj={...conjNumerosObj,numero}
  }

  res.json(conjNumeros);
}
export function getInfo(req, res) {
  res.json({
    argumentosDeEntrada: process.argv,
    nombrePlataforma: process.platform,
    versionNode: process.version,
    memoriaTotalReservada: process.memoryUsage().rss,
    pathEjecucion: process.execPath,
    processId: process.pid,
    carpetaProyecto: process.cwd(),
  });
}

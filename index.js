const express = require("express");
const zlib = require("zlib");
const app = express();

const API_URL = "http://servicodados.ibge.gov.br/api/v1/localidades/distritos";

const compressJSON = async (jsonData) => {
  const payload = JSON.stringify(jsonData);

  return new Promise((resolve, reject) => {
    zlib.gzip(payload, (err, compressedData) => {
      if (err) {
        reject(err);
      } else {
        resolve(compressedData);
      }
    });
  });
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados da API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
};

app.get("/dados-distritos", async (req, res) => {
  try {
    const data = await fetchData(API_URL);

    if (req.acceptsEncodings("gzip")) {
      const compressedData = await compressJSON(data);

      res.header("Content-Encoding", "gzip");

      return res.send(compressedData);
    }

    return res.json(data);
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ error: "Erro ao obter dados da API" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});

// 387.11 KB
// 5.04 MB

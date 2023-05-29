// import { useState,useEffect } from "react";

// export const useFetch = (url) =>{
//     const [data, setData]= useState(null)
//     const [loading, setLoading] = useState(false) 

//     useEffect(()=>{
//         setLoading(true)
//         const fetchData = async()=>{
//             const res = await fetch(url)

//             const json = await res.json()

//             setData(json)
//         }
//         fetchData()
//         setLoading(false)
//     }, [url])

//     return {data, loading}
// }
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        mode: 'cors',
        // A linha abaixo permite solicitações inseguras (HTTP)
        // Certifique-se de remover essa linha ou ajustá-la adequadamente quando não precisar mais ignorar o protocolo.
        // No entanto, tenha em mente que essa abordagem não é recomendada para uso em produção.
        // Utilize o HTTPS sempre que possível.
        // Remova essa linha quando estiver pronto para retornar ao uso do protocolo seguro (HTTPS).
        // Certifique-se de compreender os riscos associados antes de remover essa linha.
        insecure: true,
      };

      try {
        const res = await fetch(url, requestOptions);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

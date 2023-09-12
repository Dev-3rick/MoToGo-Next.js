const ConcatEnd = (
  logradouroOrigin,
  numeroOrigin,
  logradouroDestination,
  numeroDestinations
) => {
  const logradouroColetaSemNumero = logradouroOrigin.split(' - ')[0]
  const endColeta = `${logradouroColetaSemNumero} , ${numeroOrigin} - ${logradouroOrigin.split(' - ')[1]
    }`

  const LogradouroDestinoSemNumero = logradouroDestination.split(' - ')[0]
  const endEntrega = `${LogradouroDestinoSemNumero} , ${numeroDestinations} - ${logradouroDestination.split(' - ')[1]
    }`

  return { endColeta, endEntrega }
}

export default ConcatEnd
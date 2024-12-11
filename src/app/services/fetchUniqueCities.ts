const fetchUniqueCities = async (fetchExchangeData: () => Promise<string[][]>): Promise<string[]> => {
  try {
    const data = await fetchExchangeData()
    const cityColumnIndex = data[0].indexOf('City')

    if (cityColumnIndex === -1) throw new Error('Колонка "City" не найдена в данных')

    const cities = data
      .slice(1)
      .map((row) => row[cityColumnIndex])
      .filter((city, index, self) => city && self.indexOf(city) === index)
    return cities
  } catch (error) {
    console.error('Ошибка при получении уникальных городов:', error)
    return []
  }
}

export { fetchUniqueCities }
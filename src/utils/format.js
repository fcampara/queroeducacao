export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL'
})

export const formatDate = (value) => {
  const isoName = 'pt-br'
  if (value.length < 10) return value
  const date = new Date(value)

  return date.getDay() ? new Intl.DateTimeFormat(isoName, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date) : value
}

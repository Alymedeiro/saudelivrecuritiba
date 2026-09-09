/**
 * Dados de contato da Saúde Livre Vacinas Curitiba.
 * ATENÇÃO: preencher com os dados reais antes de publicar.
 */
export const clinic = {
  name: "Saúde Livre Vacinas Curitiba",
  // Número no formato internacional, somente dígitos (ex.: 5541999999999)
  whatsappNumber: "5541999999999",
  whatsappDisplay: "(41) 99999-9999",
  address: "Endereço da unidade — Curitiba, PR",
  hours: "Horário de atendimento a confirmar",
  instagram: "https://instagram.com/",
  instagramHandle: "@saudelivrevacinas",
  maps: "https://www.google.com/maps/search/?api=1&query=Saude+Livre+Vacinas+Curitiba",
};

export function whatsappLink(
  message = "Olá! Gostaria de orientação sobre vacinação na Saúde Livre.",
) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
